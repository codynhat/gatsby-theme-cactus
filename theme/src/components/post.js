/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

import { SEO, Layout, Underline } from "./";
import formatTime from "../../utils/format-time";

const shortcodes = { Underline };

export default function Blog({ data: { blogPost } }) {
  return (
    <Layout>
      <SEO title={blogPost.title} description={blogPost.excerpt} />
      <div sx={{ variant: `layout.post` }}>
        <h1 sx={{ variant: `title`, m: 0 }}>{blogPost.title}</h1>

        <MDXProvider components={shortcodes}>
          <div className="md-body">
            <MDXRenderer>{blogPost.body}</MDXRenderer>
          </div>
        </MDXProvider>
        <hr />
        <h2>Note Metadata</h2>
        <div className="meta">
          <ul>
            <li>
              Created:{" "}
              <time dateTime={formatTime(blogPost.date)}>
                {formatTime(blogPost.date)}
              </time>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
