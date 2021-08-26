import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

export default function SEO({ title, description, children }) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(SEOQuery);
  const seo = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    url: siteMetadata.siteUrl,
    author: siteMetadata.author,
  };
  return (
    <Helmet
      title={title}
      defaultTitle={siteMetadata.title}
      titleTemplate={`%s | ${siteMetadata.title}`}
    >
      <html lang={siteMetadata.lang} />
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image:alt" content={seo.description} />
      <meta name="twitter:creator" content={seo.author} />
      <meta name="gatsby-theme" content="gatsby-theme-cactus" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon-light.png"
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-light-32x32.png"
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-light-16x16.png"
        media="(prefers-color-scheme: light)"
      />
      {children}
    </Helmet>
  );
}

const SEOQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
        author
        lang
      }
    }
  }
`;
