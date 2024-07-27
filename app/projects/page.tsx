"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  redirectPath: string;
  cardID: string;
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
    <div>
      <div className="container">
        <p className="text-center m-5 text-2xl sm:text-7xl">Projects</p>
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
              <div className="absolute inset-0 bg-white opacity-80 text-black"></div>
              <p className="relative z-10 xl:text-4xl lg:text-3xl text-2xl">
                {item.title}
              </p>
              <p className="relative z-10 xl:leading-4">{item.description}</p>
              <Button
                asChild
                className="relative z-10 max-w-20 text-black"
                variant="outline"
              >
                <Link href={item.redirectPath}>View</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
