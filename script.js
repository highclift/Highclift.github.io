/*
  image: path to a picture (example: "images/my-game.jpg")
  gameUrl: link to play or download the game
  youtubeId: the video ID from youtube.com/watch?v=VIDEO_ID
  Set an unused link to "#" and its button will be disabled.
*/
/*
  ADD OR EDIT YOUR CONTACT LINKS HERE:
  Duplicate an item to add another contact. Use icon: "link" for the generic icon.
  Replace the Discord URL with your server invite or profile when you have it.
*/
const contacts = [
  { label: "Discord", href: "https://discord.com/app", icon: "discord" },
  { label: "Email", href: "mailto:highclifty@gmail.com", icon: "email" },
];

const contactIcons = {
  discord: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.7 5.3a18 18 0 0 0-4.4-1.4l-.6 1.2a16.5 16.5 0 0 0-5.4 0l-.6-1.2a18 18 0 0 0-4.4 1.4C1.5 9.5.7 13.6 1.1 17.6a18 18 0 0 0 5.4 2.7l1.2-2a11.7 11.7 0 0 1-1.9-.9l.5-.4c3.7 1.7 7.7 1.7 11.3 0l.5.4a11.7 11.7 0 0 1-1.9.9l1.2 2a18 18 0 0 0 5.4-2.7c.5-4.7-.8-8.8-3.1-12.3ZM8.8 14.6c-1.1 0-2-.9-2-2.1s.9-2.1 2-2.1 2 .9 2 2.1-.9 2.1-2 2.1Zm6.4 0c-1.1 0-2-.9-2-2.1s.9-2.1 2-2.1 2 .9 2 2.1-.9 2.1-2 2.1Z"/></svg>',
  email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285f4" d="M3 7.2 5.8 9v10H4.2A2.2 2.2 0 0 1 2 16.8V8.7c0-.6.4-1.2 1-1.5Z"/><path fill="#34a853" d="M18.2 9 21 7.2c.6.3 1 .9 1 1.5v8.1a2.2 2.2 0 0 1-2.2 2.2h-1.6V9Z"/><path fill="#ea4335" d="m3 7.2 1.1-.7a2.4 2.4 0 0 1 2.8.1l5.1 4 5.1-4a2.4 2.4 0 0 1 2.8-.1l1.1.7-9 7-9-7Z"/><path fill="#c5221f" d="M2.3 7.7 5.8 10v3L2 10.1V8.7c0-.4.1-.7.3-1Z"/><path fill="#fbbc04" d="M18.2 10 22 7.7c.2.3.3.6.3 1v1.4L18.2 13v-3Z"/></svg>',
  link: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.6 13.4a1 1 0 0 1 0-1.4l3-3a3 3 0 0 1 4.2 4.2l-2 2a3 3 0 0 1-4.2 0 1 1 0 0 1 1.4-1.4 1 1 0 0 0 1.4 0l2-2a1 1 0 0 0-1.4-1.4l-3 3a1 1 0 0 1-1.4 0Zm2.8-2.8a1 1 0 0 1 0 1.4l-3 3a3 3 0 0 1-4.2-4.2l2-2a3 3 0 0 1 4.2 0A1 1 0 0 1 11 10.2a1 1 0 0 0-1.4 0l-2 2A1 1 0 0 0 9 13.6l3-3a1 1 0 0 1 1.4 0Z"/></svg>',
};

const contactLinks = document.querySelector("#contact-links");
contactLinks.innerHTML = contacts.map(({ label, href, icon }) => {
  const external = !href.startsWith("mailto:");
  return `<a class="contact-icon contact-icon-${icon}" href="${href}" aria-label="${label}" title="${label}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${contactIcons[icon] || contactIcons.link}</a>`;
}).join("");

