/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link, graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss, faKey } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useColorMode } from "theme-ui";

const HeaderQuery = graphql`
  query {
    logoLight: file(name: { eq: "logo-light" }) {
      name
      childImageSharp {
        gatsbyImageData(width: 75)
      }
    }
    logoDark: file(name: { eq: "logo-dark" }) {
      name
      childImageSharp {
        gatsbyImageData(width: 75)
      }
    }
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
  }
`;

export default function Header() {
  const {
    logoLight,
    logoDark,
    site: {
      siteMetadata: { title, social },
    },
  } = useStaticQuery(HeaderQuery);

  const [colorMode, setColorMode] = useColorMode();
  const faMappings = {
    GitHub: faGithub,
    Facebook: faFacebook,
    Twitter: faTwitter,
    LinkedIn: faLinkedin,
    RSS: faRss,
    PGP: faKey,
  };
  return (
    <header sx={{ variant: `layout.header` }}>
      <Link to="/" className="logo">
        <GatsbyImage
          image={colorMode == "dark" ? getImage(logoDark) : getImage(logoLight)}
          alt="logo"
        />
      </Link>
      <Link
        to="/"
        sx={{ variant: `links.secondary`, justifySelf: `flex-start` }}
      >
        <h1>{title}</h1>
      </Link>
      <nav sx={{ variant: `layout.nav` }}>
        {social.map((s) => (
          <span key={s.name}>
            <a
              sx={{ variant: `links.social` }}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faMappings[s.name]} size="lg" />
            </a>
          </span>
        ))}
      </nav>
    </header>
  );
}
