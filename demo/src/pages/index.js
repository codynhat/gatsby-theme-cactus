import React from "react";

import { SEO, Layout } from "@codynhat/gatsby-theme-cactus/src/components";
import BlogList from "../components/blog-list";
import TechList from "../components/tech-list";

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <BlogList />
      <TechList />
    </Layout>
  );
}
