"use client";

import React from "react";
import { useState, useEffect } from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import LoadingText from "@/components/loading";

interface Paper {
  title: string;
  path: string;
  preview: string;
  authors: string[];
}

export default function Papers() {
  const [data, setData] = useState<Paper[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      const fetchData = async () => {
        const response = await fetch("/api/papers");
        const result = await response.json();
        setData(result.papers);
        setLoading(false);
      };

      fetchData();
    }
  }, [loading]);

  return (
    <div className="relative z-0">
      <ShootingStars className="absolute inset-0 z-0" />
      <StarsBackground className="absolute inset-0 z-0" />
      {loading ? (
        <LoadingText />
      ) : (
        <div className="relative text-white min-h-screen z-50 flex flex-col items-center justify-center gap-1 flex-wrap">
          <p className="lg:text-8xl md:text-6xl sm:text-5xl text-2xl text-center">
            Research Papers
          </p>
          <ul className="p-5">
            {data.map((item, index) => (
              <li
                key={item.title}
                className="transition ease-in hover:scale-110 duration-200"
              >
                <LinkPreview
                  url={item.path}
                  imageSrc={item.preview}
                  isStatic
                  className="text-white transition ease-in hover:text-red-700 duration-200 flex flex-col gap-1 flex-wrap items-center"
                >
                  <p className="lg:text-3xl md:text-2xl text-lg leading-tight anton-regular">
                    {index + 1}) {item.title}
                  </p>
                  <p className="lg:text-xl md:text-lg sm:text-sm text-xs caveat-400">
                    By {item.authors.join(", ")}
                  </p>
                </LinkPreview>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
