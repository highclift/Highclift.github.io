/*
  ADD OR EDIT YOUR GAMES in the `projects` list below. Each project supports:
  image: path to a picture (example: "Images/my-game.jpg") — 16:9 looks best
  gameUrl: link to play the game. A Roblox link also powers the live stats.
  youtubeId: the video ID from youtube.com/watch?v=VIDEO_ID
  Leave youtubeId empty and the trailer button is hidden; set gameUrl to "#"
  and the play button is disabled.
*/

/*
  ADD OR EDIT YOUR CONTACT LINKS HERE:
  Duplicate an item to add another contact. Use icon: "link" for the generic icon.
  Discord profile links use: https://discord.com/users/YOUR_USER_ID
*/
const contacts = [
  { label: "Discord", href: "https://discord.com/users/550967634468798474", icon: "discord" },
  { label: "Email", href: "mailto:highclifty@gmail.com", icon: "email" },
];

const projects = [
  {
    title: "Cafe Zone",
    year: "2025",
    status: "RELEASED",
    category: "released",
    description:
      "Cafe Zone is a social roleplay game where players can explore a café, interact with others, enjoy the atmosphere, and create memorable experiences together.",
    tags: ["Hangout", "Voice"],
    image:
      "https://tr.rbxcdn.com/180DAY-507b44edc909d0db6035a8d81c5e1d28/768/432/Image/Webp/noFilter",
    imageAlt: "Cafe Zone thumbnail — a social roleplay café",
    gameUrl: "https://www.roblox.com/id/games/70385018672502/Cafe-Zone",
    youtubeId: "",
  },
  {
    title: "Lumber Realm",
    year: "2025",
    status: "RELEASED",
    category: "released",
    description:
      "Lumber Realm is a lumber-themed adventure game where players explore forests, gather wood, upgrade their tools, and progress through new challenges.",
    tags: ["Simulation"],
    image:
      "https://tr.rbxcdn.com/180DAY-51386825d83b9a26500674acbe2ca431/768/432/Image/Webp/noFilter",
    imageAlt: "Lumber Realm thumbnail — a forest logging adventure",
    gameUrl: "https://www.roblox.com/id/games/77196616452886/Lumber-Realm",
    youtubeId: "",
  },
  {
    title: "Deep Sea Explorer",
    year: "2025",
    status: "RELEASED",
    category: "released",
    description:
      "Become a Deep Sea Explorer is an underwater adventure where players discover ocean biomes, collect rare fish, find sunken treasures, and build their own aquarium empire.",
    tags: ["Simulation", "Tychon"],
    image:
      "https://tr.rbxcdn.com/180DAY-c87de4102311facdb39a71cf1efef4f7/768/432/Image/Webp/noFilter",
    imageAlt: "Deep Sea Explorer thumbnail — an underwater diving adventure",
    gameUrl: "https://www.roblox.com/id/games/113909829646571/Become-a-Deep-Sea-Explorer",
    youtubeId: "",
  },
  {
    title: "Delivery Boss",
    year: "2026",
    status: "RELEASED",
    category: "released",
    description:
      "Delivery Boss is a delivery simulation game where players complete orders, transport packages, earn rewards, and build their delivery business.",
    tags: ["Simulation", "Idle"],
    image:
      "https://tr.rbxcdn.com/180DAY-4b76f8c3e3300454f136ad59b413b887/768/432/Image/Webp/noFilter",
    imageAlt: "Delivery Boss thumbnail — a package delivery simulation",
    gameUrl: "https://www.roblox.com/id/games/124259204488421/Delivery-Boss",
    youtubeId: "",
  },
  {
    title: "Guard VS Robbers",
    year: "2026",
    status: "IN DEVELOPMENT",
    category: "in-progress",
    description:
      "Guard VS Robbers is an action-packed game where robbers steal an item from a mall or other location and guards try to stop them. Roles are randomly assigned to players at the start of the round.",
    tags: ["Action", "Strategy"],
    image:
      "https://tr.rbxcdn.com/180DAY-980ef4b4b4639b6cfe29a484e537e847/768/432/GameMediaItem9/Webp/noFilter",
    imageAlt: "Guard VS Robbers thumbnail — guards chasing robbers through a mall",
    // TODO: this still points at Delivery Boss. Swap in the real link (or "#")
    // once Guard VS Robbers has its own Roblox page.
    gameUrl: "https://www.roblox.com/id/games/124259204488421/Delivery-Boss",
    youtubeId: "",
  },
];

