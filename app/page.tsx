"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";
import { useState, useEffect } from "react";
import LoadingText from "@/components/loading";

interface fetchProject {
  title: string;
  cardID: string;
  repo: string;
}

interface Project {
  title: string;
  link: string;
  thumbnail: string;
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      const fetchData = async () => {
        const response = await fetch("/api/projects");
        const result = await response.json();

        const convertedProject: Project[] = result.projects.map(
          (i: fetchProject) => ({
            title: i.title,
            link: i.repo,
            thumbnail: i.cardID,
          })
        );

        setProjects(convertedProject);
        setLoading(false);
      };

      fetchData();
    }
  }, [loading]);

  return (
    <div>
      {loading ? <LoadingText /> : <HeroParallax products={projects} />}
    </div>
  );
}
