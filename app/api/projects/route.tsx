export async function GET(req: Request) {
  try {
    const projects = [
      {
        title: "RiceGrades",
        description:
          "Grading App developed in React with Zi Xuan Yu and Benjamin Chau.",
        redirectPath: "/",
        cardID: "rgCard",
      },
      {
        title: "PenguinImageAPI",
        description: "Rest API to get random images of Penguins.",
        redirectPath: "/",
        cardID: "piaCard",
      },
      {
        title: "SEP10 Freedom Project",
        description:
          "Dental Website which was one of the top 3 projects in the SEP Expo 2023 for Grade 10.",
        redirectPath: "/",
        cardID: "sep10Card",
      },
      {
        title: "LBH Blackhole Game",
        description:
          "Explore different parts of a blackhole in a 2D Unity Game.",
        redirectPath: "/",
        cardID: "lbhbhgCard",
      },
      {
        title: "PigLatin Translator",
        description: "Translate English into Piglatin and vice versa.",
        redirectPath: "/",
        cardID: "pltCard",
      },
      {
        title: "Ice Cube Bot",
        description: "Winter themed PVP Bot made for Snow Codes Bot Jam.",
        redirectPath: "/",
        cardID: "placeholder",
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
