import React from "react";
import "./Footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer-container bg-black text-white p-4">
      <div className="footer-content grid items-center gap-4 px-16 py-32">
        <div className="logo">
          <p className="text-5xl">NursePrep</p>
        </div>

        <div className="footercard-container grid grid-cols-4 grid-rows-1 gap-4">
          <div className="footer-card flex flex-col gap-4">
            <p>Products</p>
            <ul className="flex flex-col gap-2">
              <li>Overview</li>
              <li>Features</li>
              <li>Pricing</li>
            </ul>
          </div>

          <div className="footer-card flex flex-col gap-4">
            <p>Company</p>
            <ul className="flex flex-col gap-2">
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-card flex flex-col gap-4">
            <p>Social</p>
            <ul className="flex flex-col gap-2">
              <li>Twitter</li>
              <li>Youtube</li>
              <li>Facebook</li>
            </ul>
          </div>

          <div className="footer-card flex flex-col gap-4">
            <p>Legal</p>
            <ul className="flex flex-col gap-2">
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-end w-4/5 mx-auto flex justify-between p-4">
        <p>&copy;2024. All Rights Reserved</p>

        <div className="socials flex gap-4">
            <span>
            <FaTwitter />
            </span>

            <span>
            <FaFacebookF />
            </span>

            <span>
            <FaYoutube />
            </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
