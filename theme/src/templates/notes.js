import { graphql } from "gatsby";

import { Notes as NotesPage } from "../components";

export default NotesPage;

export const query = graphql`
  query NotesQuery {
    allMdx(
      sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
      limit: 1000
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
