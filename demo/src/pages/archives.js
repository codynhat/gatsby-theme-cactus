import { graphql } from "gatsby";
import { Notes as NotesPage } from "@codynhat/gatsby-theme-cactus/src/components";

export default NotesPage;

export const query = graphql`
  query ArchiveQuery {
    allMdxNote(sort: { fields: [date, title], order: DESC }, limit: 1000) {
      edges {
        node {
          id
          excerpt
          slug
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
