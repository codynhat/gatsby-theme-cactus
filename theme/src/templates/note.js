import { graphql } from "gatsby";

import { Note as NotePage } from "../components";

export default NotePage;

export const noteQuery = graphql`
  query NoteQuery($id: String!) {
    mdxNote(id: { eq: $id }) {
      id
      tableOfContents
      body
      excerpt
      slug
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        tags
        canonicalUrl
      }
    }
  }
`;