/* ------------------------------------------------------------------------- */

const contactIcons = {
  discord:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.7 5.3a18 18 0 0 0-4.4-1.4l-.6 1.2a16.5 16.5 0 0 0-5.4 0l-.6-1.2a18 18 0 0 0-4.4 1.4C1.5 9.5.7 13.6 1.1 17.6a18 18 0 0 0 5.4 2.7l1.2-2a11.7 11.7 0 0 1-1.9-.9l.5-.4c3.7 1.7 7.7 1.7 11.3 0l.5.4a11.7 11.7 0 0 1-1.9.9l1.2 2a18 18 0 0 0 5.4-2.7c.5-4.7-.8-8.8-3.1-12.3ZM8.8 14.6c-1.1 0-2-.9-2-2.1s.9-2.1 2-2.1 2 .9 2 2.1-.9 2.1-2 2.1Zm6.4 0c-1.1 0-2-.9-2-2.1s.9-2.1 2-2.1 2 .9 2 2.1-.9 2.1-2 2.1Z"/></svg>',
  email:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285f4" d="M3 7.2 5.8 9v10H4.2A2.2 2.2 0 0 1 2 16.8V8.7c0-.6.4-1.2 1-1.5Z"/><path fill="#34a853" d="M18.2 9 21 7.2c.6.3 1 .9 1 1.5v8.1a2.2 2.2 0 0 1-2.2 2.2h-1.6V9Z"/><path fill="#ea4335" d="m3 7.2 1.1-.7a2.4 2.4 0 0 1 2.8.1l5.1 4 5.1-4a2.4 2.4 0 0 1 2.8-.1l1.1.7-9 7-9-7Z"/><path fill="#c5221f" d="M2.3 7.7 5.8 10v3L2 10.1V8.7c0-.4.1-.7.3-1Z"/><path fill="#fbbc04" d="M18.2 10 22 7.7c.2.3.3.6.3 1v1.4L18.2 13v-3Z"/></svg>',
  link:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.6 13.4a1 1 0 0 1 0-1.4l3-3a3 3 0 0 1 4.2 4.2l-2 2a3 3 0 0 1-4.2 0 1 1 0 0 1 1.4-1.4 1 1 0 0 0 1.4 0l2-2a1 1 0 0 0-1.4-1.4l-3 3a1 1 0 0 1-1.4 0Zm2.8-2.8a1 1 0 0 1 0 1.4l-3 3a3 3 0 0 1-4.2-4.2l2-2a3 3 0 0 1 4.2 0A1 1 0 0 1 11 10.2a1 1 0 0 0-1.4 0l-2 2A1 1 0 0 0 9 13.6l3-3a1 1 0 0 1 1.4 0Z"/></svg>',
};

const grid = document.querySelector("#game-grid");
const count = document.querySelector("#filter-count");
const chipGroup = document.querySelector("#filter-chips");
const videoDialog = document.querySelector("#video-dialog");
const videoFrame = document.querySelector("#video-frame");
const dialogClose = document.querySelector("#dialog-close");
const compact = new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 });
const full = new Intl.NumberFormat("en");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function esc(value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character],
  );
}

function safeLink(url) {
  return url && url !== "#" ? url : "#";
}

function getRobloxPlaceId(url) {
  return url?.match(/roblox\.com\/(?:[a-z]{2}\/)?(?:id\/)?games\/(\d+)/i)?.[1] ?? "";
}

/* Contact links ----------------------------------------------------------- */
function renderContacts() {
  const links = document.querySelector("#contact-links");
  links.innerHTML = contacts
    .map(({ label, href, icon }) => {
      const external = !href.startsWith("mailto:");
      return `<a class="contact-icon contact-icon-${esc(icon)}" href="${esc(href)}" aria-label="${esc(
        label,
      )}" title="${esc(label)}"${
        external ? ' target="_blank" rel="noopener noreferrer"' : ""
      }>${contactIcons[icon] || contactIcons.link}</a>`;
    })
    .join("");

  // Spell the email out as well — plenty of people avoid mailto: buttons.
  const email = contacts.find((contact) => contact.href.startsWith("mailto:"));
  const direct = document.querySelector("#contact-direct");
  if (email) {
    const address = email.href.replace("mailto:", "");
    direct.innerHTML = `or email <a href="${esc(email.href)}">${esc(address)}</a>`;
  }
}

