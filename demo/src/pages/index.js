/** @jsx jsx */
import { jsx } from "theme-ui";

import { SEO, Layout } from "@codynhat/gatsby-theme-cactus/src/components";
import RecentList from "../components/recent-list";
import ProjectList from "../components/project-list";

export default function IndexPage() {
  return (
    <Layout>
      <div sx={{ variant: `layout.index` }}>
        <SEO title="Home" />
        <ProjectList />
        <RecentList />
      </div>
    </Layout>
  );
}
