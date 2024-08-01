"use client";

import Link from "next/link";
import React, { useState } from "react";
import { TransitionLink } from "@/components/TransitionLink";

export default function Navbar() {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };

  return (
    <nav className="bg-black">
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
              <TransitionLink
                href="/"
                className="text-white hover:bg-red-700 hover:text-black rounded-lg p-2 transition ease-in"
              >
                <div className="flex gap-1">
                  <i className="bi bi-house-door-fill"></i>
                  Home
                </div>
              </TransitionLink>
              <TransitionLink
                href="/about"
                className="text-white hover:bg-red-700 hover:text-black rounded-lg p-2 transition ease-in"
              >
                <div className="flex gap-1">
                  <i className="bi bi-file-person-fill"></i>
                  About
                </div>
              </TransitionLink>
              <TransitionLink
                href="/projects"
                className="text-white hover:bg-red-700 hover:text-black rounded-lg p-2 transition ease-in"
              >
                <div className="flex gap-1">
                  <i className="bi bi-gear-fill"></i>
                  Projects
                </div>
              </TransitionLink>
              <TransitionLink
                href="/contact"
                className="text-white hover:bg-red-700 hover:text-black rounded-lg p-2 transition ease-in"
              >
                <div className="flex gap-1">
                  <i className="bi bi-telephone-fill"></i>
                  Contact
                </div>
              </TransitionLink>
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
            <TransitionLink
              href="/"
              className="text-white block hover:bg-red-700 hover:text-black rounded-lg p-2 transition ease-in"
            >
              <div className="flex gap-1">
                <i className="bi bi-house-door-fill"></i>
                Home
              </div>
            </TransitionLink>
            <TransitionLink
              href="/about"
              className="text-white block hover:bg-red-700 hover:text-black rounded-lg p-2 transition ease-in"
            >
              <div className="flex gap-1">
                <i className="bi bi-file-person-fill"></i>
                About
              </div>
            </TransitionLink>
            <TransitionLink
              href="/projects"
              className="text-white block hover:bg-red-700 hover:text-black rounded-lg p-2 transition ease-in"
            >
              <div className="flex gap-1">
                <i className="bi bi-gear-fill"></i>
                Projects
              </div>
            </TransitionLink>
            <TransitionLink
              href="/contact"
              className="text-white block hover:bg-red-700 hover:text-black rounded-lg p-2 transition ease-in"
            >
              <div className="flex gap-1">
                <i className="bi bi-telephone-fill"></i>
                Contact
              </div>
            </TransitionLink>
          </div>
        </div>
      )}
    </nav>
  );
}
