/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { graphql, useStaticQuery, Link } from "gatsby";

import { Underline } from "@codynhat/gatsby-theme-cactus/src/components";
import formatTime from "@codynhat/gatsby-theme-cactus/utils/format-time";

export default function RecentList() {
  const { allNote } = useStaticQuery(RecentListQuery);

  return (
    <section>
      <Link to="/archives/" sx={{ variant: `links.secondary` }}>
        <h2 sx={{ variant: `title` }}>Recent Writing</h2>
      </Link>
      <Styled.ul>
        {allNote.edges.map(({ node }) => {
          return (
            <li key={node.id} sx={{ mb: 2 }}>
              <time
                dateTime={formatTime(node.date)}
                sx={{ mr: 3, color: `tertiary` }}
              >
                {" "}
                {formatTime(node.date)}
              </time>
              <Underline themeColor="text" hoverThemeColor="secondary">
                <Link to={`${node.slug}`} sx={{ variant: `links.underline` }}>
                  {node.title}
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
    allNote(sort: { fields: [date, title], order: DESC }, limit: 10) {
      edges {
        node {
          id
          excerpt
          slug
          title
          date(formatString: "DD MMM YYYY")
          tags
        }
      }
    }
  }
`;
