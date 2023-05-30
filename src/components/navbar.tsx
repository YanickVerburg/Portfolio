"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Gradient from "../assets/lineargradient";
import { motion } from "framer-motion";

export default function Navbar() {
  const path = usePathname();
  //path == /about or /projects/janskapsalon
  //trim the path to /about or /projects
  const currentRoute = path.split("/")[1];

  const routes = [
    { name: "Home", href: "", place: 1, width: 17.5, left: 2 },
    { name: "About", href: "about", place: 2, width: 18.5, left: 25.1 },
    { name: "Projects", href: "projects", place: 3, width: 22, left: 49.5 },
    { name: "Travels", href: "travels", place: 4, width: 20, left: 78 },
  ];
  const currentPlace = routes.find((route) => route.href === currentRoute)
    ?.place as number;

  //calculate difference between current place and the place of the clicked route
  //remove negative sign

  return (
    <div className="grid py-4 pt-12 font-medium md:pt-20 xl:grid-cols-3 xl:pt-12">
      <div className="flex w-full justify-center xl:block xl:pl-8">
        <Link href="/" className="w-36 p-4" title="back to home">
          <p className="absolute top-[1.8rem] bg-gradient-to-r from-primary to-logo bg-clip-text text-4xl font-bold text-transparent md:top-[3rem]">
            yan
          </p>
        </Link>
      </div>
      <div className=" flex w-full justify-center">
        <div className=" flex w-full max-w-[300px] items-center justify-center text-sm text-text sm:max-w-full">
          <div className="relative flex w-min scale-[90%] gap-4 rounded-full bg-card px-1 py-1.5 sm:scale-100">
            {routes.map((route) => (
              <Link
                key={route.name}
                className="z-50 rounded-full px-3 py-1.5 transition-all hover:scale-105 "
                href={route.href}
              >
                {route.name}
              </Link>
            ))}

            <motion.div
              initial={{
                width: `${routes[currentPlace - 1]?.width || 96}%`,
                left: `${routes[currentPlace - 1]?.left || 2}%`,
              }}
              animate={{
                width: `${routes[currentPlace - 1]?.width || 96}%`,
                left: `${routes[currentPlace - 1]?.left || 2}%`,
                transition: {
                  duration: 1,
                  ease: "backInOut",
                },
              }}
              className="absolute h-[75%] w-full rounded-full bg-secondary"
            ></motion.div>
          </div>
        </div>
      </div>
      <a
        href="mailto:contact@yanickverburg.nl"
        target="_blank"
        rel="noreffer"
        className="absolute right-4 top-[2.8rem] text-sm text-gray-400 underline sm:right-14 sm:top-[7.25rem] md:top-[3.8rem] xl:right-14 xl:top-[3.6rem]"
      >
        contact
      </a>
    </div>
  );
}
