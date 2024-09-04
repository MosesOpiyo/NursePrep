"use client";

import React, { useState } from "react";
import "./navbar.css";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBarsStaggered, FaChevronDown  } from "react-icons/fa6";
import { nursingCourses } from "@/assets/servicesData/services";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
import { navLinks } from "@/assets/servicesData/services";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  const currentPath = usePathname();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar relative z-10 flex justify-between items-center">

      {/* LOGO */}
      <div className="navbar-logo text-2xl">NursePrep</div>

      {/* LARGE SCREEN NAVBAR */}
      <ul className="navbar-link text-white lg:flex gap-4 list-none hidden">
        <li>
          <Link href="/" className={currentPath === "/" ? "active p-2" : "p-2"}>
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            className={currentPath === "/about" ? "active p-2" : "p-2"}
          >
            About
          </Link>
        </li>

        <li className="dropdown">
          <Link
            href="/teas"
            className={currentPath === "/teas" ? "active p-2" : "p-2"}
          >
            ATI LEAS 7
          </Link>
        </li>

        <li>
          <Link
            href="/hesi"
            className={currentPath === "/hesi" ? "active p-2" : "p-2"}
          >
            HESI A2
          </Link>
        </li>

        <li className="dropdown relative">
          <Link
            href="/nursing_school"
            className={currentPath === "/nursing_school" ? "active p-2" : "p-2"}
          >
            <span>
              Nursing School&nbsp;
              <FaChevronDown  className="inline relative bottom-0.5" />
            </span>
          </Link>

          {/* dropdown menu */}
          <div className="nursing-dropdown">
            <ul className="grid grid-cols-2 gap-2">
              {nursingCourses.map((item) =>
                item.course.map((course) => (
                  <li key={course.id}>
                    <Link
                      className="p-2"
                      href={`/nursing_school/${item.id}/${course.id}`}
                      key={course.id}
                    >
                      {course.courseTitle}
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>
        </li>

        <li>
          <Link
            href="/nurseevent"
            className={currentPath === "/events" ? "active p-2" : "p-2"}
          >
            Events
          </Link>
        </li>
      </ul>

      {/* USER AUTH BUTTONS */}
      <div className="navbar-auth flex items-center">
        {isLoggedIn ? (
          <>
            <span>Welcome, User!</span>
            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <button type="button" className="login-button" onClick={handleLogin}>
            Sign in
          </button>
        )}

        <button type="button" className="sign-up-button">
          Sign up
        </button>
      </div>

      {/* MOBILE NAV*/}
      <div className="mobile-nav lg:hidden">
        <Sheet>
          {/* MENU ICON */}
          <SheetTrigger>
            <FaBarsStaggered className="text-white text-2xl cursor-pointer" />
          </SheetTrigger>

          {/* CONTENT */}
          <SheetContent>
            {/* HEADER */}
            <SheetHeader>
              <SheetTitle>MENU</SheetTitle>
              {/* <SheetDescription>Choose menu items</SheetDescription> */}
            </SheetHeader>

            {/* MENU LIST ITEM */}
            <nav>
              <ul className="navbar-link flex flex-col gap-4 list-none">
                {navLinks.map((navlink) => (
                  <li key={navlink.id}>
                    <Link
                      href={navlink.link}
                      className={
                        currentPath === `${navlink.link}` ? "active p-2" : "p-2"
                      }
                    >
                      {`${navlink.linkName}` === "Nursing School" ? (
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            {navlink.linkName}
                            <FaChevronDown  className="text-sml inline relative bottom-0.5 left-1"/>
                          </DropdownMenuTrigger>

                          <DropdownMenuContent>
                            {nursingCourses.map((item) =>
                              item.course.map((course) => (
                                <DropdownMenuItem key={course.id}>
                                  <li key={course.id} className="list-none">
                                    <Link
                                      className="p-2"
                                      href={`/nursing_school/${item.id}/${course.id}`}
                                      key={course.id}
                                    >
                                      {course.courseTitle}
                                    </Link>
                                  </li>
                                </DropdownMenuItem>
                              ))
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ) : (
                        navlink.linkName
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <SheetFooter>
              {/* <SheetClose asChild>
                <Button type="button">Close Menu Bar</Button>
              </SheetClose> */}
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
