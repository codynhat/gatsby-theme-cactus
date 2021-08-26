/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

import { SEO, Layout, Underline } from "./";
import formatTime from "../../utils/format-time";

const shortcodes = { Underline };

export default function Note({ data: { note } }) {
  return (
    <Layout>
      <SEO title={note.title} description={note.excerpt} />
      <div sx={{ variant: `layout.note` }}>
        <h1 sx={{ variant: `title`, m: 0 }}>{note.title}</h1>

        <MDXProvider components={shortcodes}>
          <div className="md-body">
            <MDXRenderer>{note.body}</MDXRenderer>
          </div>
        </MDXProvider>
        <hr />
        <h2>Note Metadata</h2>
        <div className="meta">
          <ul>
            <li>
              Created:{" "}
              <time dateTime={formatTime(note.date)}>
                {formatTime(note.date)}
              </time>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
