import type { GetStaticProps } from "next";
import { getContent } from "@/content";
import type { SiteContent } from "@/content/types";
import Seo from "@/components/seo/Seo";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Moments from "@/components/home/Moments";
import Community from "@/components/home/Community";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";

type HomeProps = {
  content: SiteContent;
};

export const getStaticProps: GetStaticProps<HomeProps> = async ({ locale }) => {
  return { props: { content: getContent(locale) } };
};

export default function Home({ content }: HomeProps) {
  return (
    <>
      <Seo content={content} />
      <Layout personal={content.personal}>
        <Hero personal={content.personal} featured={content.skills.featured} />
        <Moments experiences={content.experiences} />
        <Community community={content.community} />
        <Skills categories={content.skills.categories} />
        <Projects projects={content.projects} />
        <Contact contact={content.contact} />
      </Layout>
    </>
  );
}
