import LayoutContainer from "@/components/layout/Container";
import PageHomeBanner from "@/components/page/home/Banner";
import PageHomeIntroduction from "@/components/page/home/Introduction";
import PageHomeProjects from "@/components/page/home/Projects";

export default function Index() {
  return (
    <LayoutContainer>
      <PageHomeBanner />
      <PageHomeIntroduction />
      <PageHomeProjects />
    </LayoutContainer>
  );
}
