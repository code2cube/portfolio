"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white p-5 flex flex-col h-20 text-center justify-center items-center gap-1">
      <div className="flex gap-3">
        <Link href="https://github.com/code2cube/">
          <i className="bi bi-github hover:text-red-700"></i>
        </Link>
        <Link href="https://www.instagram.com/live2cube">
          <i className="bi bi-instagram hover:text-red-700"></i>
        </Link>
        <Link href="https://www.linkedin.com/in/samuel-sharivker/">
          <i className="bi bi-linkedin hover:text-red-700"></i>
        </Link>
      </div>
      <p className="text-xs">Copyright © Samuel Sharivker 2024</p>
    </footer>
  );
}
