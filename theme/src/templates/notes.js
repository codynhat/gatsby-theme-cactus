import { graphql } from "gatsby";

import { Notes as NotesPage } from "../components";

export default NotesPage;

export const query = graphql`
  query NotesQuery {
    allNote(sort: { fields: [date, title], order: DESC }, limit: 1000) {
      edges {
        node {
          id
          excerpt
          slug
          title
          date(formatString: "DD MMMM, YYYY")
        }
      }
    }
  }
`;