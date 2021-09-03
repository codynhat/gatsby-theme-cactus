/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Link } from "gatsby";

import { SEO, Layout, Underline } from "./";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import formatTime from "../../utils/format-time";

export default function Notes({ data: { allMdxNote } }) {
  return (
    <Layout>
      <SEO
        title="Archives"
        description="Collection of all my notes in one place"
      />
      <div className="note" sx={{ variant: `layout.notes` }}>
        <h2 sx={{ mt: 0 }}>Archives</h2>
        <Styled.ul>
          {allMdxNote.edges.map(({ node }) => {
            return (
              <li key={node.id} sx={{ mb: 4 }}>
                <time
                  dateTime={formatTime(node.frontmatter.date)}
                  sx={{ mr: [3], color: `tertiary` }}
                >
                  {formatTime(node.frontmatter.date)}
                </time>
                <Underline themeColor="text" hoverThemeColor="secondary">
                  {node.frontmatter.link ? (
                    <span>
                      <FontAwesomeIcon icon={faLink} size="sm" />{" "}
                    </span>
                  ) : null}
                  <Link
                    to={
                      node.frontmatter.link
                        ? node.frontmatter.link
                        : node.frontmatter.slug ?? node.slug
                    }
                    sx={{ variant: `links.underline` }}
                  >
                    {node.frontmatter.title}
                  </Link>
                </Underline>
                <em
                  sx={{
                    m: 0,
                    display: `block`,
                    "::before": {
                      content: `"\\201C"`,
                    },
                    "::after": {
                      content: `"\\201D"`,
                    },
                  }}
                >
                  {node.excerpt}
                </em>
              </li>
            );
          })}
        </Styled.ul>
      </div>
    </Layout>
  );
}
