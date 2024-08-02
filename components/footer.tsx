"use client";

import Link from "next/link";

interface footerLinks {
  link: string;
  icon: string;
}

export default function Footer() {
  const links: footerLinks[] = [
    { link: "https://github.com/code2cube/", icon: "bi-github" },
    { link: "https://www.instagram.com/live2cube", icon: "bi-instagram" },
    {
      link: "https://www.linkedin.com/in/samuel-sharivker/",
      icon: "bi-linkedin",
    },
  ];

  return (
    <footer className="bg-black text-white p-5 flex flex-col h-20 text-center justify-center items-center gap-1 z-50">
      <div className="flex gap-3">
        {links.map((item) => (
          <Link key={item.link} href={item.link}>
            <i
              className={`bi ${item.icon} hover:text-red-700 transition ease-in duration-200`}
            ></i>
          </Link>
        ))}
      </div>
      <p className="text-xs">Copyright © Samuel Sharivker 2024</p>
    </footer>
  );
}
