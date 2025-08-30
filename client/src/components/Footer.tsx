import { Link } from "react-router";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import BookHive from "/BookHive.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-200 mt-10">
      <div className="container mx-auto px-3 py-12 grid md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div>
          <h1 className="font-bold text-xl flex items-center gap-2 text-black mb-4">
            <img src={BookHive} className="w-10" alt="BookHive Logo" /> BookHive
          </h1>
          <p className="text-gray-700 text-sm leading-relaxed">
            BookHive is a minimal library management system built with React,
            Redux Toolkit Query, and TypeScript. <br />
            Manage, track, and borrow books in a clean, responsive interface.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Useful Links</h4>
          <ul className="space-y-2 text-gray-700">
            <li>
              <Link to="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/books" className="hover:text-blue-600 transition-colors">
                Browse Books
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
          <p className="text-gray-700 text-sm mb-4">
            Have questions or feedback? Reach out to us through our social
            channels.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">
              <Facebook />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-400 transition">
              <Twitter />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-700 transition">
              <Linkedin />
            </a>
            <a href="#" className="text-gray-700 hover:text-black transition">
              <Github />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-300 py-4 text-center text-gray-700 text-sm">
        © {new Date().getFullYear()} BookHive. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
