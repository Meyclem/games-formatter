import * as fs from "fs";

type Platform = {
  name: string;
  platform_logo_url: string;
  url: string;
};

type Game = {
  code: number;
  cover_url: string | undefined;
  first_release_date: number;
  genres: string[];
  name: string;
  slug: string;
  summary: string;
  url: string;
  platform: Platform;
};

const fileNames = fs.readdirSync("./data").filter((fileName) => fileName.match(/\.json/));
let games: Game[] = [];
fileNames.forEach((fileName) => {
  const content = JSON.parse(fs.readFileSync(`./data/${fileName}`, "utf-8"));
  const subGames = content.games;
  delete content.games;
  const {
    name: platformName,
    platform_logo: { url: platform_logo_url },
    url: platformUrl,
  } = content;
  games = [
    ...games,
    ...subGames
      .sort(() => 0.5 - Math.random())
      .slice(0, 10)
      .map(({ id: code, cover, first_release_date, genres, name, slug, summary, url }: any) => {
        return {
          code,
          cover_url: cover?.url,
          first_release_date,
          genres: genres?.map(({ name }: any) => name) || [],
          name,
          platform: {
            name: platformName,
            platform_logo_url,
            url: platformUrl,
          },
          slug,
          summary: summary || "",
          url,
        };
      }),
  ];
});

console.log(games);
