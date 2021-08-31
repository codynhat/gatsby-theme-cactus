import { graphql } from "gatsby";
import { Notes as NotesPage } from "@codynhat/gatsby-theme-cactus/src/components";

export default NotesPage;

export const query = graphql`
  query ArchiveQuery {
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
