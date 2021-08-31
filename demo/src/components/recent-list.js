/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { graphql, useStaticQuery, Link } from "gatsby";

import { Underline } from "@codynhat/gatsby-theme-cactus/src/components";
import formatTime from "@codynhat/gatsby-theme-cactus/utils/format-time";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function RecentList() {
  const { allMdx } = useStaticQuery(RecentListQuery);

  return (
    <section>
      <Link to="/archives/" sx={{ variant: `links.secondary` }}>
        <h2 sx={{ variant: `title` }}>Recent Writing</h2>
      </Link>
      <Styled.ul>
        {allMdx.edges.map(({ node }) => {
          return (
            <li key={node.id} sx={{ mb: 2 }}>
              <time
                dateTime={formatTime(node.frontmatter.date)}
                sx={{ mr: 3, color: `tertiary` }}
              >
                {" "}
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
                      : node.frontmatter.slug
                  }
                  sx={{ variant: `links.underline` }}
                >
                  {node.frontmatter.title}
                </Link>
              </Underline>
            </li>
          );
        })}
      </Styled.ul>
    </section>
  );
}

const RecentListQuery = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
      limit: 10
    ) {
      edges {
        node {
          id
          excerpt
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
