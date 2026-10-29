import { BackToTop } from "@/components/portfolio/back-to-top";
import { Contact } from "@/components/portfolio/contact";
import { Credentials } from "@/components/portfolio/credentials";
import { SiteFooter } from "@/components/portfolio/footer";
import { Hero } from "@/components/portfolio/hero";
import { Navbar } from "@/components/portfolio/navbar";
import { Process } from "@/components/portfolio/process";
import { Projects } from "@/components/portfolio/projects";
import { SellingPlatform } from "@/components/portfolio/selling-platform";
import { ScrollAnimations } from "@/components/portfolio/scroll-animations";
import { TechArsenal } from "@/components/portfolio/tech-arsenal";

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <Navbar />
      <main>
        <Hero />
        <TechArsenal />
        <Projects />
        <SellingPlatform />
        <Credentials />
        <Process />
        <Contact />
      </main>
      <SiteFooter />
      <BackToTop />
    </>
  );
}
