"use client";

import Link from "next/link";
import React, { useState } from "react";
import { TransitionLink } from "@/components/TransitionLink";

interface navTabs {
  text: string;
  route: string;
  icon: string;
}

export default function Navbar() {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };

  const navPages: navTabs[] = [
    { text: "Home", route: "/", icon: "house-door-fill" },
    { text: "About", route: "/about", icon: "file-person-fill" },
    { text: "Projects", route: "/projects", icon: "briefcase-fill" },
    { text: "Papers", route: "/papers", icon: "archive-fill" },
    { text: "Contact", route: "/contact", icon: "telephone-fill" },
  ];

  return (
    <nav className="bg-black z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <TransitionLink href="/" className="text-white">
                Samuel Sharivker
              </TransitionLink>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              {navPages.map((item) => (
                <TransitionLink
                  key={item.route}
                  href={item.route}
                  className="text-white hover:bg-red-700 rounded-lg p-2 transition ease-in duration-200 transform hover:scale-110"
                >
                  <div className="flex gap-1">
                    <i className={`bi bi-${item.icon}`}></i>
                    {item.text}
                  </div>
                </TransitionLink>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-content p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isClick ? (
                <svg
                  className="h-6 w-6"
                  xmlns="https://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="https://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navPages.map((item) => (
              <TransitionLink
                key={item.route}
                href={item.route}
                className="text-white block hover:bg-red-700 rounded-lg p-2 transition ease-in duration-200"
              >
                <div className="flex gap-1">
                  <i className={`bi bi-${item.icon}`}></i>
                  {item.text}
                </div>
              </TransitionLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
