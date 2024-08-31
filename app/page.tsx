import { Features } from "@/components/Feature";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <FaHome/>,
  },
  // {
  //   name: "About",
  //   link: "/about",
  //   icon: ,
  // },
  // {
  //   name: "Contact",
  //   link: "/contact",
  //   icon: ,
  // },
];

export default function Home() {
  return (
    <main className=" w-auto h-auto overflow-auto scrollbar-hide dark:bg-black-100">
      <FloatingNav navItems={navItems}/>
      <Hero/>
      <Features/>
      <Grid/>
    </main>
  );
}
