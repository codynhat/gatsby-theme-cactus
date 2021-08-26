import { graphql } from "gatsby";

import { Note as NotePage } from "../components";

export default NotePage;

export const noteQuery = graphql`
  query NoteQuery($id: String!, $previousId: String, $nextId: String) {
    note(id: { eq: $id }) {
      id
      tableOfContents
      body
      excerpt
      slug
      title
      tags
      date(formatString: "DD MMMM, YYYY")
    }
    previous: note(id: { eq: $previousId }) {
      id
      slug
      title
    }
    next: note(id: { eq: $nextId }) {
      id
      slug
      title
    }
  }
`;
