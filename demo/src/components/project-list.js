/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { graphql, useStaticQuery, Link } from "gatsby";

import { Underline } from "@codynhat/gatsby-theme-cactus/src/components";
import formatTime from "@codynhat/gatsby-theme-cactus/utils/format-time";

export default function ProjectList() {
  const { allMdxNote } = useStaticQuery(ProjectListQuery);

  return (
    <section>
      <Link to="/archives/" sx={{ variant: `links.secondary` }}>
        <h2 sx={{ variant: `title` }}>Projects</h2>
      </Link>
      <Styled.ul>
        {allMdxNote.edges.map(({ node }) => {
          return (
            <li key={node.id} sx={{ mb: 2 }}>
              <Underline themeColor="text" hoverThemeColor="secondary">
                <Link
                  to={`${node.frontmatter.slug ?? node.slug}`}
                  sx={{ variant: `links.underline` }}
                >
                  {node.frontmatter.title}
                </Link>
              </Underline>
              : {node.excerpt}
            </li>
          );
        })}
      </Styled.ul>
    </section>
  );
}

const ProjectListQuery = graphql`
  query {
    allMdxNote(
      sort: { fields: [date, title], order: DESC }
      filter: { frontmatter: { tags: { in: "project" } } }
    ) {
      edges {
        node {
          id
          excerpt
          slug
          frontmatter {
            title
            slug
            date(formatString: "DD MMMM, YYYY")
            link
          }
        }
      }
    }
  }
`;