/* Game cards -------------------------------------------------------------- */
function projectCard(project) {
  const playable = safeLink(project.gameUrl);
  const hasLink = playable !== "#";
  const placeId = getRobloxPlaceId(project.gameUrl);
  const title = esc(project.title);

  const thumb = `<img src="${esc(project.image)}" alt="${esc(
    project.imageAlt || `${project.title} thumbnail`,
  )}" loading="lazy" decoding="async" width="768" height="432">
    <span class="image-overlay"></span>
    <span class="game-status${
      project.category === "in-progress" ? " is-in-progress" : ""
    }">${esc(project.status)}</span>
    ${hasLink ? '<span class="image-cta" aria-hidden="true">OPEN ON ROBLOX &#8599;</span>' : ""}`;

  // The thumbnail links to the game too, but stays out of the tab order so
  // keyboard users are not sent through the same destination twice.
  const image = hasLink
    ? `<a class="game-image" href="${esc(
        playable,
      )}" target="_blank" rel="noopener noreferrer" tabindex="-1">${thumb}</a>`
    : `<div class="game-image">${thumb}</div>`;

  const heading = hasLink
    ? `<h3><a href="${esc(
        playable,
      )}" target="_blank" rel="noopener noreferrer">${title}</a></h3>`
    : `<h3>${title}</h3>`;

  const stats = placeId
    ? `<div class="roblox-stats" data-place-id="${esc(placeId)}">
        <span><strong data-stat="visits"><span class="stat-skeleton-inline"></span></strong> visits</span>
      </div>`
    : "";

  const videoButton = project.youtubeId
    ? `<button class="game-button video-button" type="button" data-video="${esc(
        project.youtubeId,
      )}" data-title="${title}">&#9654; Trailer</button>`
    : "";

  const playButton = hasLink
    ? `<a class="game-button play" href="${esc(
        playable,
      )}" target="_blank" rel="noopener noreferrer">Play game <span aria-hidden="true">&#8599;</span></a>`
    : `<span class="game-button play" aria-disabled="true" title="Add your game link in script.js">Coming soon</span>`;

  return `<article class="game-card" data-category="${esc(project.category)}">
    ${image}
    <div class="game-info">
      <div class="game-title-row">${heading}<span class="game-year">${esc(project.year)}</span></div>
      <p>${esc(project.description)}</p>
      ${stats}
      <div class="game-footer">
        <div class="game-tags">${project.tags.map((tag) => `<span>${esc(tag)}</span>`).join("")}</div>
        <div class="game-actions">${videoButton}${playButton}</div>
      </div>
    </div>
  </article>`;
}

/* Roblox visit counts ----------------------------------------------------- */
// Roblox's own endpoints send no CORS headers, so a browser page can never read
// them directly. The numbers are collected away from the browser and stored in
// stats.json, which this page can load because it is served from the same origin.
const statsByPlaceId = new Map();
let statsUpdated = "";
let statsRequest = null;

async function fetchStats() {
  const response = await fetch("stats.json", { cache: "no-cache" });
  if (!response.ok) throw new Error("stats.json is missing.");

  const { places, updated } = await response.json();
  statsUpdated = updated ?? "";
  Object.entries(places ?? {}).forEach(([placeId, stats]) => {
    if (typeof stats?.visits === "number") statsByPlaceId.set(placeId, { visits: stats.visits });
  });

  return statsByPlaceId;
}

function paintCardStats() {
  grid.querySelectorAll(".roblox-stats").forEach((row) => {
    const stats = statsByPlaceId.get(row.dataset.placeId);
    if (!stats) return;

    row.querySelector('[data-stat="visits"]').textContent = compact.format(stats.visits);
    row.setAttribute("aria-label", `${full.format(stats.visits)} total visits`);
  });
}

function paintStatsDate() {
  const node = document.querySelector("#stats-updated");
  if (!node || !statsUpdated) return;

  const date = new Date(`${statsUpdated}T00:00:00`);
  if (Number.isNaN(date.valueOf())) return;
  node.textContent = `Visit counts from the Roblox API, updated ${date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })}.`;
}

function markCardStatsUnavailable() {
  grid.querySelectorAll(".roblox-stats").forEach((row) => {
    if (statsByPlaceId.has(row.dataset.placeId)) return;
    row.classList.add("stats-unavailable");
    row.textContent = "Visit count unavailable";
  });
}

