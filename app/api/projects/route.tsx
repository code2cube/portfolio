export async function GET(req: Request) {
  try {
    const projects = [
      {
        title: "RiceGrades",
        description:
          "Grading App developed in React with Zi Xuan Yu and Benjamin Chau.",
        cardID: "rgCard",
        repo: "https://github.com/code2cube/RiceGrades",
        view: "ricegrades.pages.dev/",
      },
      {
        title: "PenguinImageAPI",
        description: "Rest API to get random images of Penguins.",
        cardID: "piaCard",
        repo: "https://github.com/code2cube/PenguinImageAPI",
        view: "https://penguin.sjsharivker.workers.dev/api",
      },
      {
        title: "SEP10 Freedom Project",
        description:
          "Dental Website which was one of the top 3 projects in the SEP Expo 2023 for Grade 10.",
        cardID: "sep10Card",
        repo: "https://github.com/samuels0052/sep10-freedom-project",
        view: "samuels0052.github.io/sep10-freedom-project/",
      },
      {
        title: "LBH Blackhole Game",
        description:
          "Explore different parts of a blackhole in a 2D Unity Game.",
        cardID: "lbhbhgCard",
        repo: "https://github.com/samuels0052/LBH-Game",
        view: "https://samuels0052.github.io/LBH-Game/",
      },
      {
        title: "PigLatin Translator",
        description: "Translate English into Piglatin and vice versa.",
        cardID: "pltCard",
        repo: "https://github.com/code2cube/PigLatin",
        view: "https://piglatin.pages.dev/",
      },
      {
        title: "Ice Cube Bot",
        description: "Winter themed PVP Bot made for Snow Codes Bot Jam.",
        cardID: "placeholder",
        repo: "https://github.com/code2cube/Ice-Cube-Bot",
      },
    ];

    const sortedProjects = projects.sort((a, b) =>
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
