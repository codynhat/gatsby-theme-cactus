/** @jsx jsx */
import { jsx } from "theme-ui";

import { SEO, Layout } from "@codynhat/gatsby-theme-cactus/src/components";
import BlogList from "../components/blog-list";
import TechList from "../components/tech-list";

export default function IndexPage() {
  return (
    <Layout>
      <div sx={{ variant: `layout.index` }}>
        <SEO title="Home" />
        <BlogList />
        <TechList />
      </div>
    </Layout>
  );
}