const projects = [
  {
    title: "Cafe Zone",
    year: "2025",
    status: "RELEASED",
    category: "released",
    description: "Cafe Zone is a social roleplay game where players can explore a café, interact with others, enjoy the atmosphere, and create memorable experiences together.",
    tags: ["Hangout", "Voice"],
    image: "https://tr.rbxcdn.com/180DAY-507b44edc909d0db6035a8d81c5e1d28/768/432/Image/Webp/noFilter",
    imageAlt: "Sunlight falling into a green forest",
    gameUrl: "https://www.roblox.com/id/games/70385018672502/Cafe-Zone",
    youtubeId: "",
  },
  {
    title: "Lumber Realm",
    year: "2025",
    status: "RELEASED",
    category: "released",
    description: "Lumber Realm is a lumber-themed adventure game where players explore forests, gather wood, upgrade their tools, and progress through new challenges.",
    tags: ["Simulation"],
    image: "https://tr.rbxcdn.com/180DAY-51386825d83b9a26500674acbe2ca431/768/432/Image/Webp/noFilter",
    imageAlt: "Warm sunrise spilling across a misty valley",
    gameUrl: "https://www.roblox.com/id/games/77196616452886/Lumber-Realm",
    youtubeId: "",
  },
  {
    title: "Deep Sea Explorer",
    year: "2025",
    status: "RELEASED",
    category: "released",
    description: "Become a Deep Sea Explorer is an underwater adventure where players discover ocean biomes, collect rare fish, find sunken treasures, and build their own aquarium empire.",
    tags: ["Simulation", "Tychon"],
    image: "https://tr.rbxcdn.com/180DAY-c87de4102311facdb39a71cf1efef4f7/768/432/Image/Webp/noFilter",
    imageAlt: "A colorful nebula and stars in deep space",
    gameUrl: "https://www.roblox.com/id/games/113909829646571/Become-a-Deep-Sea-Explorer",
    youtubeId: "",
  },
  {
    title: "Delivery Boss",
    year: "2026",
    status: "RELEASED",
    category: "released",
    description: "Delivery Boss is a delivery simulation game where players complete orders, transport packages, earn rewards, and build their delivery business.",
    tags: ["Simulation", "Idle"],
    image: "https://tr.rbxcdn.com/180DAY-4b76f8c3e3300454f136ad59b413b887/768/432/Image/Webp/noFilter",
    imageAlt: "A quiet city skyline at blue hour",
    gameUrl: "https://www.roblox.com/id/games/124259204488421/Delivery-Boss",
    youtubeId: "",
  },

    {
    title: "Guard VS Robbers",
    year: "2026",
    status: "IN DEVELOPMENT",
    category: "in-progress",
    description: "Guard VS Robbers is an action-packed game where robbers steal a item from mall and other place and guards try to stop them. Role is randomly assigned to players at the start of the game.",
    tags: ["Action", "Strategy"],
    image: "https://tr.rbxcdn.com/180DAY-980ef4b4b4639b6cfe29a484e537e847/768/432/GameMediaItem9/Webp/noFilter",
    imageAlt: "A quiet city skyline at blue hour",
    gameUrl: "https://www.roblox.com/id/games/124259204488421/Delivery-Boss",
    youtubeId: "",
  },
];

const grid = document.querySelector("#game-grid");
const count = document.querySelector("#filter-count");
const videoDialog = document.querySelector("#video-dialog");
const videoFrame = document.querySelector("#video-frame");
const robloxStatsCache = new Map();

function safeLink(url) {
  return url && url !== "#" ? url : "#";
}

function getRobloxPlaceId(url) {
  return url?.match(/roblox\.com\/(?:[a-z]{2}\/)?(?:id\/)?games\/(\d+)/i)?.[1] ?? "";
}

