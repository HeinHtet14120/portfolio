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
    <main className=" w-auto h-auto overflow-auto scrollbar-hide">
      <FloatingNav navItems={navItems}/>
      <Hero/>
    </main>
  );
}
