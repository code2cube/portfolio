import { Octokit } from "@octokit/rest";

interface Project {
  title: string;
  cardID: string;
  repo: string;
  view?: string;
  description?: string;
}

export async function GET(req: Request) {
  try {
    const octokit = new Octokit({
      auth: process.env.GITHUB_API_KEY,
    });

    const getDescription = async (
      owner: string,
      repo: string
    ): Promise<string> => {
      try {
        const { data } = await octokit.repos.get({
          owner,
          repo,
        });
        return data.description ?? "No Description Found";
      } catch (error) {
        console.error(error);
        return "No Description Found";
      }
    };

    const projects: Project[] = [
      {
        title: "RiceGrades",
        cardID: "/img/projectCards/rgCard.jpg",
        repo: "https://github.com/samSharivker/RiceGrades",
        view: "https://ricegrades.pages.dev",
      },
      {
        title: "PenguinImageAPI",
        cardID: "/img/projectCards/piaCard.jpg",
        repo: "https://github.com/samSharivker/PenguinImageAPI",
        view: "https://penguin.sjsharivker.workers.dev/api",
      },
      {
        title: "SEP10 Freedom Project",
        cardID: "/img/projectCards/sep10Card.jpg",
        repo: "https://github.com/samuels0052/sep10-freedom-project",
        view: "https://samuels0052.github.io/sep10-freedom-project/",
      },
      {
        title: "LBH Blackhole Game",
        cardID: "/img/projectCards/lbhbhgCard.jpg",
        repo: "https://github.com/samuels0052/LBH-Game",
        view: "https://samuels0052.github.io/LBH-Game/",
      },
      {
        title: "PigLatin Translator",
        cardID: "/img/projectCards/pltCard.jpg",
        repo: "https://github.com/samSharivker/PigLatin",
        view: "https://piglatin.pages.dev/",
      },
      {
        title: "Ice Cube Bot",
        cardID: "/img/projectCards/icbCard.jpg",
        repo: "https://github.com/samSharivker/Ice-Cube-Bot",
      },
      {
        title: "Eris Bot Template",
        cardID: "/img/projectCards/ebtCard.jpg",
        repo: "https://github.com/samSharivker/Eris-Bot-Template",
      },
    ];

    const promises = projects.map(async (i) => {
      const repoMatch = i.repo.match(/[^/]*$/);
      const ownerMatch = i.repo.match(/\/([^\/]*)\/[^\/]*$/);
      if (repoMatch && ownerMatch) {
        const repo = repoMatch[0];
        const owner = ownerMatch[1];
        i.description = await getDescription(owner, repo);
      } else {
        i.description = "No Description Found";
      }
      return i;
    });

    const updatedProjects = await Promise.all(promises);

    const sortedProjects = updatedProjects.sort((a, b) =>
      a.title.localeCompare(b.title)
    );

    return new Response(JSON.stringify({ projects: sortedProjects }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      headers: { "Content-Type": "application/json" },
    });
  }
}