function projectCard(project) {
  const playable = safeLink(project.gameUrl);
  const hasVideo = Boolean(project.youtubeId);
  const placeId = getRobloxPlaceId(project.gameUrl);
  const stats = placeId
    ? `<div class="roblox-stats" data-place-id="${placeId}">
        <span><i class="live-dot"></i><strong data-stat="players">…</strong> playing</span>
        <span><strong data-stat="visits">…</strong> visits</span>
      </div>`
    : "";
  const videoButton = hasVideo
    ? `<button class="game-button video-button" type="button" data-video="${encodeURIComponent(project.youtubeId)}" data-title="${project.title.replaceAll('"', "&quot;")}">▶ Watch trailer</button>`
    : `<button class="game-button" type="button" aria-disabled="true" title="Add a YouTube video ID in script.js">▶ Add trailer</button>`;
  const playButton = playable !== "#"
    ? `<a class="game-button play" href="${playable}" target="_blank" rel="noopener noreferrer">Play game <span aria-hidden="true">↗</span></a>`
    : `<a class="game-button play" href="#" aria-disabled="true" title="Add your game link in script.js">Play game <span aria-hidden="true">↗</span></a>`;

  return `<article class="game-card" data-category="${project.category}">
    <div class="game-image"><img src="${project.image}" alt="${project.imageAlt}" loading="lazy"><div class="image-overlay"></div><span class="game-status">${project.status}</span></div>
    <div class="game-info"><div class="game-title-row"><h3>${project.title}</h3><span class="game-year">${project.year}</span></div>
    <p>${project.description}</p>${stats}<div class="game-footer"><div class="game-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div><div class="game-actions">${videoButton}${playButton}</div></div></div>
  </article>`;
}

async function loadRobloxStats() {
  const formatter = new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 });
  const statRows = [...grid.querySelectorAll(".roblox-stats")];

  await Promise.all(statRows.map(async (row) => {
    const placeId = row.dataset.placeId;
    try {
      let statsPromise = robloxStatsCache.get(placeId);
      if (!statsPromise) {
        statsPromise = (async () => {
          const universeResponse = await fetch(`https://apis.roblox.com/universes/v1/places/${placeId}/universe`);
          if (!universeResponse.ok) throw new Error("Could not find this Roblox experience.");
          const { universeId } = await universeResponse.json();
          if (!universeId) throw new Error("Roblox did not return an experience ID.");

          const statsResponse = await fetch(`https://games.roblox.com/v1/games?universeIds=${universeId}`);
          if (!statsResponse.ok) throw new Error("Could not load Roblox stats.");
          const { data } = await statsResponse.json();
          return data?.[0];
        })();
        robloxStatsCache.set(placeId, statsPromise);
      }

      const game = await statsPromise;
      if (!game) throw new Error("No public Roblox stats were returned.");

      row.querySelector('[data-stat="players"]').textContent = formatter.format(game.playing ?? 0);
      row.querySelector('[data-stat="visits"]').textContent = formatter.format(game.visits ?? 0);
      row.setAttribute("aria-label", `${game.playing ?? 0} current players, ${game.visits ?? 0} total visits`);
    } catch (error) {
      robloxStatsCache.delete(placeId);
      row.classList.add("stats-unavailable");
      row.innerHTML = "<span>Roblox stats unavailable</span>";
      console.warn(`Could not load Roblox stats for place ${placeId}:`, error);
    }
  }));
}

function showProjects(filter = "all") {
  const visible = projects.filter((project) => filter === "all" || project.category === filter);
  grid.innerHTML = visible.length ? visible.map(projectCard).join("") : '<p class="empty-state">No games here just yet. Check back soon.</p>';
  count.textContent = `SHOWING ${String(visible.length).padStart(2, "0")} PROJECT${visible.length === 1 ? "" : "S"}`;
  grid.querySelectorAll(".video-button").forEach((button) => {
    button.addEventListener("click", () => openVideo(button.dataset.video, button.dataset.title));
  });
  loadRobloxStats();
}

function openVideo(id, title) {
  videoFrame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0" title="${title} gameplay video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  videoDialog.showModal();
}

document.querySelectorAll(".filter-chip").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-chip.active")?.classList.remove("active");
    button.classList.add("active");
    showProjects(button.dataset.filter);
  });
});

document.querySelector("#dialog-close").addEventListener("click", () => videoDialog.close());
videoDialog.addEventListener("click", (event) => {
  if (event.target === videoDialog) videoDialog.close();
});
videoDialog.addEventListener("close", () => { videoFrame.innerHTML = ""; });

showProjects();
