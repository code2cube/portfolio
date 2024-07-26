"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  redirectPath: string;
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
        <div className="justify-items-center m-auto gap-3 grid grid-cols-3">
          {data.map((item) => (
            <div className="min-w-60 min-h-60 bg-slate-500 hover:bg-red-500 hover:scale-90 transition duration-300 ease-in hover:ease-in p-5 text-center flex flex-col items-center gap-3 justify-center rounded-md text-white">
              <p className="text-4xl">{item.title}</p>
              <p className="leading-4">{item.description}</p>
              <Button asChild className="max-w-20 text-black" variant="outline">
                <Link href={item.redirectPath}>View</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
