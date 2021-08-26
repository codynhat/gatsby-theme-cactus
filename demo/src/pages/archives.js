import { graphql } from "gatsby";
import { Notes as NotesPage } from "@codynhat/gatsby-theme-cactus/src/components";

export default NotesPage;

export const query = graphql`
  query ArchiveQuery {
    allNote(sort: { fields: [date, title], order: DESC }, limit: 1000) {
      edges {
        node {
          id
          slug
          title
          date(formatString: "DD MMM YYYY")
          excerpt
          tags
        }
      }
    }
  }
`;
