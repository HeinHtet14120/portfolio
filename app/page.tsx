import Contact from "@/components/Contact";
import { Features } from "@/components/Feature";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Language from "@/components/Language";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

const navItems = [
  {
    name: "Home",
    link: "#home",
    icon: <IconHome />,
  },
  {
    name: "About",
    link: "#about",
    icon: <IconUser />,
  },
  {
    name: "Projects",
    link: "#project",
    icon: (
      <IconMessage />
    ),
  },
  {
    name: "Contact",
    link: "#contact",
    icon: (
      <IconMessage />
    ),
  },
];

export default function Home() {
  return (
    <main className=" w-auto h-auto overflow-auto scrollbar-hide dark:bg-black-100">
      <FloatingNav navItems={navItems} />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <Features />
      </section>
      <Language/>
      <section id="project">
        <Grid />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />

    </main>
  );
}
