/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";

export default function Footer() {
  const {
    site: {
      siteMetadata: { author },
    },
  } = useStaticQuery(FooterQuery);
  return (
    <footer sx={{ variant: `layout.footer` }}>
      <div>
        Copyright &copy; {new Date().getFullYear()} {author}
      </div>
    </footer>
  );
}

const FooterQuery = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`;