// `settled` guards the loading skeleton: until the request finishes there is
// nothing to show yet, so the placeholder has to stay put.
function paintHeroStats(settled = false) {
  const shipped = projects.filter((project) => project.category === "released").length;
  document.querySelector("#stat-games").textContent = String(shipped).padStart(2, "0");

  // Sum unique places, so two projects sharing a link cannot double-count.
  const totals = [...statsByPlaceId.values()];
  if (!totals.length && !settled) return;

  const visitsNode = document.querySelector("#stat-visits");
  if (totals.length) {
    const visits = totals.reduce((sum, stats) => sum + stats.visits, 0);
    visitsNode.textContent = compact.format(visits);
    visitsNode.setAttribute("aria-label", `${full.format(visits)} total visits`);
  } else {
    visitsNode.textContent = "—";
  }
}

async function loadStats() {
  paintHeroStats();
  try {
    statsRequest = statsRequest ?? fetchStats();
    await statsRequest;
  } catch (error) {
    statsRequest = null;
    console.warn("Could not load Roblox stats:", error);
  }
  paintCardStats();
  markCardStatsUnavailable();
  paintHeroStats(true);
  paintStatsDate();
}

/* Rendering + filters ----------------------------------------------------- */
function showProjects(filter = "all") {
  const visible = projects.filter((project) => filter === "all" || project.category === filter);
  grid.innerHTML = visible.length
    ? visible.map(projectCard).join("")
    : '<p class="empty-state">No games in this filter just yet. Check back soon.</p>';
  count.textContent = `SHOWING ${String(visible.length).padStart(2, "0")} PROJECT${
    visible.length === 1 ? "" : "S"
  }`;

  grid.querySelectorAll(".video-button").forEach((button) => {
    button.addEventListener("click", () => openVideo(button.dataset.video, button.dataset.title));
  });

  paintCardStats();
  revealOnScroll(grid.querySelectorAll(".game-card"));
  if (statsRequest) statsRequest.then(paintCardStats).catch(() => markCardStatsUnavailable());
  else loadStats();
}

function setUpFilters() {
  const counts = {
    all: projects.length,
    released: projects.filter((project) => project.category === "released").length,
    "in-progress": projects.filter((project) => project.category === "in-progress").length,
  };

  chipGroup.querySelectorAll(".filter-chip").forEach((chip) => {
    const value = counts[chip.dataset.filter] ?? 0;
    chip.querySelector("[data-chip-count]").textContent = String(value).padStart(2, "0");
    chip.addEventListener("click", () => {
      chipGroup
        .querySelectorAll(".filter-chip")
        .forEach((other) => other.setAttribute("aria-pressed", String(other === chip)));
      showProjects(chip.dataset.filter);
    });
  });
}

/* Video dialog ------------------------------------------------------------ */
let lastFocused = null;

function openVideo(id, title) {
  lastFocused = document.activeElement;
  videoFrame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(
    id,
  )}?autoplay=1&rel=0" title="${esc(
    title,
  )} gameplay video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  videoDialog.showModal();
  dialogClose.focus();
}

dialogClose.addEventListener("click", () => videoDialog.close());
videoDialog.addEventListener("click", (event) => {
  if (event.target === videoDialog) videoDialog.close();
});
videoDialog.addEventListener("close", () => {
  videoFrame.innerHTML = "";
  lastFocused?.focus?.();
});

/* Scroll reveal + nav highlighting ---------------------------------------- */
const revealObserver =
  reduceMotion || !("IntersectionObserver" in window)
    ? null
    : new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Anything already scrolled past is shown outright: it may never
            // intersect again, and invisible content is worse than no fade.
            if (!entry.isIntersecting && entry.boundingClientRect.top > 0) return;
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
      );

function revealOnScroll(nodes) {
  if (!revealObserver) return;
  nodes.forEach((node) => {
    node.classList.add("reveal");
    revealObserver.observe(node);
  });
}

function setUpNavHighlight() {
  if (!("IntersectionObserver" in window)) return;
  const links = [...document.querySelectorAll("#main-nav a")];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry) => {
          links.forEach((link) =>
            link.setAttribute(
              "aria-current",
              String(link.getAttribute("href") === `#${entry.target.id}`),
            ),
          );
        });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );

  sections.forEach((section) => observer.observe(section));
}

/* Boot -------------------------------------------------------------------- */
document.querySelector("#footer-year").textContent = String(new Date().getFullYear());
if (revealObserver) document.documentElement.classList.add("reveal-ready");

renderContacts();
setUpFilters();
setUpNavHighlight();
showProjects();
revealOnScroll(
  document.querySelectorAll(".section-heading, .filter-row, .about-wrap, .contact-section > *"),
);
