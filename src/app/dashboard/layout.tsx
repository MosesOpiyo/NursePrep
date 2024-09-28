import "../../styles/globals.css";
import { topicsArray } from "@/assets/servicesData/services";
import { testsArray } from "@/assets/servicesData/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/Footer";
import { FaQuestion } from "react-icons/fa";
import { FaChevronDown, FaCommentDots, FaBook, FaArrowRightToBracket, FaUser, FaGear, FaClone, FaBell, FaStethoscope } from "react-icons/fa6";
import { Input } from "@/components/ui/input"
import './layout.css';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";



export default function DashboardLayout ({
    children
  }: {
    children: React.ReactNode;
  }) {

  return (
    <section className="dashboard-container">
      <div className="flex relative layoutcontent-container h-full">
        {/* SIDENAV */}
        <div className="sidenav-container overflow-y-auto w-1/4 fixed h-full border-solid p-4 flex-col gap-8 hidden md:flex">
          {/* LOGO */}
          <div className="logo">
            <Link href="/" className="text-3xl flex items-center gap-2">
              {/* <FaStethoscope /> */}
              NURSEPREP
            </Link>
          </div>

          {/* MENU-ITEMS */}
          <div className="dashboard-menu">
            <ul>
              <li>
                <Link href="/dashboard" className="flex gap-1 items-center">
                  <FaClone />
                  My Dashboard
                </Link>
              </li>

              <li>
                <Link href="/hesi" className="flex gap-1 items-center">
                  <FaBook />
                  My Courses
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/account_settings"
                  className="flex gap-1 items-center"
                >
                  <FaGear />
                  Settings
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/account_settings"
                  className="flex gap-1 items-center"
                >
                  <FaCommentDots />
                  Help & Support
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/account_settings"
                  className="flex gap-1 items-center"
                >
                  <FaArrowRightToBracket />
                  Log Out
                </Link>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
        {/* END OF SIDENAV */}

        {/* CONTENT */}
        <div className="maincontent-container flex flex-col gap-4 w-full md:w-3/4 relative md:left-1/4">
          {/* DASHBOARD-NAV */}
          <div className="dashboard-nav fixed w-3/4 bg-white z-50 flex">
            <div className="navbar-container">
              <Navbar />
            </div>

          </div>
          {/* END OF DASHBOARD-NAV */}

          {/* DASHBOARD CONTENT */}
          <div className="dashboard-content py-4 w-11/12 m-auto">
            {children}
          </div>
          {/* END OF DASHBOARD CONTENT */}
        </div>
      </div>

      {/* FOOTER */}
      {/* <div className="relative footer-container">
          <Footer />
        </div> */}
    </section>
  );
}
