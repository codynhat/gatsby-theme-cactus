const fs = require(`fs`);
const path = require(`path`);
const mkdirp = require(`mkdirp`);
const Debug = require(`debug`);
const {
  createFilePath,
  createRemoteFileNode,
} = require(`gatsby-source-filesystem`);
const { urlResolve, createContentDigest, slash } = require(`gatsby-core-utils`);

const debug = Debug(`gatsby-theme-blog-core`);
const withDefaults = require(`./utils/default-options`);

// Ensure that content directories exist at site-level
exports.onPreBootstrap = ({ store }, themeOptions) => {
  const { program } = store.getState();
  const { contentPath, assetPath } = withDefaults(themeOptions);

  const dirs = [
    path.join(program.directory, contentPath),
    path.join(program.directory, assetPath),
  ];

  dirs.forEach((dir) => {
    debug(`Initializing ${dir} directory`);
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
  });
};

const mdxResolverPassthrough =
  (fieldName) => async (source, args, context, info) => {
    const type = info.schema.getType(`Mdx`);
    const mdxNode = context.nodeModel.getNodeById({
      id: source.parent,
    });
    const resolver = type.getFields()[fieldName].resolve;
    const result = await resolver(mdxNode, args, context, {
      fieldName,
    });
    return result;
  };

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;

  createTypes(
    schema.buildObjectType({
      name: `MdxNote`,
      fields: {
        id: { type: `ID!` },
        title: {
          type: `String!`,
        },
        slug: {
          type: `String!`,
        },
        date: { type: `Date!`, extensions: { dateformat: {} } },
        tags: { type: `[String]!` },
        excerpt: {
          type: `String!`,
          args: {
            pruneLength: {
              type: `Int`,
              defaultValue: 140,
            },
          },
          resolve: mdxResolverPassthrough(`excerpt`),
        },
        tableOfContents: {
          type: `JSON!`,
          resolve: mdxResolverPassthrough(`tableOfContents`),
        },
        frontmatter: {
          type: `MdxFrontmatter!`,
          resolve: mdxResolverPassthrough(`frontmatter`),
        },
        body: {
          type: `String!`,
          resolve: mdxResolverPassthrough(`body`),
        },
      },
      interfaces: [`Node`],
      extensions: {
        infer: false,
      },
    })
  );
};

// Create fields for note slugs and source
// This will change with schema customization with work
exports.onCreateNode = async (
  { node, actions, getNode, createNodeId, store, cache },
  themeOptions
) => {
  const { createNode, createParentChildLink } = actions;
  const { contentPath, basePath } = withDefaults(themeOptions);

  // Make sure it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return;
  }

  // Create source field (according to contentPath)
  const fileNode = getNode(node.parent);
  const source = fileNode.sourceInstanceName;

  if (node.internal.type === `Mdx` && source === contentPath) {
    let slug;
    if (node.frontmatter.slug) {
      if (path.isAbsolute(node.frontmatter.slug)) {
        // absolute paths take precedence
        slug = node.frontmatter.slug;
      } else {
        // otherwise a relative slug gets turned into a sub path
        slug = urlResolve(basePath, node.frontmatter.slug);
      }
    } else {
      // otherwise use the filepath function from gatsby-source-filesystem
      const filePath = createFilePath({
        node: fileNode,
        getNode,
        basePath: contentPath,
      });

      slug = urlResolve(basePath, filePath);
    }
    // normalize use of trailing slash
    slug = slug.replace(/\/*$/, `/`);

    const fieldData = {
      title: node.frontmatter.title,
      tags: node.frontmatter.tags || [],
      slug,
      date: node.frontmatter.date,
    };

    const mdxNoteId = createNodeId(`${node.id} >>> MdxNote`);
    await createNode({
      ...fieldData,
      // Required fields.
      id: mdxNoteId,
      parent: node.id,
      children: [],
      internal: {
        type: `MdxNote`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the Note interface`,
      },
    });
    createParentChildLink({ parent: node, child: getNode(mdxNoteId) });
  }
};

// These templates are simply data-fetching wrappers that import components
const NoteTemplate = require.resolve(`./src/templates/note`);
const NotesTemplate = require.resolve(`./src/templates/notes`);

exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { createPage } = actions;
  const { basePath } = withDefaults(themeOptions);

  const result = await graphql(`
    {
      allMdxNote(sort: { order: DESC, fields: [date, title] }, limit: 1000) {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic(result.errors);
  }

  // Create Notes and Note pages.
  const { allMdxNote } = result.data;
  const notes = allMdxNote.edges;

  // Create a page for each Note
  notes.forEach(({ node: note }, index) => {
    const { slug } = note;
    createPage({
      path: slug,
      component: NoteTemplate,
      context: {
        id: note.id,
      },
    });
  });

  // Create the Notes page
  createPage({
    path: basePath,
    component: NotesTemplate,
    context: {},
  });
};
