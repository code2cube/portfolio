"use client";

import React from "react";
import { useState, useEffect } from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

interface Paper {
  title: string;
  path: string;
  preview: string;
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
        <h1 className="text-white text-center">Loading...</h1>
      ) : (
        <div className="relative text-white min-h-screen z-50 flex flex-col items-center justify-center gap-3 flex-wrap">
          <p className="lg:text-8xl md:text-6xl sm:text-5xl text-2xl">
            Research Papers
          </p>
          <ul>
            {data.map((item, index) => (
              <li
                key={item.title}
                className="transition ease-in hover:scale-110 duration-200"
              >
                <LinkPreview
                  url={item.path}
                  imageSrc={item.preview}
                  isStatic
                  className="text-white transition ease-in hover:text-red-700 duration-200 md:text-2xl sm:text-xl"
                >
                  {index + 1}) {item.title}
                </LinkPreview>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
