"use client";

import { LinkPreview } from "@/components/ui/link-preview";
interface footerLinks {
  link: string;
  icon: string;
  preview: string;
}

export default function Footer() {
  const links: footerLinks[] = [
    {
      link: "https://github.com/samSharivker/",
      icon: "github",
      preview: "/img/footerPreviews/github.png",
    },
    {
      link: "https://www.instagram.com/live2cube",
      icon: "instagram",
      preview: "/img/footerPreviews/instagram.png",
    },
    {
      link: "https://www.linkedin.com/in/samuel-sharivker/",
      icon: "linkedin",
      preview: "/img/footerPreviews/linkedin.png",
    },
  ];

  return (
    <footer className="bg-black text-white p-5 flex flex-col h-20 text-center justify-center items-center gap-1 z-50">
      <div className="flex gap-3">
        {links.map((item) => (
          <LinkPreview
            key={item.link}
            url={item.link}
            imageSrc={item.preview}
            isStatic
            className="transition ease-in hover:scale-150 hover:text-red-700 text-white duration-200"
          >
            <i className={`bi bi-${item.icon}`}></i>
          </LinkPreview>
        ))}
      </div>
      <p className="text-xs">Copyright © Samuel Sharivker 2024</p>
    </footer>
  );
}
