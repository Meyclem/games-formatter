type Platform = {
  name: string;
  platform_logo_url: string;
  url: string;
};

type Game = {
  code: number;
  cover_url?: string;
  first_release_date?: number;
  genres: string[];
  name: string;
  slug: string;
  summary: string;
  url: string;
  platform: Platform;
};

export const games: Game[] = [
  {
    code: 25150,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co2do3.jpg",
    first_release_date: 683683200,
    genres: [],
    name: "Navy Seals",
    platform: {
      name: "Game Boy",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl7m.jpg",
      url: "https://www.igdb.com/platforms/gb",
    },
    slug: "navy-seals--1",
    summary: "",
    url: "https://www.igdb.com/games/navy-seals--1",
  },
  {
    code: 75981,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/knhcks0a8zsl5lrockn1.jpg",
    first_release_date: 807235200,
    genres: ["Fighting", "Hack and slash/Beat 'em up"],
    name: "Mighty Morphin Power Rangers: The Movie",
    platform: {
      name: "Game Boy",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl7m.jpg",
      url: "https://www.igdb.com/platforms/gb",
    },
    slug: "mighty-morphin-power-rangers-the-movie--2",
    summary:
      "The Game Boy version of Mighty Morphin Power Rangers: The Movie is a single-player side-scrolling action game similar to the SNES version. The player can choose to play as any of the six rangers, who will start off each stage as a Ninja Ranger. The Red, Blue, and White Rangers are the stronger characters, while Black, Pink, and Yellow are more agile. By defeating enemies throughout each stage, mainly Putty Patrols, and accumulating enough Thunderbolt items to fill up the power gauge, the player can transform their character into a Power Ranger. Filling up the power gauge again while in Power Ranger mode will allow the player to perform a super attack. The game consists of six stages. The first five stages can be played in any order, while the sixth one can only be played after completing the other five.",
    url: "https://www.igdb.com/games/mighty-morphin-power-rangers-the-movie--2",
  },
  {
    code: 81421,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co1ldt.jpg",
    first_release_date: 673056000,
    genres: ["Arcade"],
    name: "The Hunt for Red October",
    platform: {
      name: "Game Boy",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl7m.jpg",
      url: "https://www.igdb.com/platforms/gb",
    },
    slug: "the-hunt-for-red-october--1",
    summary: "",
    url: "https://www.igdb.com/games/the-hunt-for-red-october--1",
  },
  {
    code: 106315,
    cover_url: undefined,
    first_release_date: undefined,
    genres: [],
    name: "4-in-1 Version 3",
    platform: {
      name: "Game Boy",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl7m.jpg",
      url: "https://www.igdb.com/platforms/gb",
    },
    slug: "4-in-1-version-3",
    summary:
      "4 -in 1 Volume 3, also known as Commin 4-in-1, was the third volume of 4-in-1 multicarts made by Sachen. It contains: Taiwan's Mahjong, Japan's Mahjong, Hong Kong's Mahjung, and Store Tris 2.",
    url: "https://www.igdb.com/games/4-in-1-version-3",
  },
  {
    code: 48919,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co2dog.jpg",
    first_release_date: 649468800,
    genres: [],
    name: "Penguin Wars",
    platform: {
      name: "Game Boy",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl7m.jpg",
      url: "https://www.igdb.com/platforms/gb",
    },
    slug: "penguin-wars",
    summary:
      "Penguin Wars (ぺんぎんくんWARS Pengin-kun WARS?) is an arcade game released in 1985 by UPL. It was ported to the original Game Boy (1990), MSX and Nintendo Entertainment System by ASCII under the title Penguin Wars. The Game Boy version of the game is known as King of the Zoo in Europe and Penguin-Kun Wars Vs. in Japan.",
    url: "https://www.igdb.com/games/penguin-wars",
  },
  {
    code: 48998,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/wslh4kfdztvmttqri1nx.jpg",
    first_release_date: 820454400,
    genres: ["Pinball"],
    name: "The Getaway: High Speed II",
    platform: {
      name: "Game Boy",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl7m.jpg",
      url: "https://www.igdb.com/platforms/gb",
    },
    slug: "the-getaway-high-speed-ii",
    summary:
      "The Getaway: High Speed II is an Action game, developed by Unexpected Development and published by Williams, which was released in 1995.",
    url: "https://www.igdb.com/games/the-getaway-high-speed-ii",
  },
  {
    code: 49018,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/yz4rmb8tw4gz0olbiesl.jpg",
    first_release_date: 673056000,
    genres: ["Platform", "Puzzle"],
    name: "Solomon's Club",
    platform: {
      name: "Game Boy",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl7m.jpg",
      url: "https://www.igdb.com/platforms/gb",
    },
    slug: "solomons-club",
    summary:
      "Solomon's Club is a Puzzle game, developed by Graphic Research and published by Tecmo, which was released in 1991.",
    url: "https://www.igdb.com/games/solomons-club",
  },
  {
    code: 48981,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/qbsdtdfipaxtz32w0jb4.jpg",
    first_release_date: 642988800,
    genres: ["Sport"],
    name: "Heavyweight Championship Boxing",
    platform: {
      name: "Game Boy",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl7m.jpg",
      url: "https://www.igdb.com/platforms/gb",
    },
    slug: "heavyweight-championship-boxing",
    summary:
      "Once the player chooses a boxer, the other challengers must be defeated in order to gain the title. Points can be distributed and re-distributed on the fighter's health meter, stamina, and how fast he moves around in the ring. Either uppercuts or normal punches can be used to wear down the opponent in the game.",
    url: "https://www.igdb.com/games/heavyweight-championship-boxing",
  },
  {
    code: 49003,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co1izq.jpg",
    first_release_date: 752112000,
    genres: ["Sport"],
    name: "NFL Quarterback Club",
    platform: {
      name: "Game Boy",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl7m.jpg",
      url: "https://www.igdb.com/platforms/gb",
    },
    slug: "nfl-quarterback-club",
    summary:
      "NFL Quarterback Club is game developed by Condor and published by LJN Ltd. It was released in November 1993.",
    url: "https://www.igdb.com/games/nfl-quarterback-club",
  },
  {
    code: 62559,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/n6w6yefm6h8mk8ybvnlb.jpg",
    first_release_date: 889142400,
    genres: ["Racing"],
    name: "Initial D Gaiden",
    platform: {
      name: "Game Boy",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl7m.jpg",
      url: "https://www.igdb.com/platforms/gb",
    },
    slug: "initial-d-gaiden",
    summary:
      "Initial D Gaiden is the first video game in the Initial D series for Game Boy advance. It's only in Japanese Language",
    url: "https://www.igdb.com/games/initial-d-gaiden",
  },
  {
    code: 3607,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/f2ve6i2m3uid8s4vqblv.jpg",
    first_release_date: 901238400,
    genres: ["Shooter"],
    name: "Super B-Daman: Battle Phoenix 64",
    platform: {
      name: "Nintendo 64",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl78.jpg",
      url: "https://www.igdb.com/platforms/n64",
    },
    slug: "super-b-daman-battle-phoenix-64",
    summary:
      "Super B-Daman Battle Phoenix 64 is an Action game, developed and published by Hudson, which was released in Japan in 1998.",
    url: "https://www.igdb.com/games/super-b-daman-battle-phoenix-64",
  },
  {
    code: 3636,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co2byu.jpg",
    first_release_date: 912384000,
    genres: ["Sport"],
    name: "WCW/nWo Revenge",
    platform: {
      name: "Nintendo 64",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl78.jpg",
      url: "https://www.igdb.com/platforms/n64",
    },
    slug: "wcw-nwo-revenge",
    summary:
      "More than 60 wrestlers, including ALL of the top WCW and NWO superstars! Awesome new features including wrestler entrances, all the real WCW belts, hidden weapons, instant replay, completely updated roster and complete user stats and arcade style scores! Enjoy real pay-per-view arenas, 40-man Battle Royale mode, and a costume editing feature!",
    url: "https://www.igdb.com/games/wcw-nwo-revenge",
  },
  {
    code: 3334,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/p6xef4pvytuqg3balgpy.jpg",
    first_release_date: 897436800,
    genres: ["Simulator", "Strategy"],
    name: "Virtual Chess 64",
    platform: {
      name: "Nintendo 64",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl78.jpg",
      url: "https://www.igdb.com/platforms/n64",
    },
    slug: "virtual-chess-64",
    summary:
      "Transform your N64 into a powerful chess adversary. The most awesome chess engine adapts to any skill level. Learning is endless fun yet even superb players face the maximum challenge. Brilliant graphics brings this classic game alive. Become the next chess legend!",
    url: "https://www.igdb.com/games/virtual-chess-64",
  },
  {
    code: 3474,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/uoisexmwx6o0xapkkwxl.jpg",
    first_release_date: 964742400,
    genres: ["Platform", "Adventure"],
    name: "Doraemon 3: Nobita's Town SOS!",
    platform: {
      name: "Nintendo 64",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl78.jpg",
      url: "https://www.igdb.com/platforms/n64",
    },
    slug: "doraemon-3-nobita-s-town-sos",
    summary:
      "Doraemon 3: Nobita no Machi SOS! (Doraemon 3: Nobita's Town SOS!) is an action game for the Nintendo 64. It was released only in Japan in 2000. The game is based on the Japanese manga Doraemon and has is the sequel to two N64 games, Doraemon: Nobita to Mittsu no Seireiseki and Doraemon 2: Nobita to Hikari no Shinden, all only released in Japan.",
    url: "https://www.igdb.com/games/doraemon-3-nobita-s-town-sos",
  },
  {
    code: 3543,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/h0sf06tjxc9spcs6bjtu.jpg",
    first_release_date: 891561600,
    genres: ["Strategy"],
    name: "Morita Shogi 64",
    platform: {
      name: "Nintendo 64",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl78.jpg",
      url: "https://www.igdb.com/platforms/n64",
    },
    slug: "morita-shogi-64",
    summary:
      "Morita Shogi 64 is a Japanese virtual board game for the Nintendo 64. It was released only in Japan in 1998. It is the sequel to Saikyō Habu Shōgi, a launch game for the Nintendo 64. The cartridge has a built-in RJ-42 Modem Connection port with which players were able to connect to (now defunct) servers to play against other players all around Japan.",
    url: "https://www.igdb.com/games/morita-shogi-64",
  },
  {
    code: 3510,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/yl2yrfqabzpfzlq9ebog.jpg",
    first_release_date: 880675200,
    genres: ["Simulator"],
    name: "Pachinko World HEIWA 64",
    platform: {
      name: "Nintendo 64",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl78.jpg",
      url: "https://www.igdb.com/platforms/n64",
    },
    slug: "pachinko-world-heiwa-64",
    summary: "Heiwa Pachinko World 64 is a pachinko game",
    url: "https://www.igdb.com/games/pachinko-world-heiwa-64",
  },
  {
    code: 47686,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/i1syctoowcuyidiuljx5.jpg",
    first_release_date: 917740800,
    genres: [],
    name: "BattleTanx",
    platform: {
      name: "Nintendo 64",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl78.jpg",
      url: "https://www.igdb.com/platforms/n64",
    },
    slug: "battletanx",
    summary:
      "In the year 2001, a virus has killed 99.99% of the females on Earth. Various countries fight over each other's quarantine zones, and end up engaging in nuclear war, destroying much of civilization. The few remaining females are held by gangs who have taken over small pieces of the world. The main character, Griffin Spade, had his fiancee Madison taken away from Queens, New York by the U.S. Government. Griffin ends up separated from his fiancee, and New York City is destroyed. He claims a tank for his own and sets out to cross America and find her, battling gangs as he reaches his goal. After surviving the ruins of New York City, Griffin heads westward gaining recruits in the countryside, Chicago, Las Vegas, and San Francisco.",
    url: "https://www.igdb.com/games/battletanx",
  },
  {
    code: 3420,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/plwxxtj2vlye84fibvli.jpg",
    first_release_date: 946598400,
    genres: ["Simulator", "Sport"],
    name: "Bass Masters 2000",
    platform: {
      name: "Nintendo 64",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl78.jpg",
      url: "https://www.igdb.com/platforms/n64",
    },
    slug: "bass-masters-2000",
    summary: "A bass fishing game.",
    url: "https://www.igdb.com/games/bass-masters-2000",
  },
  {
    code: 132838,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co2a64.jpg",
    first_release_date: 1575244800,
    genres: ["Platform"],
    name: "Sunshine Secret Book 64",
    platform: {
      name: "Nintendo 64",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl78.jpg",
      url: "https://www.igdb.com/platforms/n64",
    },
    slug: "sunshine-secret-book-64",
    summary:
      "Sunshine Secret Book 64 is a ROM hack released on December 2, 2019 by Dan-GPTV. The hack has 40 Shine Sprites to collect, and they are spread across 5 main levels and 3 secret levels. This hack has multiple custom objects in it.",
    url: "https://www.igdb.com/games/sunshine-secret-book-64",
  },
  {
    code: 3368,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co2b2n.jpg",
    first_release_date: 907113600,
    genres: ["Shooter"],
    name: "Buck Bumble",
    platform: {
      name: "Nintendo 64",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl78.jpg",
      url: "https://www.igdb.com/platforms/n64",
    },
    slug: "buck-bumble",
    summary:
      "A chemical spill somewhere in rural England has mutated an army of bees into killer insects! Led by their queen, they are out to destroy everything living thing on the planet, including all insects that dare stop them. \n" +
      "Only Buck Bumble, the only bee not to be turned evil by the ways of the queen, can save the world, and his fellow insects, from total destruction. \n" +
      " \n" +
      "Shoot down swarms of enemy bees, while flying and avoiding the hazards bellow or land on the ground and attack the enemies on foot with various weapons. Also included are a handful of two-player split-screen modes, including Buzz Ball, a unique soccer style game.",
    url: "https://www.igdb.com/games/buck-bumble",
  },
  {
    code: 70548,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/lmkbmpdajqzpfrprq6oi.jpg",
    first_release_date: 1235692800,
    genres: ["Simulator"],
    name: "Let's Play Fashion Designer",
    platform: {
      name: "Nintendo DS",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6t.jpg",
      url: "https://www.igdb.com/platforms/nds",
    },
    slug: "lets-play-fashion-designer",
    summary: "No info",
    url: "https://www.igdb.com/games/lets-play-fashion-designer",
  },
  {
    code: 18856,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/fyzvzudri5zeydq36sft.jpg",
    first_release_date: 1291852800,
    genres: ["Role-playing (RPG)", "Adventure"],
    name: "Ni no Kuni: Dominion of the Dark Djinn",
    platform: {
      name: "Nintendo DS",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6t.jpg",
      url: "https://www.igdb.com/platforms/nds",
    },
    slug: "ni-no-kuni-dominion-of-the-dark-djinn",
    summary:
      "Ni no Kuni is a series of role-playing games developed by Level-5. The series chiefly follows the young Oliver, and his journey to another world to save his mother and stop the beckoning evil. The games utilize several magic elements, allowing players to use magical abilities during gameplay, as well as creatures known as imajinn/familiars, which can be tamed for suitability during battle.",
    url: "https://www.igdb.com/games/ni-no-kuni-dominion-of-the-dark-djinn",
  },
  {
    code: 21395,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/x7ejfu96e2rs0fmkwy6j.jpg",
    first_release_date: 1177891200,
    genres: ["Racing", "Sport"],
    name: "Konami Classics Series Arcade Hits",
    platform: {
      name: "Nintendo DS",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6t.jpg",
      url: "https://www.igdb.com/platforms/nds",
    },
    slug: "konami-classics-series-arcade-hits",
    summary:
      "Konami Classics Series Arcade Hits is a compilation of 15 games from the early days of Konami: \n" +
      " \n" +
      "Gradius \n" +
      "Rush'n Attack \n" +
      "Contra \n" +
      "Scramble \n" +
      "Horror Maze \n" +
      "Pooyan \n" +
      "Time Pilot \n" +
      "Roc'n Rope \n" +
      "Track and Field \n" +
      "Circus Charlie \n" +
      "Basketball \n" +
      "Road Fighter \n" +
      "Yie Ar KUNG-FU \n" +
      "Rainbow Bell \n" +
      "Shao-Lin's Road",
    url: "https://www.igdb.com/games/konami-classics-series-arcade-hits",
  },
  {
    code: 56852,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/hnnvimvs91ewhsbnq92q.jpg",
    first_release_date: 1401926400,
    genres: ["Real Time Strategy (RTS)"],
    name: "Cardfight!! Vanguard: Lock on Victory!!",
    platform: {
      name: "Nintendo DS",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6t.jpg",
      url: "https://www.igdb.com/platforms/nds",
    },
    slug: "cardfight-vanguard-lock-on-victory",
    summary:
      "Cardfight!! Vanguard: Lock on Victory!! is the second Cardfight!! Vanguard video game to be released on the Nintendo 3DS.",
    url: "https://www.igdb.com/games/cardfight-vanguard-lock-on-victory",
  },
  {
    code: 7979,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/uejqbqhh5r94vdtjsk3l.jpg",
    first_release_date: 1148428800,
    genres: ["Adventure"],
    name: "Miss Spider's Sunny Patch Friends: Harvest Time Hop and Fly",
    platform: {
      name: "Nintendo DS",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6t.jpg",
      url: "https://www.igdb.com/platforms/nds",
    },
    slug: "miss-spiders-sunny-patch-friends-harvest-time-hop-and-fly",
    summary:
      "Miss Spider's Sunny Patch Friends: Harvest Time Hop and Fly is a DS game that was developed by Shin'en Multimedia.",
    url: "https://www.igdb.com/games/miss-spiders-sunny-patch-friends-harvest-time-hop-and-fly",
  },
  {
    code: 47874,
    cover_url: undefined,
    first_release_date: 1355356800,
    genres: ["Music"],
    name: "Nickelodeon Big Time Rush Backstage Pass",
    platform: {
      name: "Nintendo DS",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6t.jpg",
      url: "https://www.igdb.com/platforms/nds",
    },
    slug: "nickelodeon-big-time-rush-backstage-pass",
    summary:
      "Big Time Rush: Backstage Pass brings the music of your favorite band to life! Use your stylus to keep up with the beat of the music and get Big Time Scores. Tap and slide the marks on the screen to unlock more songs and locations. With all their top hits including Big Night, Windows Down, Boyfriend, and Elevate you won't be able to put down your Nintendo DS.",
    url: "https://www.igdb.com/games/nickelodeon-big-time-rush-backstage-pass",
  },
  {
    code: 9887,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co25t4.jpg",
    first_release_date: 1164153600,
    genres: ["Role-playing (RPG)"],
    name: "Lunar Knights",
    platform: {
      name: "Nintendo DS",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6t.jpg",
      url: "https://www.igdb.com/platforms/nds",
    },
    slug: "lunar-knights",
    summary:
      "Descend into the gothic Sci-Fi world of Lunar Knights and take control of two warriors on a quest to reclaim the world from the vampiric legion. Spin together tornados, guide down flaming meteors, and blow together snowstorms in Kojima Productions first ever title on Nintendo DS!",
    url: "https://www.igdb.com/games/lunar-knights",
  },
  {
    code: 21481,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/pltzkljez9eblloie4da.jpg",
    first_release_date: 1186617600,
    genres: ["Role-playing (RPG)", "Strategy"],
    name: "Rondo of Swords",
    platform: {
      name: "Nintendo DS",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6t.jpg",
      url: "https://www.igdb.com/platforms/nds",
    },
    slug: "rondo-of-swords",
    summary:
      "The King of Bretwalde is dead. His passing, both unexpected and unusual, leaves the kingdom in distress. As one realm mourns, another readies for war; the Grand Meir Empire, intent on conquering the world, prepares to strike the empty throne. Taken by surprise, the army of Bretwalde collapses under the vicious assault, and the capital city of Egvard is quick to fall. Only Spanta, the sacred blade, can spare the kingdom of its fate. Free it of its curse and restore honor and peace to the land!",
    url: "https://www.igdb.com/games/rondo-of-swords",
  },
  {
    code: 61009,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/lpa5u6csf3j7dqgpuexr.jpg",
    first_release_date: 1190332800,
    genres: ["Simulator"],
    name: "Paws & Claws Best Friends: Dogs & Cats",
    platform: {
      name: "Nintendo DS",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6t.jpg",
      url: "https://www.igdb.com/platforms/nds",
    },
    slug: "paws-and-claws-best-friends-dogs-and-cats",
    summary: "A dual-species pet simulator from THQ.",
    url: "https://www.igdb.com/games/paws-and-claws-best-friends-dogs-and-cats",
  },
  {
    code: 47854,
    cover_url: undefined,
    first_release_date: 1229558400,
    genres: ["Simulator"],
    name: "Petz Monkeyz House",
    platform: {
      name: "Nintendo DS",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6t.jpg",
      url: "https://www.igdb.com/platforms/nds",
    },
    slug: "petz-monkeyz-house",
    summary:
      "For the first time ever in the Petz series, create an entire family of dogs, cats, horses and monkeys. Crossbreed and create your own looks and personality for your pet. Raise your pet and create a strong relationship.",
    url: "https://www.igdb.com/games/petz-monkeyz-house",
  },
  {
    code: 48478,
    cover_url: undefined,
    first_release_date: 642556800,
    genres: ["Strategy"],
    name: "GunHed: Aratanaru Tatakai",
    platform: {
      name: "Nintendo Entertainment System (NES)",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6d.jpg",
      url: "https://www.igdb.com/platforms/nes",
    },
    slug: "gunhed-aratanaru-tatakai",
    summary:
      "GunHed: Aratanaru Tatakai is a Strategy game, developed by Toho and published by Varie, which was released in Japan in 1990.",
    url: "https://www.igdb.com/games/gunhed-aratanaru-tatakai",
  },
  {
    code: 48141,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/qhh2u7gcm9xxcdwvlfba.jpg",
    first_release_date: 602294400,
    genres: ["Strategy"],
    name: "Crystal Mines",
    platform: {
      name: "Nintendo Entertainment System (NES)",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6d.jpg",
      url: "https://www.igdb.com/platforms/nes",
    },
    slug: "crystal-mines",
    summary:
      'You control a CM-205 mining robot, your goal is to retrieve "Starla" crystals from various mines on a remote planet. Using the robot you need to locate your quota of crystals while avoiding the many dangers present in the mines, including lava, rock slides, and unfriendly creatures. The robot is equipped with explosives to help reach remote locations in the mine, or destroy any creatures getting in the way (be careful with explosives, you could set off a rock slide and crush the robot!) Once your crystal quota is met, quickly locate the exit and move on to the next, more challenging mine. Crystal Mines is part action and part strategy. There is a time limit to locate the crystals in each mine, plus avoiding falling rocks and monsters will keep you on your toes, but before long you will need to figure out how to locate crystals by properly removing obstructions and navigating tricky mazes.',
    url: "https://www.igdb.com/games/crystal-mines",
  },
  {
    code: 48680,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/y8htjqf06zozcplciluc.jpg",
    first_release_date: 713145600,
    genres: ["Role-playing (RPG)", "Strategy"],
    name: "Dragon Ball Z III: Ressen Jinzou Ningen",
    platform: {
      name: "Nintendo Entertainment System (NES)",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6d.jpg",
      url: "https://www.igdb.com/platforms/nes",
    },
    slug: "dragon-ball-z-iii-ressen-jinzou-ningen",
    summary:
      "Dragon Ball Z III: Ressen Jinzou Ningen is the sequel of Dragon Ball Z II: Gekishin Freeza. The game starts off in the Frieza Saga as Super Saiyan Goku fighting Frieza, and it ends in the Imperfect Cell Saga in the battle of Piccolo against Imperfect Cell. The game also features characters from the movie Dragon Ball Z: Cooler's Revenge.Is the first game in the Gokuden series where power levels are not stated. Its sequel in the series is Dragon Ball Z Gaiden: Saiyajin Zetsumetsu Keikaku.",
    url: "https://www.igdb.com/games/dragon-ball-z-iii-ressen-jinzou-ningen",
  },
  {
    code: 48419,
    cover_url: undefined,
    first_release_date: 636681600,
    genres: [],
    name: "Mottomo Abunai Deka",
    platform: {
      name: "Nintendo Entertainment System (NES)",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6d.jpg",
      url: "https://www.igdb.com/platforms/nes",
    },
    slug: "mottomo-abunai-deka",
    summary:
      "Mottomo Abunai Deka is an Action game, developed by Micronics and published by Toei Animation, which was released in Japan in 1990.",
    url: "https://www.igdb.com/games/mottomo-abunai-deka",
  },
  {
    code: 18834,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/i88zrxy1nen1qyy2rxsc.jpg",
    first_release_date: 518400000,
    genres: ["Shooter", "Platform", "Arcade"],
    name: "Gumshoe",
    platform: {
      name: "Nintendo Entertainment System (NES)",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6d.jpg",
      url: "https://www.igdb.com/platforms/nes",
    },
    slug: "gumshoe",
    summary:
      "Jennifer's been kidnapped! Now's your chance to prove you're a sharp-shooting detective by helping Jennifer's father find the five diamonds that will pay her ransom. You'll use your Zapper light gun to blow away anything that gets in your way. But even with the Zapper, this case will be hard to crack. Because not only are the diamonds hard to find, but you only have 24 hours to find them! What's more, you'll have to think fast and shoot even faster, because ferocious monsters, diving airplanes and hungry man-eating sharks will stop at nothing to prevent you from getting to the diamonds. Think you're a sharp-shooting detective? Well, you better be. Because if you're not, it's curtains for you in this quick-on-the-trigger Nintendo Light Gun game!",
    url: "https://www.igdb.com/games/gumshoe",
  },
  {
    code: 48882,
    cover_url: undefined,
    first_release_date: 609724800,
    genres: ["Role-playing (RPG)"],
    name: "Taro's Quest",
    platform: {
      name: "Nintendo Entertainment System (NES)",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6d.jpg",
      url: "https://www.igdb.com/platforms/nes",
    },
    slug: "taros-quest",
    summary:
      "A ninja-themed RPG by Jaleco for the NES. A US release was planned, but canceled. \n" +
      " \n" +
      "Jajamaru Ninpou Chou is part of Jaleco's Ninja Jajamaru-Kun series. Jajamaru-Kun (sometimes spelled JaJaMaru-Kun) is the younger brother of the original Ninja-Kun, who starred in a couple of UPL arcade games known in the west as Ninja-Kid and Ninja-Kid 2. When Jaleco ported the original arcade game to NES, they created the character of Ninja Jajamaru-Kun and continued making games that featured the character. Jajamaru Ninpou Chou is his third Famicom game. \n" +
      " \n" +
      "However, unlike the two previous Ninja Jajamaru-Kun games, which were action platformers, Ninpou Chou is a traditional JRPG. The player walks around a world map visiting towns and dungeons and occasionally fighting random encounters using a separate turn-based combat screen. \n" +
      " \n" +
      "Worth noting is that this game was slated for a 1990 US release with the name Taro's Quest, though it was later canceled. However, an incomplete prototype version of the ROM exists. As well as an English localization, the game appeared to have had its graphics almost entirely redrawn in order to appear more realistic than the cartoonish original.",
    url: "https://www.igdb.com/games/taros-quest",
  },
  {
    code: 8946,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/dqvz2moc0a95xexabggb.jpg",
    first_release_date: 594345600,
    genres: ["Puzzle", "Strategy", "Quiz/Trivia"],
    name: "Anticipation",
    platform: {
      name: "Nintendo Entertainment System (NES)",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6d.jpg",
      url: "https://www.igdb.com/platforms/nes",
    },
    slug: "anticipation",
    summary: `Anticipation was marketed as Nintendo's "first video board game", and was developed by Rare for the Nintendo Entertainment System in 1988. It allowed for single player against computer-controlled opponents, as well as multiplayer with support for up to four players.`,
    url: "https://www.igdb.com/games/anticipation",
  },
  {
    code: 48611,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/wpyi4v4vzjkuo0epzznr.jpg",
    first_release_date: 719712000,
    genres: ["Role-playing (RPG)"],
    name: "Dream Master",
    platform: {
      name: "Nintendo Entertainment System (NES)",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6d.jpg",
      url: "https://www.igdb.com/platforms/nes",
    },
    slug: "dream-master",
    summary:
      "The Kingdom Of Oltaria is a peaceful one, thanks to the power of its Lord King \n" +
      "Akinas. The king's daughter, Princess FAQS, is about to turn 16, but one day an \n" +
      "evil old man known as the Black Master turns up determined to have FAQS for \n" +
      "himself, and he drags her into the world of nightmares: the Black Dream. The \n" +
      "Princes is trapped in a deep sleep, and the king summons adventurers from all \n" +
      "over the kingdom to kill the villain and rescue the Princess. They enter the \n" +
      "Black Dream but never return, at least, never wake up. \n" +
      " \n" +
      "One day, Sir Kleith, the Captain of the Royal Guard, decides to go to search \n" +
      "for the Dream Sage in a forest to the south of Oltaria. Eventually, after a \n" +
      "difficult journey, Kleith arrives at his destination, where the Dream Sage is \n" +
      "training a young disciple called GAME to be a Dream Master. (A Dream Master's \n" +
      "role is to bring peace and tranquillity to dreams and their powers must be used \n" +
      "to heal and not to corrupt souls.) Anyway, poor old Kleith dies after \n" +
      "delivering his message about the plight of the Princess. \n" +
      " \n" +
      "The Dream Sage says he's too old to undertake the task of saving the Princess \n" +
      "but GAME can do it! This is when the action begins, as GAME falls asleep and \n" +
      "the Black Master appears, to transport him into the first Black Dream where his \n" +
      "skills are put to the test!",
    url: "https://www.igdb.com/games/dream-master",
  },
  {
    code: 48467,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/qhkbh1pz7cjzf8f1iq2h.jpg",
    first_release_date: 691977600,
    genres: ["Platform"],
    name: "Heisei Tensai Bakabon",
    platform: {
      name: "Nintendo Entertainment System (NES)",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6d.jpg",
      url: "https://www.igdb.com/platforms/nes",
    },
    slug: "heisei-tensai-bakabon",
    summary:
      "A former genius has now become very eccentric and senile. His family deals with all the crazy problems he and his old friends cause around the neighborhood.",
    url: "https://www.igdb.com/games/heisei-tensai-bakabon",
  },
  {
    code: 48885,
    cover_url: undefined,
    first_release_date: 577324800,
    genres: ["Sport"],
    name: "Tanigawa Kouji no Shogi Shinan II: Meijin e no Michi",
    platform: {
      name: "Nintendo Entertainment System (NES)",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6d.jpg",
      url: "https://www.igdb.com/platforms/nes",
    },
    slug: "tanigawa-kouji-no-shogi-shinan-ii-meijin-e-no-michi",
    summary:
      "An instructional Shogi game, that teaches the Japanese version of chess. It is hosted by Tanigawa Kouji, a top-tier Shogi player. It was released for the Famicom Disk System, NES and MSX. \n" +
      " \n" +
      `Shogi, a Japanese board game similar to chess, is a board game as popular as Mahjong in Japan. Tanigawa Kouji no Shogi Shinan II ("Tanigawa Kouji's Instructional Shogi II") is the second in a series of instructional Shogi games hosted by then-top tier champion and expert Shogi player Tanigawa Kouji to help improve the player's game. \n` +
      " \n" +
      "The first Tanigawa Kouji no Shogi Shinan was only released on MSX home computers, though this game first came out on the Famicom Disk System in 1987. It would later receive additional versions for the MSX and the regular cartridge-based Famicom in 1988. There also exists a second Famicom Disk System version, released after the MSX and Famicom ports, that contains additional puzzle arrangements. The third game in the series would only be released on the Famicom. \n" +
      " \n" +
      "Neither this game nor any of the games in the series were ever released outside of Japan.",
    url: "https://www.igdb.com/games/tanigawa-kouji-no-shogi-shinan-ii-meijin-e-no-michi",
  },
  {
    code: 44942,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/mj0xkfjbpycydlxxujtr.jpg",
    first_release_date: 1063670400,
    genres: ["Racing"],
    name: "Ford Truck Mania",
    platform: {
      name: "PlayStation",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl7q.jpg",
      url: "https://www.igdb.com/platforms/ps",
    },
    slug: "ford-truck-mania",
    summary:
      "Pilot tough Ford Trucks across challenging terrain in this Gotham Games release for PlayStation. Gamers choose from a variety of vehicles, including eight standard Fords and four modified trucks, all with adjustable steering, transmission, tires, suspension, and even color. Races are run in three circuits, Amateur, Semi Pro, and Professional, and a number of options allow players to customize courses and rules to suit their preferences.",
    url: "https://www.igdb.com/games/ford-truck-mania",
  },
  {
    code: 44971,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/rbzyilnpd001mpywvdue.jpg",
    first_release_date: 988588800,
    genres: ["Adventure"],
    name: "Sabrina the Teenage Witch: A Twitch in Time!",
    platform: {
      name: "PlayStation",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl7q.jpg",
      url: "https://www.igdb.com/platforms/ps",
    },
    slug: "sabrina-the-teenage-witch-a-twitch-in-time",
    summary:
      "Sabrina has been delighting fans with her benign brand of arcane mischief since she was first featured as an Archie comics character in the late 1960s. This title is based directly on the version of the character from Sabrina: The Teenage Witch on ABC and the WB networks. \n" +
      " \n" +
      "Melissa Joan Hart provides the voice and likeness of Sabrina in this 3D adventure based on the live-action television series. A third-person perspective allows players to guide Sabrina around a large interactive game environment. Real-time gameplay keeps the challenges fresh and the action moving. Sabrina's aunts and her cat Salem are also featured in the game. \n" +
      " \n" +
      "The game's plot is about when Salem was trying to get his file from the Witches' Council he broke a clock to release Chaos. Now Sabrina has to save the day while dressing up in ridiculous outfits and fighting stationary enemies.",
    url: "https://www.igdb.com/games/sabrina-the-teenage-witch-a-twitch-in-time",
  },
  {
    code: 44792,
    cover_url: undefined,
    first_release_date: 904435200,
    genres: ["Fighting"],
    name: "Shiritsu Justice Gakuen: Legion of Heroes",
    platform: {
      name: "PlayStation",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl7q.jpg",
      url: "https://www.igdb.com/platforms/ps",
    },
    slug: "shiritsu-justice-gakuen-legion-of-heroes",
    summary:
      "The main fighting game is best described as a polygonal Marvel vs. Capcom game, with some notable differences. Control wise, the game varies from other Capcom fighting games by only having four buttons (two punches and two kicks, which is closer to the SNK game format) rather than the standard six. A player chooses a team of two characters, and fights against another two character team.",
    url: "https://www.igdb.com/games/shiritsu-justice-gakuen-legion-of-heroes",
  },
  {
    code: 22896,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co1vrm.jpg",
    first_release_date: 924393600,
    genres: ["Racing"],
    name: "Chocobo Racing",
    platform: {
      name: "PlayStation",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl7q.jpg",
      url: "https://www.igdb.com/platforms/ps",
    },
    slug: "chocobo-racing",
    summary:
      "The Chocobo has appeared in every Final Fantasy game since Final Fantasy IV as a large yellow bird that you can ride to other destinations or use during fights. With Chocobo Racing, you can race a Chocobo along with a range of different characters both from the Final Fantasy world including Cloud and Cid from Final Fantasy VII and created just for the game through many different fantasy worlds at high speed, using a selection of weapons to aid you. The game supports 1 and 2 player racing",
    url: "https://www.igdb.com/games/chocobo-racing",
  },
  {
    code: 44819,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/zi1gyjzc9ig7z6domn40.jpg",
    first_release_date: 997574400,
    genres: ["Role-playing (RPG)", "Strategy", "Turn-based strategy (TBS)"],
    name: "Digimon Digital Card Battle",
    platform: {
      name: "PlayStation",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl7q.jpg",
      url: "https://www.igdb.com/platforms/ps",
    },
    slug: "digimon-digital-card-battle",
    summary:
      "Can you imagine Digimon and humans living together and participating in Digital Card Battles? It sounds impossible, but you'd better believe it! Full of intense strategy and hardcore tactical maneuvering, DIGIMON DIGITAL CARD BATTLE is a genuine test of your skills and smarts. Each victory will increase your strength level, allowing you to move on to the next stage of play. Three Partner Decks will be at your disposal throughout play: Veemon will help you with offense; Armodillomon will provide surprise attacks; and Hawkmon will lend itself to quick digi-volving. The 40 new characters will provide plenty for series addicts to sink their teeth into, while 30 varieties of power-up cards will help gamers take down their competition. If all of this sounds like a foreign language to you, you're due to dive into the magical world of trainers and their monsters, known as DIGIMON. Play alone or challenge a friend!",
    url: "https://www.igdb.com/games/digimon-digital-card-battle",
  },
  {
    code: 20428,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/pfbghifztaqvpbxk2crx.jpg",
    first_release_date: 823219200,
    genres: ["Sport"],
    name: "NHL FaceOff",
    platform: {
      name: "PlayStation",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl7q.jpg",
      url: "https://www.igdb.com/platforms/ps",
    },
    slug: "nhl-faceoff",
    summary:
      "Sony Computer Entertainment's first foray into the world of professional ice hockey. The game was made for the 1995-1996 NHL season and the FaceOff brand continued into the 21st Century.",
    url: "https://www.igdb.com/games/nhl-faceoff",
  },
  {
    code: 19428,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/qdqj1w1wlarvtilit7qm.jpg",
    first_release_date: 881193600,
    genres: ["Shooter", "Adventure"],
    name: "Armored Core: Project Phantasma",
    platform: {
      name: "PlayStation",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl7q.jpg",
      url: "https://www.igdb.com/platforms/ps",
    },
    slug: "armored-core-project-phantasma",
    summary: `A Raven operating out of Isaac City receives an unusual request. Not only is the request both vague and cryptic, stating simply: "Infiltrate the underground urban complex, Amber Crown,", but it also bypasses normal channels of communication and is sent directly to the Raven in question, without anyone else seeing the message. No sender name or corporate affiliation is mentioned, but the monetary reward promised is massive. Because of the amount, the mission will obviously be intensely dangerous, but Ravens aren't the type to shy away from any challenge. With interest piqued, the Raven climbs into the AC and heads toward Amber Crown.`,
    url: "https://www.igdb.com/games/armored-core-project-phantasma",
  },
  {
    code: 45024,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/teph7788duwqkdniqf11.jpg",
    first_release_date: 971827200,
    genres: ["Puzzle", "Real Time Strategy (RTS)", "Strategy"],
    name: "Team Buddies",
    platform: {
      name: "PlayStation",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl7q.jpg",
      url: "https://www.igdb.com/platforms/ps",
    },
    slug: "team-buddies",
    summary:
      "One fine and sunny day in the land that Buddies roam, there was a great and mighty disco in a tent. This tent would bob up and down with the music. All of a sudden, a large, flat, grey, flying THING blocked out the sun (The Great Eclipse) and began to drop crates. These crates were filled with all sorts of goodies such as Uzis and Bazookas. Inevitably, chaos broke out and the buddies became segregated according to color.",
    url: "https://www.igdb.com/games/team-buddies",
  },
  {
    code: 43766,
    cover_url: undefined,
    first_release_date: 989712000,
    genres: ["Shooter"],
    name: "Army Men: Omega Soldier",
    platform: {
      name: "PlayStation",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl7q.jpg",
      url: "https://www.igdb.com/platforms/ps",
    },
    slug: "army-men-omega-soldier",
    summary:
      `Created in a covert laboratory by splicing DNA from the strongest and most skilled soldiers, the "Omega Soldier" has been given the strength and weapon skills to become the Tan army's worst high-tech threat! \n` +
      "Army Men®: Green Rogue™ incorporates a 3rd person shooter with coin-op shoot 'em style gameplay that will raise the heartbeat of anyone who dares to accept the challenge.",
    url: "https://www.igdb.com/games/army-men-omega-soldier",
  },
  {
    code: 14733,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co1y2d.jpg",
    first_release_date: 1035504000,
    genres: ["Sport"],
    name: "Winning Eleven 6 Final Evolution",
    platform: {
      name: "PlayStation",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl7q.jpg",
      url: "https://www.igdb.com/platforms/ps",
    },
    slug: "winning-eleven-6-final-evolution",
    summary: "Our European football master assesses Konami's brilliant new addition.",
    url: "https://www.igdb.com/games/winning-eleven-6-final-evolution",
  },
  {
    code: 44709,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/mjwth8kki7sq3frmbg06.jpg",
    first_release_date: 1130284800,
    genres: ["Racing"],
    name: "DT Racer",
    platform: {
      name: "PlayStation 2",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl72.jpg",
      url: "https://www.igdb.com/platforms/ps2",
    },
    slug: "dt-racer",
    summary:
      "Extreme tuner racing just hit a whole new level of no holds barred racing. DT Racer drops you on to 22 of the slickest tracks around the globe. Completely fine tune every inch of your car's handling and performance with unlimited customization. And when you are done, put your foot to the floor and show them what you've got!",
    url: "https://www.igdb.com/games/dt-racer",
  },
  {
    code: 28530,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co1ov9.jpg",
    first_release_date: 1060214400,
    genres: ["Pinball"],
    name: "Flipnic: Ultimate Pinball",
    platform: {
      name: "PlayStation 2",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl72.jpg",
      url: "https://www.igdb.com/platforms/ps2",
    },
    slug: "flipnic-ultimate-pinball",
    summary: `A pinball game with multiple twists. Flipnic isn't your basic pinball game, it's a psychedelic trip through fantastic land of pinball. The game features multiple tables in which the player must complete a given set of tasks before he or she can proceed to the next level. Each of the "tables" consists of many smaller playing areas and every one has some gimmick in them. For example, one must first freeze the waterfall and then destroy the ice and climb a mountain behind it. All this using only the paddles and the ball.`,
    url: "https://www.igdb.com/games/flipnic-ultimate-pinball",
  },
  {
    code: 43472,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/hruihcewtetvpephitrl.jpg",
    first_release_date: 1154390400,
    genres: ["Simulator"],
    name: "Dinosaur Adventure",
    platform: {
      name: "PlayStation 2",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl72.jpg",
      url: "https://www.igdb.com/platforms/ps2",
    },
    slug: "dinosaur-adventure",
    summary: "",
    url: "https://www.igdb.com/games/dinosaur-adventure",
  },
  {
    code: 9501,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/zws5yc0ymaltwoj7czib.jpg",
    first_release_date: 1002153600,
    genres: ["Role-playing (RPG)"],
    name: "King's Field IV",
    platform: {
      name: "PlayStation 2",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl72.jpg",
      url: "https://www.igdb.com/platforms/ps2",
    },
    slug: "kings-field-iv",
    summary:
      "King's Field IV, known in North America as King's Field: The Ancient City, is a medieval-themed first-person role playing video game produced by From Software for the PlayStation 2 in 2001. It is the fourth game in the King's Field series and the last one released for home consoles.",
    url: "https://www.igdb.com/games/kings-field-iv",
  },
  {
    code: 25911,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co1rye.jpg",
    first_release_date: 1024444800,
    genres: ["Platform", "Adventure"],
    name: "Disney's Stitch: Experiment 626",
    platform: {
      name: "PlayStation 2",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl72.jpg",
      url: "https://www.igdb.com/platforms/ps2",
    },
    slug: "disneys-stitch-experiment-626",
    summary:
      "The game takes place before the Lilo & Stitch film begins, showing the massive space universe only hinted at in the movie. The player controls Stitch, using his powers to the fullest: climbing walls and ceilings, dashing with amazing speed, shooting up to four weapons at once (one in each hand), flying with the jetpack, and swinging using the grapple gun. The game features several of the film's memorable characters, including Jumba, Gantu, and Grand Councilwoman.",
    url: "https://www.igdb.com/games/disneys-stitch-experiment-626",
  },
  {
    code: 43264,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co1t77.jpg",
    first_release_date: 1103241600,
    genres: ["Shooter", "Tactical", "Adventure"],
    name: "Metal Gear Solid 3: Limited Metal Edition",
    platform: {
      name: "PlayStation 2",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl72.jpg",
      url: "https://www.igdb.com/platforms/ps2",
    },
    slug: "metal-gear-solid-3-limited-metal-edition",
    summary:
      "This is the steelbook version of Metal Gear Solid 3: Snake Eater, official titled Limited Metal Edition. This version of the game is not particularly common, possibly because there is no difference between this and the original release apart for the metal case.",
    url: "https://www.igdb.com/games/metal-gear-solid-3-limited-metal-edition",
  },
  {
    code: 52013,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/zbjqyibip2kjstpzm2ho.jpg",
    first_release_date: 1072828800,
    genres: ["Sport"],
    name: "Manchester United Club Football",
    platform: {
      name: "PlayStation 2",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl72.jpg",
      url: "https://www.igdb.com/platforms/ps2",
    },
    slug: "manchester-united-club-football",
    summary:
      "Take to the pitch alongside Keane, Scholes and Van Nistelrooy as the crowd roars from the Stretford End. You're United's newest hero and this is matchday at Old Trafford. It's time to bring your dreams to life.",
    url: "https://www.igdb.com/games/manchester-united-club-football",
  },
  {
    code: 43372,
    cover_url: undefined,
    first_release_date: 1221436800,
    genres: ["Simulator", "Sport", "Strategy"],
    name: "Premier Manager 09",
    platform: {
      name: "PlayStation 2",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl72.jpg",
      url: "https://www.igdb.com/platforms/ps2",
    },
    slug: "premier-manager-09",
    summary:
      "Premier Manager 09 is a Sports game, developed and published by Zoo Digital Publishing, which was released in Europe in 2008.",
    url: "https://www.igdb.com/games/premier-manager-09",
  },
  {
    code: 55037,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co1p1u.jpg",
    first_release_date: 952128000,
    genres: ["Fighting"],
    name: "Street Fighter EX 3",
    platform: {
      name: "PlayStation 2",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl72.jpg",
      url: "https://www.igdb.com/platforms/ps2",
    },
    slug: "street-fighter-ex-3",
    summary: "",
    url: "https://www.igdb.com/games/street-fighter-ex-3",
  },
  {
    code: 71103,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co28az.jpg",
    first_release_date: 1006992000,
    genres: ["Fighting"],
    name: "Guilty Gear X Plus",
    platform: {
      name: "PlayStation 2",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl72.jpg",
      url: "https://www.igdb.com/platforms/ps2",
    },
    slug: "guilty-gear-x-plus",
    summary:
      "Guilty Gear X Plus is the fifth entry in the Guilty Gear series. It is a Japan-exclusive enhanced port of Guilty Gear X for the PlayStation 2, containing two extra characters, several new features and a Wonderswan Color link with Guilty Gear Petit 2.",
    url: "https://www.igdb.com/games/guilty-gear-x-plus",
  },
  {
    code: 111654,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co20uy.jpg",
    first_release_date: 1553558400,
    genres: ["Sport"],
    name: "MLB The Show 19",
    platform: {
      name: "PlayStation 4",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6f.jpg",
      url: "https://www.igdb.com/platforms/ps4--1",
    },
    slug: "mlb-the-show-19",
    summary:
      "MLB The Show 19 brings you the best of baseball. Experience the ultimate duel: the 1v1 battle between hitter and pitcher to see who reigns supreme. Whether it be home runs, quick experiences, playing as legends, a full RPG experience or stiff Player vs Player competition; MLBTS 19 provides the perfect combination of authentic baseball experience mixed with video game fun.",
    url: "https://www.igdb.com/games/mlb-the-show-19",
  },
  {
    code: 38490,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/vjnq9oybwmk0wcqrnlml.jpg",
    first_release_date: 1483660800,
    genres: ["Platform", "Puzzle", "Adventure"],
    name: "The Last Guardian Collector's Edition",
    platform: {
      name: "PlayStation 4",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6f.jpg",
      url: "https://www.igdb.com/platforms/ps4--1",
    },
    slug: "the-last-guardian-collectors-edition",
    summary:
      "The game has been shown to involve a young boy who befriends a giant bird, dog and cat hybrid creature, Trico, and the two work together to evade guards that are after them both. The game requires the player, controlling the boy, to manipulate Trico like a real animal, such as luring it with food, as to use the creature as a means to climb and reach high platforms or other remote places. This sets the core of the game on puzzle-based action, as in between the various puzzles the player will encounter, enemies will be encountered, potentially impeding progress. It is the player's role to survive in such an occurrence, much like in Ico.",
    url: "https://www.igdb.com/games/the-last-guardian-collectors-edition",
  },
  {
    code: 25182,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/rf1a2i2j0hvgtuerwsx6.jpg",
    first_release_date: 1476921600,
    genres: ["Shooter", "Indie", "Arcade"],
    name: "Pixel Gear",
    platform: {
      name: "PlayStation 4",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6f.jpg",
      url: "https://www.igdb.com/platforms/ps4--1",
    },
    slug: "pixel-gear",
    summary:
      "Pixel Gear is a pixel style VR shoot-em-up with a variety of humorous cartoon monsters and ghosts as enemies. Utlize your skills and weapons to defeat them, gain energy, and apply your skills wisely to slow down time and load up infinite bullets. Observe the environment carefully. And keep on shooting in the pixel battlefield.",
    url: "https://www.igdb.com/games/pixel-gear",
  },
  {
    code: 26060,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/mhvvgqxlndmnjvhe3qlu.jpg",
    first_release_date: 1421280000,
    genres: [],
    name: "Call of Duty: Advanced Warfare - Nanotech Personalization Pack",
    platform: {
      name: "PlayStation 4",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6f.jpg",
      url: "https://www.igdb.com/platforms/ps4--1",
    },
    slug: "call-of-duty-advanced-warfare-nanotech-personalization-pack",
    summary:
      "Smaller is better with the Nanotech Personalization Pack. Power up with a sub-atomic suit camo, three high-tech reticles, a calling card, and an emblem layer.",
    url: "https://www.igdb.com/games/call-of-duty-advanced-warfare-nanotech-personalization-pack",
  },
  {
    code: 28498,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co1jo4.jpg",
    first_release_date: 1561593600,
    genres: [],
    name: "Hello Lady! Superior Dynamis",
    platform: {
      name: "PlayStation 4",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6f.jpg",
      url: "https://www.igdb.com/platforms/ps4--1",
    },
    slug: "hello-lady-superior-dynamis",
    summary:
      "Hello Lady! Superior Dynamis, the “new noble school adventure” game, features character design by Hokuto Saeki, and scenario by Wataru Hino and Joo Shuudou. It bundles together the 2014-released PC visual novel Hello Lady!and the later 2014-released Hello Lady! New Division in a single package.",
    url: "https://www.igdb.com/games/hello-lady-superior-dynamis",
  },
  {
    code: 109594,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co1h63.jpg",
    first_release_date: 1540512000,
    genres: ["Platform"],
    name: "Castlevania Requiem: Symphony of the Night & Rondo of Blood",
    platform: {
      name: "PlayStation 4",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6f.jpg",
      url: "https://www.igdb.com/platforms/ps4--1",
    },
    slug: "castlevania-requiem-symphony-of-the-night-and-rondo-of-blood",
    summary:
      "Experience two of the greatest games from the famous Castlevania series. \n" +
      "Make your way to the top of Dracula's castle as Richter Belmont, descendant of the famed clan of vampire hunters, in 'Rondo of Blood', or take the leading role as Dracula's son Alucard in 'Symphony of the Night'. \n" +
      " \n" +
      "Enjoy the unique world, the epic classical background music, and the side-scrolling action of the Castlevania series!",
    url: "https://www.igdb.com/games/castlevania-requiem-symphony-of-the-night-and-rondo-of-blood",
  },
  {
    code: 62711,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/krvhl4lhleuo6mevg7oo.jpg",
    first_release_date: 1393027200,
    genres: ["Music", "Racing", "Simulator"],
    name: "Dream C Club: Host Girls on Stage",
    platform: {
      name: "PlayStation 4",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6f.jpg",
      url: "https://www.igdb.com/platforms/ps4--1",
    },
    slug: "dream-c-club-host-girls-on-stage",
    summary:
      "The host girls take to the stage with song and coordinated dance routines in this free to play Dream C Club spin-off.",
    url: "https://www.igdb.com/games/dream-c-club-host-girls-on-stage",
  },
  {
    code: 14363,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co1pd4.jpg",
    first_release_date: 1508198400,
    genres: ["Racing", "Simulator", "Sport"],
    name: "Gran Turismo Sport",
    platform: {
      name: "PlayStation 4",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6f.jpg",
      url: "https://www.igdb.com/platforms/ps4--1",
    },
    slug: "gran-turismo-sport",
    summary:
      "Welcome to the future of motorsports – the definitive motor racing experience is back and better than ever only on PlayStation 4. \n" +
      " \n" +
      "Gran Turismo Sport is the world’s first racing experience to be built from the ground up to bring global, online competitions sanctioned by the highest governing body of international motorsports, the FIA (Federation International Automobile). Create your legacy as you represent and compete for your home country or favorite manufacturer.",
    url: "https://www.igdb.com/games/gran-turismo-sport",
  },
  {
    code: 26064,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/sel0rhxjvfyfjrrjuvf9.jpg",
    first_release_date: 1421280000,
    genres: [],
    name: "Call of Duty: Advanced Warfare - Steampunk Exoskeleton Pack",
    platform: {
      name: "PlayStation 4",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6f.jpg",
      url: "https://www.igdb.com/platforms/ps4--1",
    },
    slug: "call-of-duty-advanced-warfare-steampunk-exoskeleton-pack",
    summary:
      "Blast through any match with the Steampunk exoskeleton Pack. Includes a pseudo-Victorian exoskeleton and a future-retro helmet.",
    url: "https://www.igdb.com/games/call-of-duty-advanced-warfare-steampunk-exoskeleton-pack",
  },
  {
    code: 114151,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co1roi.jpg",
    first_release_date: 1609372800,
    genres: ["Simulator", "Visual Novel"],
    name: "Date A Live: Ren Dystopia - Limited Edition",
    platform: {
      name: "PlayStation 4",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6f.jpg",
      url: "https://www.igdb.com/platforms/ps4--1",
    },
    slug: "date-a-live-ren-dystopia-limited-edition",
    summary: "",
    url: "https://www.igdb.com/games/date-a-live-ren-dystopia-limited-edition",
  },
  {
    code: 51518,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co2337.jpg",
    first_release_date: 1500508800,
    genres: ["Puzzle", "Hack and slash/Beat 'em up"],
    name: "Boost Beast",
    platform: {
      name: "Nintendo Switch",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pleu.jpg",
      url: "https://www.igdb.com/platforms/switch",
    },
    slug: "boost-beast",
    summary:
      '"BOOST BEAST" is a defense puzzle game where players defeat the invading horde of zombies by clearing blocks and summoning animals. \n' +
      " \n" +
      "The controls are simple! \n" +
      "Match 3 animal blocks of the same color to summon your cute animal friends and defeat the incoming waves of zombies! \n" +
      "There are many gimmicks that stand in your way during your quest to save the world. \n" +
      "There are cages that trap your animal friends, rocks that block your path, and the grim reaper who will turn your allies into zombies. \n" +
      "Make use of bombs and chain combos to pave a path to victory! \n" +
      " \n" +
      "Join forces with your cute animal army and clear all 204 stages! \n" +
      "Lets go animal army! Until the day where peace is restored!",
    url: "https://www.igdb.com/games/boost-beast",
  },
  {
    code: 118854,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co21m3.jpg",
    first_release_date: 1583366400,
    genres: ["Platform"],
    name: "Bleed Complete Bundle",
    platform: {
      name: "Nintendo Switch",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pleu.jpg",
      url: "https://www.igdb.com/platforms/switch",
    },
    slug: "bleed-complete-bundle",
    summary:
      "This bundle contains Bleed and Bleed 2. \n" +
      " \n" +
      "A double-dose of the indie smash hit action-platformer series in one super stylish bullet-dodging bundle. Help pink-haired heroine Wryn defeat a relentless barrage of baddies and bosses and be the Greatest Hero of All Time! Both games feature Arcade mode (try and beat the game with just one life!) and couch-friendly 2-player local co-op.",
    url: "https://www.igdb.com/games/bleed-complete-bundle",
  },
  {
    code: 51407,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/urrpc6owj5njoczqwm5x.jpg",
    first_release_date: 1499904000,
    genres: ["Puzzle", "Role-playing (RPG)"],
    name: "Levels+: Addictive Puzzle Game",
    platform: {
      name: "Nintendo Switch",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pleu.jpg",
      url: "https://www.igdb.com/platforms/switch",
    },
    slug: "levels-plus-addictive-puzzle-game",
    summary:
      "The rule is simple. Slide and match panels with the same color and number to level up! \n" +
      "It looks simple but you need to use your brain.",
    url: "https://www.igdb.com/games/levels-plus-addictive-puzzle-game",
  },
  {
    code: 26759,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co1mxn.jpg",
    first_release_date: 1497571200,
    genres: ["Fighting", "Sport"],
    name: "ARMS",
    platform: {
      name: "Nintendo Switch",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pleu.jpg",
      url: "https://www.igdb.com/platforms/switch",
    },
    slug: "arms",
    summary:
      "ARMS, a mix of boxing and shooting where you use extendable arms to battle your friends both locally and online! Take a Joy-Con in each hand and punch forward, twisting your fists to bend your attacks.   \n" +
      "   \n" +
      '"Choose a fighting champion from around the world, equip your own combination of extendable arms, and then use a mix of button presses and quick hand motions to really take the fight to your opponent. Throw punches and guide them midflight to hit agile fighters, avoid incoming attacks with dashes, or trampoline high into the air to rain down fists from above. Power-up your punches to deal extra damage or curve your fists around obstacles to hit skittish opponents. Fill up your special gauge to dish out devastating combinations and finish them off. Unleash your inner fighter in this unbelievable sporting event! "',
    url: "https://www.igdb.com/games/arms",
  },
  {
    code: 129512,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co1yev.jpg",
    first_release_date: 1578528000,
    genres: ["Puzzle", "Simulator", "Strategy", "Adventure"],
    name: "Cooking Tycoons: 3 in 1 Bundle",
    platform: {
      name: "Nintendo Switch",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pleu.jpg",
      url: "https://www.igdb.com/platforms/switch",
    },
    slug: "cooking-tycoons-3-in-1-bundle",
    summary:
      "A series of great cooking games in one brand-new collection! \n" +
      " \n" +
      "Cook tons of delicious meals from all over the world and become the best chef in the city! \n" +
      " \n" +
      "Cook hundreds of tasty dishes with all the possible kitchen appliances and countless ingredients! \n" +
      "Try it all: coffee makers, juice machines, pizza ovens, frying pans, fryers and ice cream machines. \n" +
      " \n" +
      "Upgrade and decorate your restaurants to attract more clients. \n" +
      " \n" +
      "Upgrade your kitchen appliances and ingredients to cook tasty dishes faster and earn more money! \n" +
      " \n" +
      "This comprehensive collection includes three great cooking games: Food Truck Tycoon, Burger Chef Tycoon, Pizza Bar Tycoon!",
    url: "https://www.igdb.com/games/cooking-tycoons-3-in-1-bundle",
  },
  {
    code: 109463,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/fldfc6vwqjtrmogaxj4k.jpg",
    first_release_date: 1538697600,
    genres: ["Role-playing (RPG)", "Adventure"],
    name: "Assassin's Creed: Odyssey - Cloud Version",
    platform: {
      name: "Nintendo Switch",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pleu.jpg",
      url: "https://www.igdb.com/platforms/switch",
    },
    slug: "assassins-creed-odyssey-cloud-version",
    summary: "A cloud-based streaming version of Assassin's Creed: Odyssey for the Nintendo Switch in Japan.",
    url: "https://www.igdb.com/games/assassins-creed-odyssey-cloud-version",
  },
  {
    code: 87818,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/byt3ycf5mlrxieinlaiy.jpg",
    first_release_date: 1519257600,
    genres: ["Shooter"],
    name: "Kyogeki Quartet Fighters",
    platform: {
      name: "Nintendo Switch",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pleu.jpg",
      url: "https://www.igdb.com/platforms/switch",
    },
    slug: "kyogeki-quartet-fighters",
    summary: "",
    url: "https://www.igdb.com/games/kyogeki-quartet-fighters",
  },
  {
    code: 122246,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co1q97.jpg",
    first_release_date: 1568851200,
    genres: ["Puzzle", "Role-playing (RPG)", "Adventure"],
    name: "Puzzle Quest: The Legend Returns",
    platform: {
      name: "Nintendo Switch",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pleu.jpg",
      url: "https://www.igdb.com/platforms/switch",
    },
    slug: "puzzle-quest-the-legend-returns",
    summary:
      "The creators of the original and award-winning match-3 RPG are back with the next chapter in the beloved and award-winning Puzzle Quest franchise. Get ready for Puzzle Quest: The Legend Returns! \n" +
      " \n" +
      "Puzzle Quest: The Legend Returns is coming soon, exclusively for Nintendo Switch and features the original and totally remastered Puzzle Quest: Challenge of the Warlords, the expansion Revenge of the Plague Lord, and a treasure chest full of new quests, classes, spells, and items created exclusively for the next chapter in the beloved Puzzle Quest series. \n" +
      " \n" +
      "Puzzle Quest: The Legend Returns is a unique match-3 puzzle game wrapped in a deep and immersive strategy and role-playing experience. Explore the many locations within the kingdom of Etheria, deep in the Agarian Forest, rekindling relationships or making new ones along your path. Head into battle and match three or more gems in a row to gain mana used to cast spells, clash with opponents, collect items and rewards, increase experience, and ultimately be VICTORIOUS! \n" +
      " \n" +
      "Select from your favorite character classes or choose from one of five new classes including Blood Mage, Priest, Monk, Paladin, and Elementalist. Puzzle Quest: The Legend Returns brings more than 100 new quests, spells, and items, and a host of new monsters, bosses, and more! \n" +
      " \n" +
      "Test your skills in an epic journey against monsters and villains to save the kingdom of Etheria.",
    url: "https://www.igdb.com/games/puzzle-quest-the-legend-returns",
  },
  {
    code: 116193,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co1jqp.jpg",
    first_release_date: 1553644800,
    genres: [],
    name: "Neon Caves",
    platform: {
      name: "Nintendo Switch",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pleu.jpg",
      url: "https://www.igdb.com/platforms/switch",
    },
    slug: "neon-caves",
    summary:
      "Explore the Neon Caves, a fragile ecosystem lost to the world for centuries. Recently rediscovered by your research team, use your ship’s anchor ability and elite implements to stabilise the cave while keeping the hostile inhabitants at bay.",
    url: "https://www.igdb.com/games/neon-caves",
  },
  {
    code: 77664,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/hog3lsurfok2dsvrzrzi.jpg",
    first_release_date: 1512604800,
    genres: ["Strategy"],
    name: "ACORN Tactics",
    platform: {
      name: "Nintendo Switch",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pleu.jpg",
      url: "https://www.igdb.com/platforms/switch",
    },
    slug: "acorn-tactics--1",
    summary: "A sci-fi military strategy game.",
    url: "https://www.igdb.com/games/acorn-tactics--1",
  },
  {
    code: 23272,
    cover_url: undefined,
    first_release_date: 1272585600,
    genres: ["Fighting"],
    name: "Samurai Shodown Sen",
    platform: {
      name: "Xbox 360",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6y.jpg",
      url: "https://www.igdb.com/platforms/xbox360",
    },
    slug: "samurai-shodown-sen",
    summary:
      "Samurai Shodown Sen follows a young European girl named Suzu, rescued from a sinking ship off Japan's coast, adopted by the Amori Clan and raised as Princess Suzu. A decade later she saves Takechiyo, a self-proclaimed master of martial arts, after his ship sinks and he ends up washed on the beach; soon after this chance meeting, the tables turn when Princess Suzu mysteriously disappears and Takechiyo pledges to find his missing rescuer. \n" +
      " \n" +
      "Staying close to its roots, alongside Princess Suzu, Takechiyo and a host of new characters, a plethora of old favorites from the series have been faithfully incorporated, including Haohmaru, Galford, Hanzo Hattori, Nakoruru and Ukyo Tachibana- taking the warriors to over 20 in total. Players can become any one of these unique fighters via the Xbox LIVE online entertainment network, to battle friends to see who can reach the top of a worldwide online ranking system.",
    url: "https://www.igdb.com/games/samurai-shodown-sen",
  },
  {
    code: 24236,
    cover_url: undefined,
    first_release_date: 1294444800,
    genres: [],
    name: "Pinball FX 2: Marvel Pinball - Vengeance and Virtue",
    platform: {
      name: "Xbox 360",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6y.jpg",
      url: "https://www.igdb.com/platforms/xbox360",
    },
    slug: "pinball-fx-2-marvel-pinball-vengeance-and-virtue",
    summary:
      "Marvel Pinball is an arcade pinball video game developed by Zen Studios. It features Marvel Comics-themed pinball tables. It is available as a standalone game for the PlayStation 3 via the PlayStation Network, and as downloadable content for Pinball FX 2 on the Xbox 360 via Xbox Live Arcade. Its content on the PlayStation 3 is also playable in Zen Pinball 2. It is the second pinball title for the PlayStation 3, succeeding Zen Pinball. It was released on December 8, 2010 on the Xbox 360 and December 14, 2010 on the PlayStation 3. \n" +
      " \n" +
      "The game was positively received by critics. It holds an aggregate score of 87.73% on the Xbox 360 and 82.85% on the PlayStation 3 at GameRankings. Reviewers praised the visual presentation of each table, and commented specifically on the bright colors and animated characters. Most reviewers felt the table design was excellent, however some felt that certain sections of the table felt bare. Critics generally felt that it was an excellent value for the cost.[citation needed] Sales during the month of its release exceeded 47,000 copies on the Xbox 360 and 19,000 on the PlayStation 3.[citation needed]",
    url: "https://www.igdb.com/games/pinball-fx-2-marvel-pinball-vengeance-and-virtue",
  },
  {
    code: 47425,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/igpfvfy5wfr427ihwvmt.jpg",
    first_release_date: 1323302400,
    genres: ["Shooter"],
    name: "Call of Duty: Modern Warfare 3 - Hardened Edition",
    platform: {
      name: "Xbox 360",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6y.jpg",
      url: "https://www.igdb.com/platforms/xbox360",
    },
    slug: "call-of-duty-modern-warfare-3-hardened-edition",
    summary:
      "Activision Blizzard's top-selling first-person shooter franchise marches on with Call of Duty: Modern Warfare 3. Players must deal with the fallout from the devastating attacks on U.S. and British soil in a storyline that picks up where 2009's Modern Warfare 2 left off. The single-player campaign has you battling Russian ultranationalists, led by Vladimir Markov, as members of the U.S. Delta Force and British SAS. You'll battle across war-torn areas of New York City, London, Paris, Mogadishu, Dubai, and other regions as you prepare to end the global threat once and for all. \n" +
      " \n" +
      "As with previous entries in the Call of Duty series, Modern Warfare 3's campaign features a heavily scripted, cinematic experience with Hollywood-style special effects. One new mission, for example, has you involved in underwater travel with a sonar-equipped submersible watercraft. You'll then fight inside an enemy-controlled submarine before guiding an inflatable raft across turbulent waters while a naval battle rages nearby. Other sequences have you firing mounted guns, driving vehicles, and more while explosions light up the landscape. \n" +
      " \n" +
      "Returning to the game is the cooperative Spec Ops mode that features a series of standalone missions on different maps. New to Spec Ops is a survival option that has you and either a friend or a computer partner battling waves of enemy forces. Shooting down enemies earns you cash, which can be used to purchase new perks, items, weapons, and other upgrades. You'll also be able to earn bonuses by working together as a team and maintaining kill streaks. \n" +
      " \n" +
      'The heart of the game is once again the 18-player online component, which introduces all-new maps and a variety of enhancements to the format introduced in Modern Warfare 2. Popular features such as kill-streak awards, experience points, weapons-based achievements, and perks return, allowing you to customize your character as you progress. An optional subscription service entitled "Call of Duty Elite" will allow players to track detailed statistics such as win-loss records, kill-death ratios, time played, most successful maps, favorite weapons, and much more. \n' +
      " \n" +
      "Hardened Edition bonus items include a Steelbook case, collectible field journal, special ops juggernaut outfit for your Xbox Live avatar, premium membership to Call of Duty Elite, and special founder status on Call of Duty Elite. Call of Duty Elite's premium membership includes all future downloadable content (DLC) for Modern Warfare 3, of which there are 20 pieces of DLC expected within the first nine months following the game's release.",
    url: "https://www.igdb.com/games/call-of-duty-modern-warfare-3-hardened-edition",
  },
  {
    code: 24346,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co264d.jpg",
    first_release_date: 1269302400,
    genres: ["Racing"],
    name: "Sonic & Sega All-Stars Racing with Banjo-Kazooie",
    platform: {
      name: "Xbox 360",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6y.jpg",
      url: "https://www.igdb.com/platforms/xbox360",
    },
    slug: "sonic-and-sega-all-stars-racing-with-banjo-kazooie",
    summary:
      "In a frantic battle to the checkered flag, Sonic and friends speed around tracks set in medieval castle ramparts, lush rainforests and bustling cities, all taken from the visually rich and varied universes of Sonic and SEGA. Fan favorites such as Dr. Eggman, Tails, AiAi, Amigo and many more will join Sonic in their custom built vehicles, revving their engines and jostling to stay ahead of the pack. Each character will speed around the track in cars, planes, motorbikes, and in Aiai’s case – a banana mobile! Secret short cuts, swift handling and avoiding strategically placed obstacles are certainly the best way to get to the top of the podium.",
    url: "https://www.igdb.com/games/sonic-and-sega-all-stars-racing-with-banjo-kazooie",
  },
  {
    code: 21869,
    cover_url: undefined,
    first_release_date: 1180656000,
    genres: [],
    name: "Root Beer Tapper",
    platform: {
      name: "Xbox 360",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6y.jpg",
      url: "https://www.igdb.com/platforms/xbox360",
    },
    slug: "root-beer-tapper",
    summary:
      "Tapper, also known as Root Beer Tapper, is a 1983 arcade game released by Bally Midway. The goal of the game is to serve beer (or root beer) and collect empty mugs and tips.",
    url: "https://www.igdb.com/games/root-beer-tapper",
  },
  {
    code: 23414,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/aaur1yfpt6gzrlk99qyf.jpg",
    first_release_date: 1376611200,
    genres: ["Shooter"],
    name: "The Serious Sam Collection",
    platform: {
      name: "Xbox 360",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6y.jpg",
      url: "https://www.igdb.com/platforms/xbox360",
    },
    slug: "the-serious-sam-collection",
    summary:
      "Get Ready for Serious Action \n" +
      " \n" +
      "Prepare to unleash your inner beast as you go after an army of wicked extraterrestrials. Follow the notorious hero, Sam 'Serious' Stone, in his quest to destroy the alien overlord, Mental, in The Serious Sam Collection – the most action-packed compendium of Serious Sam games. Featuring four of the best Serious Sam games ever made, The Serious Sam Collection has been updated with enhanced visuals, lush landscapes, improved textures and character models in HD. With an arsenal of chainsaws, flamethrowers, rocket launchers, sniper rifles and more, this is some serious first-person shooting action. Now four titles are available for the cost of a single game. The Serious Sam collection includes: \n" +
      " \n" +
      "Serious Sam HD: The First Encounter \n" +
      " \n" +
      "Get acquainted with the classic hero as he is sent back through time to ancient Egypt to battle the overwhelming forces of Lord Mental and the Sirian army. \n" +
      " \n" +
      "Serious Sam HD: The Second Encounter \n" +
      " \n" +
      "Continue your battle against Mental's army with the classic over-the-top action, crazy humor and horror from the golden age of first-person shooters. \n" +
      " \n" +
      "Serious Sam 3: BFE (plus Jewel of the Nile DLC pack) \n" +
      " \n" +
      "The utterly addictive third installment of the Serious Sam series that brings you back to where the story all began: Before the First Encounter! \n" +
      " \n" +
      "Serious Sam: Double D XXL \n" +
      " \n" +
      "Part of the Serious Sam Indie Series, Double D XXL is a whole new brand of carnage and mayhem!",
    url: "https://www.igdb.com/games/the-serious-sam-collection",
  },
  {
    code: 1423,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/m6mwpqdcuvjarlctzphs.jpg",
    first_release_date: 1157587200,
    genres: ["Fighting", "Hack and slash/Beat 'em up"],
    name: "Kengo: Legend of the 9",
    platform: {
      name: "Xbox 360",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6y.jpg",
      url: "https://www.igdb.com/platforms/xbox360",
    },
    slug: "kengo-legend-of-the-9",
    summary:
      "In feudal Japan, it was kill or be killed for the samurai. Kengo: Legend of the 9 lets you battle as one of nine famous samurai warriors while mastering expert techniques to gain an advantage over your foes. Become a Kengo Master as you fight your way through lush, high-definition Japanese environments.",
    url: "https://www.igdb.com/games/kengo-legend-of-the-9",
  },
  {
    code: 7053,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/dbg9qoiiva4yebchffkg.jpg",
    first_release_date: 1255996800,
    genres: ["Music"],
    name: "Lips: Number One Hits",
    platform: {
      name: "Xbox 360",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6y.jpg",
      url: "https://www.igdb.com/platforms/xbox360",
    },
    slug: "lips-number-one-hits",
    summary:
      "Lips: Number One Hits is a karaoke video game for the Xbox 360 console, and the follow-up to the 2008 title Lips. Like its predecessor, the game was developed by iNiS and published by Microsoft Game Studios. It was released on October 20, 2009 in North America and October 23 in Europe and received generally average reviews. Spin-offs of the game have also been released, including Lips: Deutsche Partyknaller and Lips: Canta en Español. \n" +
      " \n" +
      "Lips: Number One Hits features the use of motion-sensitive microphones, which is also compatible with other music video games such as The Beatles: Rock Band.[1] The game is sold separately, and in packages including one and two microphones. \n" +
      " \n" +
      "Each copy of Lips: Number One Hits includes a redemption code for downloading one of three 5-song track packs for free.[2]",
    url: "https://www.igdb.com/games/lips-number-one-hits",
  },
  {
    code: 7588,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co22iy.jpg",
    first_release_date: 1315872000,
    genres: ["Shooter", "Adventure"],
    name: "The Gunstringer",
    platform: {
      name: "Xbox 360",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6y.jpg",
      url: "https://www.igdb.com/platforms/xbox360",
    },
    slug: "the-gunstringer",
    summary:
      "The player controls a marionette named the Gunstringer using Kinect’s unique\n" +
      "motion-based controls. The epic tale of the lonely gunman unfolds across\n" +
      "several acts, each performance taking place in a hand-crafted environment.\n" +
      " The Gunstringer has several weapons at his disposal, each tool of vengeance\n" +
      "unleashed through the player’s gestures. The game’s lavish production\n" +
      "features over thirty characters and countless animations.",
    url: "https://www.igdb.com/games/the-gunstringer",
  },
  {
    code: 23031,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/abxu3chbdoounxartzy7.jpg",
    first_release_date: 1230681600,
    genres: ["Music", "Puzzle"],
    name: "Go! Go! Break Steady",
    platform: {
      name: "Xbox 360",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl6y.jpg",
      url: "https://www.igdb.com/platforms/xbox360",
    },
    slug: "go-go-break-steady",
    summary:
      "Go! Go! Break Steady is an XBLA release that combines elements of rhythm and puzzle games to create a unique blend of both genres. The game was independently developed by Little Boy Games.",
    url: "https://www.igdb.com/games/go-go-break-steady",
  },
  {
    code: 58225,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/g7p78s43vbncb31p64jk.jpg",
    first_release_date: 1468368000,
    genres: ["Puzzle"],
    name: "Kyub",
    platform: {
      name: "Xbox One",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl95.jpg",
      url: "https://www.igdb.com/platforms/xboxone",
    },
    slug: "kyub",
    summary: "Kyub is an action puzzle game by Ninja Egg.",
    url: "https://www.igdb.com/games/kyub",
  },
  {
    code: 83762,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co27xz.jpg",
    first_release_date: 1504828800,
    genres: [],
    name: "NBA 2K18: The Prelude",
    platform: {
      name: "Xbox One",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl95.jpg",
      url: "https://www.igdb.com/platforms/xboxone",
    },
    slug: "nba-2k18-the-prelude",
    summary:
      "Get a free sneak peek at the neighborhood, one week prior to the full release of NBA 2K18. Hit the Proving Ground streetball courts with your MyPLAYER and show the world what you have to offer. \n" +
      "\n" +
      "Updated Create A Player\n" +
      "Create the MyPLAYER you want, whether scanning your face with the MyNBA2K18 mobile app or building something custom using our preset options. Hairstyles have been updated with numerous new options to choose from, and body weight and height are more accurately represented to ensure the unique look you want for your MyPLAYER.",
    url: "https://www.igdb.com/games/nba-2k18-the-prelude",
  },
  {
    code: 82381,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/izht84q33iyhgnd6imkr.jpg",
    first_release_date: 1461110400,
    genres: ["Arcade"],
    name: "ARCADE GAME SERIES: Ms. PAC-MAN",
    platform: {
      name: "Xbox One",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl95.jpg",
      url: "https://www.igdb.com/platforms/xboxone",
    },
    slug: "arcade-game-series-ms-pac-man",
    summary:
      "Developed in America and first released in 1981, Ms. PAC-MAN finally comes to Xbox One!\n" +
      "Move Ms. PAC-MAN up, down, left, and right to eat all the Pac-Dots, while avoiding the ghosts, to advance to the next stage.\n" +
      "Eat a Power Pellet to turn the tables on the ghosts and rack up a huge score!\n" +
      "\n" +
      "The basic rules are the same as PAC-MAN, but with an additional Warp Tunnel and other features, Ms. PAC-MAN truly shines as its own game!\n" +
      "\n" +
      "This latest port comes with scanline and sound settings - perfect for Ms. PAC-MANiacs!\n" +
      "With her trademark ribbon, it's not hard to see the adorable charm of Ms. PAC-MAN!",
    url: "https://www.igdb.com/games/arcade-game-series-ms-pac-man",
  },
  {
    code: 83738,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co27zy.jpg",
    first_release_date: 1513296000,
    genres: [],
    name: "Ironcast Complete Collection",
    platform: {
      name: "Xbox One",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl95.jpg",
      url: "https://www.igdb.com/platforms/xboxone",
    },
    slug: "ironcast-complete-collection",
    summary:
      "Get the complete Ironcast experience! Enjoy the base game along with two additional mechs and commanders\n" +
      "\n" +
      "This bundle includes:\n" +
      "Ironcast, base game\n" +
      "The Stirling Pack\n" +
      "The Windsor Pack",
    url: "https://www.igdb.com/games/ironcast-complete-collection",
  },
  {
    code: 115022,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co1j4o.jpg",
    first_release_date: 1549324800,
    genres: ["Sport"],
    name: "Pro Fishing Simulator - Predator Edition",
    platform: {
      name: "Xbox One",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl95.jpg",
      url: "https://www.igdb.com/platforms/xboxone",
    },
    slug: "pro-fishing-simulator-predator-edition",
    summary:
      "Pro Fishing Simulator is an authentic sport fishing simulation for both beginners and avid anglers. Freely explore the most beautiful fishing spots in the world and reel in the best catches by combining technique and the best official equipment.",
    url: "https://www.igdb.com/games/pro-fishing-simulator-predator-edition",
  },
  {
    code: 6803,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co1xhg.jpg",
    first_release_date: 1445904000,
    genres: ["Shooter"],
    name: "Halo 5: Guardians",
    platform: {
      name: "Xbox One",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl95.jpg",
      url: "https://www.igdb.com/platforms/xboxone",
    },
    slug: "halo-5-guardians",
    summary:
      "Peace is shattered when colony worlds are unexpectedly attacked. But when humanity's greatest hero goes missing, a new Spartan is tasked with hunting the Master Chief and solving a mystery that threatens the entire galaxy.",
    url: "https://www.igdb.com/games/halo-5-guardians",
  },
  {
    code: 82415,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/sfrzyg9bbxocyz7w2xpl.jpg",
    first_release_date: 1475625600,
    genres: [],
    name: "Speedboat Challenge",
    platform: {
      name: "Xbox One",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl95.jpg",
      url: "https://www.igdb.com/platforms/xboxone",
    },
    slug: "speedboat-challenge",
    summary:
      "Take the challenge and drive against the best pilots of the world!\n" +
      "\n" +
      "Speedboat Challenge is a high quality motorboat race simulation. Make your driving career in the powerboat league. You drive a configurable high power speedboat on different race tracks through amazing landscapes.\n" +
      "\n" +
      "- singleplayer league, practice and treasure hunt\n" +
      "- high-end autopilot with lifelike computer driving, like real players \n" +
      "- impressive real-time physics with realistic movements and reactions\n" +
      "- light model with sunshine, artificial light, darkness and real-time shadows\n" +
      "\n" +
      "Take a introduction in tutorial and gather additional experience in practice with your coach. Your first race can start very soon. Collecting your win bonus enables you to upgrade your boat and be competitive in higher league levels. \n" +
      "\n" +
      "- 19 race tracks\n" +
      "- 5 landscapes\n" +
      "- 8 weather variations\n" +
      "- 7 boats simultaneously\n" +
      "- 5 configurable boat parameters\n" +
      "- 10 levels\n" +
      "- 50 racing goals\n" +
      "\n" +
      "Your speedboat pilot career brings you to diverse race tracks in amazing landscapes around the world:\n" +
      "\n" +
      "- Norway Fiord\n" +
      "- Bavaria Water Speed Park\n" +
      "- Metropia City Maze\n" +
      "- Alpine Canyon\n" +
      "- Caribbean Islands\n" +
      "\n" +
      "Each landscape has a charm of its own. Take the time to watch the details and enjoy the atmosphere of unique water tracks in different weather conditions.\n" +
      "\n" +
      "- ocean, river and channel tracks\n" +
      "- underground city sewerage\n" +
      "- underground thunder dome\n" +
      "- mountain canyon and tunnel\n" +
      "- ocean and river islands\n" +
      "- waterfalls and waves\n" +
      "- ramps and fire challenges\n" +
      "- rocks and shelf\n" +
      "- jurassic beach\n" +
      "\n" +
      "Speedboat Challenge is a race game. It does not include any fighting, killing or violence.\n" +
      "\n" +
      "Driving a powerboat, even in a simulation, is a task that needs to be learned and practiced. With the help of the trainer and by upgrading your boat, you can improve your skills step by step and become an experienced driver in an amazing high sophisticated league.",
    url: "https://www.igdb.com/games/speedboat-challenge",
  },
  {
    code: 82384,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co2514.jpg",
    first_release_date: 1485475200,
    genres: [],
    name: "Doodle God: Ultimate Edition",
    platform: {
      name: "Xbox One",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl95.jpg",
      url: "https://www.igdb.com/platforms/xboxone",
    },
    slug: "doodle-god-ultimate-edition",
    summary:
      "UNLEASH YOUR INNER GOD AND CREATE A NEW UNIVERSE!\n" +
      "\n" +
      "In this addictive puzzle & world building game mix and match different combinations of elements to create an entire universe. As you create each new element watch your planet come alive. Of course the universe was not created in a day. You’ll have to work your up from a simple microorganism in order to create animals, tools, storms, sky scrappers and even build armies before you have what it takes to build the universe. But beware, the power of creation may have unintended consequences, inventing the wheel might just trigger a zombie plague… \n" +
      "\n" +
      "Don’t worry, you are not alone on this cosmic journey! Every time you successfully create a new item you’ll be rewarded with the wit and wisdom of some of the greatest philosophers and comedians of all time. The new “Planet” and PVP modes offer a new challenging way to create a universe of your dreams. Available in 13 Languages. Unleash your inner god with Doodle God™.",
    url: "https://www.igdb.com/games/doodle-god-ultimate-edition",
  },
  {
    code: 103035,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/co27oa.jpg",
    first_release_date: 1527811200,
    genres: ["Puzzle", "Adventure", "Indie"],
    name: "Illusion: A Tale of the Mind",
    platform: {
      name: "Xbox One",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl95.jpg",
      url: "https://www.igdb.com/platforms/xboxone",
    },
    slug: "illusion-a-tale-of-the-mind",
    summary:
      "Illusion is a puzzle exploration game set in the ambience of the early 1920’s Parisian cabaret. Step into the shoes of a young girl named Emma and live her adventures as she is trapped inside the mind of a mad man. Embark on her journey through the mind’s-eye of her captors, living in a fractured world of old memories and festering wounds, that paradoxically reveals itself to be also a place of great beauty and intrigue.",
    url: "https://www.igdb.com/games/illusion-a-tale-of-the-mind",
  },
  {
    code: 61509,
    cover_url: "//images.igdb.com/igdb/image/upload/t_thumb/is824pgovfvmjlgkgh9g.jpg",
    first_release_date: 1436486400,
    genres: ["Music"],
    name: "Spectra: 8bit Racing",
    platform: {
      name: "Xbox One",
      platform_logo_url: "//images.igdb.com/igdb/image/upload/t_thumb/pl95.jpg",
      url: "https://www.igdb.com/platforms/xboxone",
    },
    slug: "spectra-8bit-racing",
    summary:
      "A rhythm game featuring procedurally generated tracks which the player must race through while avoiding obstacles.",
    url: "https://www.igdb.com/games/spectra-8bit-racing",
  },
];
