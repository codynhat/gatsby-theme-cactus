/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Link } from "gatsby";

import { SEO, Layout, Underline } from "./";
import formatTime from "../../utils/format-time";

export default function Posts({ data: { allBlogPost } }) {
  return (
    <Layout>
      <SEO
        title="Archives"
        description="Collection of all my blogs in one place"
      />
      <div className="blog-post" sx={{ variant: `layout.posts` }}>
        <h2 sx={{ mt: 0 }}>Archives</h2>
        <Styled.ul>
          {allBlogPost.edges.map(({ node }) => {
            return (
              <li key={node.id} sx={{ mb: 4 }}>
                <time
                  dateTime={formatTime(node.date)}
                  sx={{ mr: [3], color: `tertiary` }}
                >
                  {formatTime(node.date)}
                </time>
                <Underline themeColor="text" hoverThemeColor="secondary">
                  <Link to={node.slug} sx={{ variant: `links.underline` }}>
                    {node.title}
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
