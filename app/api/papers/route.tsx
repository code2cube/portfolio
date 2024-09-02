interface Paper {
  title: string;
  path: string;
  preview: string;
  authors: string[];
}

export async function GET(req: Request) {
  try {
    const papers: Paper[] = [
      {
        title: "Social Engineering and Malware Propagation",
        path: "/papers/Social_Engineering_and_Malware_Propagation.pdf",
        preview:
          "/img/paperPreviews/Social_Engineering_and_Malware_Propagation.png",
        authors: ["Maxwell Derella", "Samuel Sharivker", "Rafael Aldana-Diaz"],
      },
    ];

    const sortedPapers = papers.sort((a, b) => a.title.localeCompare(b.title));

    return new Response(JSON.stringify({ papers: sortedPapers }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      headers: { "Content-Type": "application/json" },
    });
  }
}
