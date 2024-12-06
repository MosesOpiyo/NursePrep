"use client";

import React from "react";
import "./navbar.css";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nursingCourses, navLinks } from "@/assets/servicesData/services";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaChevronDown, FaMagnifyingGlass, FaArrowRightFromBracket, FaCommentDots, FaBook, FaArrowRightToBracket, FaUser, FaGear, FaClone, FaBell, FaStethoscope, FaBarsStaggered, FaRegCircleUser } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from 'next/navigation';
import { useAuth } from "@/app/contexts/AuthContext";
import { Settings, FileClock, LayoutDashboard, LogOut, UserRoundCog, User, Wallet } from 'lucide-react'



const Navbar: React.FC = () => {
  const currentPath = usePathname();
  const router = useRouter()
  const { isLoggedIn, setIsLoggedIn } = useAuth()

  const handleLogin = () => {
    setIsLoggedIn(true)
    localStorage.setItem('isLoggedIn', 'true')
    router.push('/dashboard')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('isLoggedIn')
    router.push('/')
  }

  return (
    <nav className="navbar relative z-10 flex justify-between items-center">
      {/* LOGO */}
      <div className="navbar-logo text-2xl">NursePrep</div>

      {/* LARGE SCREEN NAVBAR */}
      <ul className="navbar-link text-white lg:flex gap-4 list-none hidden">
        {!isLoggedIn && (
          <>
            <li className="home">
              <Link
                href="/"
                className={currentPath === "/" ? "active p-2" : "p-2"}
              >
                Home
              </Link>
            </li>
            <li className="about">
              <Link
                href="/about"
                className={currentPath === "/about" ? "active p-2" : "p-2"}
              >
                About
              </Link>
            </li>
          </>
        )}
        <li className="dropdown">
          <Link
            href="/teas-test"
            className={currentPath === "/teas-test" ? "active p-2" : "p-2"}
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
              <FaChevronDown className="inline relative bottom-0.5" />
            </span>
          </Link>
          {/* dropdown menu */}
          <div className="nursing-dropdown">
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <Link href="/nursing_school" className="p-2">
                  <span>All Nursing School Courses</span>
                </Link>
              </li>
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
      <div className="hidden sm:flex navbar-auth items-center">
        {isLoggedIn ? (
          // DISPLAY WHEN USER IS LOGGED IN
          <>
            <div className="nav-content flex items-center justify-end p-4 gap-8">
              {/* NOTIFS ICON */}
              <div className="notifications">
                <Popover>
                  <PopoverTrigger className="flex items-center justify-center gap-1">
                    <FaBell />
                  </PopoverTrigger>
                  <PopoverContent>
                    <div>
                      <p>Your exam date is tomorrow</p>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              {/* SEARCH ICON*/}
              <div className="search">
                <Popover>
                  <PopoverTrigger className="flex items-center justify-center gap-1">
                    <FaMagnifyingGlass />
                  </PopoverTrigger>
                  <PopoverContent>
                    <div>
                      <Input type="search" placeholder="Search..." />
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              {/* AVATAR */}
              <div className="icon flex gap-2 items-center justify-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <Popover>
                  <PopoverTrigger className="user-name flex items-center justify-center gap-1">
                    Hi, Isaac
                    <FaChevronDown />
                  </PopoverTrigger>
                  <PopoverContent>
                    <div>
                      <ul className="flex flex-col gap-1">
                        {/* MY PROFILE */}
                        <li>
                          <Link
                            href="/dashboard/profile"
                            className="flex gap-3 py-4 items-center"
                          >
                            <Avatar>
                              <AvatarImage src="https://github.com/shadcn.png" />
                              <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span className="flex flex-col">
                              <span className="font-semibold leading-4">Isaac</span>
                              <span className="leading-4">isaac@gmail.com</span>
                            </span>
                          </Link>
                        </li>

                        {/* MY DASHBOARD */}
                        <li>
                          <Link
                            href="/dashboard"
                            className="flex gap-1 items-center"
                          >
                            <LayoutDashboard />
                            My Dashboard
                          </Link>
                        </li>

                        {/* TEST HISTORY */}
                        <li>
                          <Link
                            href="/dashboard/test_history"
                            className="flex gap-1 items-center"
                          >
                            <FileClock />
                            My Test History
                          </Link>
                        </li>

                        {/* SETTINGS */}
                        <li>
                          <Link
                            href="/dashboard/account_settings"
                            className="flex gap-1 items-center"
                          >
                            <Settings />
                            Settings
                          </Link>
                        </li>

                        {/* MY SUBSCRIPTIONS */}
                        <li>
                          <Link
                            href="/dashboard/test_history"
                            className="flex gap-1 items-center"
                          >
                            <Wallet />
                            Subscription & Billing
                          </Link>
                        </li>

                        {/* LOG OUT */}
                        <li>
                          <button
                            type="button"
                            onClick={handleLogout}
                            className="flex gap-1 items-center"
                          >
                            <LogOut />
                            Log out
                          </button>
                        </li>
                      </ul>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </>
        ) : (
          // DISPLAY IF USER IS NOT LOGGED IN
          <div className="flex items-center justify-center">
            {/* LOG IN BUTTON AND SIGN UP BUTTON DISPLAY IF NOT LOGGED IN */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="login-button">
                  Sign In
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] flex flex-col gap-4 items-center">
                <DialogHeader>
                  <DialogTitle className="text-center">Login</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col w-full gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      defaultValue="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Password
                    </Label>
                    <Input
                      id="username"
                      defaultValue="@peduarte"
                      className="col-span-3"
                      type="password"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" onClick={handleLogin}>
                    Sign In
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <div className="sign-up-button">
              <Link href="/register">Sign Up</Link>
            </div>
          </div>
        )}
      </div>

      {/* MOBILE USER AUTH BUTTONS */}
      <div className="sm:hidden flex">
        <Dialog>
          <DialogTrigger>
            <FaRegCircleUser className="text-white text-2xl" />
          </DialogTrigger>
          <DialogContent>
            <div className="flex flex-col gap-4 navbar-auth items-center text-black">
              {isLoggedIn ? (
                <>
                  <span>Welcome, User!</span>
                  <button
                    type="button"
                    className="text-black"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="login-button">
                      Sign In
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] flex flex-col gap-4 items-center">
                    <DialogHeader>
                      <DialogTitle className="text-center">Login</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col w-full gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input
                          id="name"
                          defaultValue="Pedro Duarte"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Password
                        </Label>
                        <Input
                          id="username"
                          defaultValue="@peduarte"
                          className="col-span-3"
                          type="password"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" onClick={handleLogin}>
                        Sign In
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              )}
              <div className="sign-up-button">
                <Link href="/membership">Sign Up</Link>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* MOBILE NAV*/}
      <div className="mobile-nav lg:hidden flex">
        <Sheet>
          <SheetTrigger>
            <FaBarsStaggered className="text-white text-2xl cursor-pointer" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>MENU</SheetTitle>
            </SheetHeader>
            <nav>
              <ul className="navbar-link flex flex-col gap-4 list-none">
                {!isLoggedIn && (
                  <>
                    <li>
                      <Link
                        href="/"
                        className={currentPath === "/" ? "active p-2" : "p-2"}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        className={
                          currentPath === "/about" ? "active p-2" : "p-2"
                        }
                      >
                        About
                      </Link>
                    </li>
                  </>
                )}
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
                            <FaChevronDown className="text-sml inline relative bottom-0.5 left-1" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <p className="ps-4 text-sm pt-4 pb-1 cursor-pointer">
                              All {navlink.linkName} Courses
                            </p>
                            <ul>
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
                            </ul>
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
            <SheetFooter></SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;