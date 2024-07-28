"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  cardID: string;
  repo: string;
  view: string;
}

export default function Projects() {
  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/projects");
      const result = await response.json();
      setData(result.projects);
    };

    fetchData();
  }, []);

  return (
    <div
      className="relative w-full"
      style={{
        backgroundImage: `url('/img/bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="relative z-10 p-5">
        <p className="text-center m-5 text-2xl sm:text-7xl text-white">
          Projects
        </p>
        <div className="justify-items-center m-auto gap-5 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {data.map((item) => (
            <div
              className="relative xl:w-96 md:w-56 sm:w-72 lg:w-72 w-80 my-5 hover:scale-90 transition-transform duration-300 ease-in p-5 text-center flex flex-col items-center gap-3 justify-center rounded-lg"
              style={{
                backgroundImage: `url('/img/projectCards/${item.cardID}.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-white opacity-80 text-black rounded-lg"></div>
              <p className="relative z-10 xl:text-4xl lg:text-3xl text-2xl playfair-display-header">
                {item.title}
              </p>
              <p className="relative z-10 xl:leading-4">{item.description}</p>
              <div className="flex gap-3">
                <Button
                  asChild
                  className="relative z-10 max-w-20 text-black"
                  variant="outline"
                >
                  <Link href={item.repo}>Code</Link>
                </Button>
                {item.view && (
                  <Button
                    asChild
                    className="relative z-10 max-w-20 text-black"
                    variant="outline"
                  >
                    <Link href={item.view}>View</Link>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
