const timelineEvents = [
  {
    year: -1250,
    label: "c. 1250 BCE",
    title: "Exodus from Egypt",
    description: "A common modern scholarly placement is in the 13th century BCE, often around the mid-1200s BCE rather than an exact year.",
    palette: ["#b54f2a", "#f1b34f"],
    art: "waves"
  },
  {
    year: -1200,
    label: "c. 1200 BCE",
    title: "Joshua crosses the Jordan",
    description: "Usually placed shortly after the Exodus traditions in broad Late Bronze or early Iron Age reconstructions.",
    palette: ["#2f6b8a", "#8fd1de"],
    art: "river"
  },
  {
    year: -1000,
    label: "c. 1000 BCE",
    title: "Jerusalem established as David's capital",
    description: "The rise of Jerusalem as the royal center is commonly associated with the United Monarchy horizon around 1000 BCE.",
    palette: ["#7f3b24", "#d99a62"],
    art: "city"
  },
  {
    year: -957,
    label: "c. 957 BCE",
    title: "Solomon's Temple built",
    description: "Using conventional biblical chronology, the First Temple is often placed in the mid-10th century BCE.",
    palette: ["#9b6b1a", "#efd48d"],
    art: "temple"
  },
  {
    year: -586,
    label: "586 BCE",
    title: "Babylonians destroy the First Temple",
    description: "The fall of Jerusalem to Babylon in 586 BCE is one of the strongest fixed dates in the sequence.",
    palette: ["#61291d", "#cf6d42"],
    art: "fire"
  },
  {
    year: -538,
    label: "538 BCE",
    title: "Return from exile begins",
    description: "The Persian-era return is usually linked to Cyrus's policy after the conquest of Babylon in 539 BCE, with return beginning in 538 BCE.",
    palette: ["#35624f", "#8ad1a5"],
    art: "road"
  },
  {
    year: -516,
    label: "516 BCE",
    title: "Second Temple period begins",
    description: "The rebuilt temple is generally dated to 516 or 515 BCE, marking the start of the Second Temple era in Jerusalem.",
    palette: ["#6e5217", "#f0c870"],
    art: "columns"
  },
  {
    year: -6,
    label: "c. 6 BCE",
    title: "Birth of John the Baptist",
    description: "John's birth is usually placed in the same late Herodian context as Jesus, before Herod's death in 4 BCE.",
    palette: ["#5f5a2e", "#c8d27f"],
    art: "desert"
  },
  {
    year: -4,
    label: "c. 4 BCE",
    title: "Birth of Jesus",
    description: "A broad scholarly estimate places Jesus' birth between about 6 and 4 BCE, with 4 BCE serving as a representative marker.",
    palette: ["#314d75", "#b7d8ff"],
    art: "star"
  },
  {
    year: 30,
    label: "30 CE",
    title: "Crucifixion of Jesus",
    description: "The dominant scholarly options are 30 CE or 33 CE; 30 CE is commonly used as the representative date.",
    palette: ["#5d1d19", "#c78874"],
    art: "cross"
  },
  {
    year: 70,
    label: "70 CE",
    title: "Romans sack Jerusalem",
    description: "Roman destruction of Jerusalem and the Second Temple in 70 CE reshaped both Judaism and Christianity.",
    palette: ["#3f2a2f", "#b88365"],
    art: "eagle"
  },
  {
    year: 80,
    label: "c. 50-110 CE",
    title: "New Testament writings",
    description: "Most New Testament books are typically dated between the 50s and early 2nd century, with the core writing period in the late 1st century.",
    palette: ["#355f52", "#9fd5bf"],
    art: "scroll"
  },
  {
    year: 100,
    label: "c. 90-120 CE",
    title: "Didache",
    description: "The Didache is usually dated to the late 1st or early 2nd century and is often associated with Syria.",
    palette: ["#6d3f5b", "#d7a6cd"],
    art: "tablet"
  },
  {
    year: 200,
    label: "c. 200 CE",
    title: "Mishnah compiled",
    description: "Rabbi Judah ha-Nasi's redaction of the Mishnah is generally placed around 200 CE.",
    palette: ["#6b4321", "#d4a878"],
    art: "book"
  },
  {
    year: 350,
    label: "c. 200-500 CE",
    title: "Gemara develops",
    description: "The Gemara represents centuries of discussion layered onto the Mishnah in both Palestinian and Babylonian settings.",
    palette: ["#285761", "#8ec8c5"],
    art: "discussion"
  },
  {
    year: 400,
    label: "c. 400 CE",
    title: "Jerusalem Talmud",
    description: "The Palestinian or Jerusalem Talmud is usually dated to the late 4th or early 5th century CE.",
    palette: ["#5e5b85", "#b9b7e8"],
    art: "arch"
  },
  {
    year: 500,
    label: "c. 500 CE",
    title: "Babylonian Talmud",
    description: "The Babylonian Talmud reached its mature form later than the Jerusalem Talmud, commonly around the 5th to 6th century CE.",
    palette: ["#4a3322", "#d2a06d"],
    art: "lamp"
  }
];

const artRenderers = {
  waves: (colors) => `
    <rect width="800" height="600" fill="${colors[0]}" />
    <circle cx="650" cy="110" r="72" fill="${colors[1]}" opacity="0.9" />
    <path d="M0 400 Q80 340 160 400 T320 400 T480 400 T640 400 T800 400 V600 H0Z" fill="${colors[1]}" opacity="0.9" />
    <path d="M0 465 Q70 420 140 465 T280 465 T420 465 T560 465 T700 465 T840 465 V600 H0Z" fill="#f5ecd4" opacity="0.8" />
    <path d="M0 520 Q80 490 160 520 T320 520 T480 520 T640 520 T800 520 V600 H0Z" fill="#fff8eb" opacity="0.95" />
  `,
  river: (colors) => `
    <rect width="800" height="600" fill="#d7b37a" />
    <path d="M280 0 C420 130 350 260 470 410 C550 510 550 560 620 600 H800 V0Z" fill="${colors[0]}" />
    <path d="M340 0 C470 130 400 260 510 410 C585 512 592 556 664 600" fill="none" stroke="${colors[1]}" stroke-width="42" stroke-linecap="round" opacity="0.7" />
    <rect x="72" y="120" width="130" height="220" rx="18" fill="#a76533" />
    <rect x="596" y="180" width="110" height="180" rx="18" fill="#8f552d" />
  `,
  city: (colors) => `
    <rect width="800" height="600" fill="#f4d1a4" />
    <path d="M0 600 L160 420 L280 470 L420 310 L540 410 L670 250 L800 340 V600Z" fill="${colors[0]}" />
    <rect x="220" y="230" width="86" height="220" fill="#c28146" />
    <rect x="320" y="180" width="110" height="270" fill="#b96836" />
    <rect x="450" y="250" width="88" height="200" fill="#d79d5e" />
    <rect x="560" y="205" width="120" height="245" fill="#8f4e2f" />
    <circle cx="630" cy="152" r="30" fill="${colors[1]}" />
  `,
  temple: (colors) => `
    <rect width="800" height="600" fill="#f4e1b4" />
    <rect x="120" y="230" width="560" height="250" rx="18" fill="${colors[0]}" />
    <polygon points="90,250 400,110 710,250" fill="${colors[1]}" />
    <rect x="180" y="250" width="60" height="190" fill="#f7ecd1" />
    <rect x="290" y="250" width="60" height="190" fill="#f7ecd1" />
    <rect x="450" y="250" width="60" height="190" fill="#f7ecd1" />
    <rect x="560" y="250" width="60" height="190" fill="#f7ecd1" />
    <rect x="355" y="300" width="90" height="180" fill="#734112" />
  `,
  fire: (colors) => `
    <rect width="800" height="600" fill="#2f1412" />
    <rect x="160" y="250" width="480" height="210" rx="16" fill="#704227" />
    <polygon points="130,270 400,120 670,270" fill="#8d5b2d" />
    <path d="M280 470 C230 360 320 330 320 260 C370 295 390 350 380 400 C430 350 445 280 420 220 C515 290 540 370 500 470Z" fill="${colors[1]}" />
    <path d="M360 470 C330 410 380 370 382 320 C420 350 430 390 420 430 C460 405 470 360 462 310 C520 360 530 418 500 470Z" fill="#ffcc67" />
  `,
  road: (colors) => `
    <rect width="800" height="600" fill="#d6c39f" />
    <rect width="800" height="240" fill="${colors[1]}" opacity="0.35" />
    <path d="M360 600 C350 490 370 420 400 340 C430 260 470 190 510 0" fill="none" stroke="#8e5f34" stroke-width="120" stroke-linecap="round" />
    <path d="M360 600 C350 490 370 420 400 340 C430 260 470 190 510 0" fill="none" stroke="#e7d6b4" stroke-width="18" stroke-linecap="round" stroke-dasharray="22 26" />
    <path d="M110 440 C180 320 220 280 280 210" fill="none" stroke="${colors[0]}" stroke-width="24" stroke-linecap="round" opacity="0.7" />
  `,
  columns: (colors) => `
    <rect width="800" height="600" fill="#efe4c5" />
    <rect x="120" y="180" width="560" height="54" fill="${colors[0]}" />
    <rect x="120" y="432" width="560" height="54" fill="${colors[0]}" />
    <rect x="170" y="210" width="70" height="230" rx="12" fill="#f8f0de" />
    <rect x="300" y="210" width="70" height="230" rx="12" fill="#f8f0de" />
    <rect x="430" y="210" width="70" height="230" rx="12" fill="#f8f0de" />
    <rect x="560" y="210" width="70" height="230" rx="12" fill="#f8f0de" />
    <circle cx="400" cy="114" r="50" fill="${colors[1]}" opacity="0.85" />
  `,
  desert: (colors) => `
    <rect width="800" height="600" fill="#e6c98f" />
    <path d="M0 440 Q120 400 240 442 T480 435 T800 450 V600 H0Z" fill="#bd8b4a" />
    <path d="M0 490 Q110 452 220 494 T440 488 T800 500 V600 H0Z" fill="#a8733d" />
    <rect x="380" y="150" width="24" height="210" rx="10" fill="${colors[0]}" />
    <path d="M392 160 C340 182 326 240 364 276 C390 250 408 214 392 160Z" fill="${colors[1]}" />
    <path d="M392 190 C444 208 462 262 422 302 C398 274 382 234 392 190Z" fill="${colors[1]}" />
  `,
  star: (colors) => `
    <rect width="800" height="600" fill="#142036" />
    <circle cx="610" cy="130" r="84" fill="${colors[1]}" opacity="0.92" />
    <path d="M400 80 L428 168 L520 170 L446 226 L470 316 L400 262 L330 316 L354 226 L280 170 L372 168Z" fill="#fff1b0" />
    <path d="M110 470 C180 350 280 320 360 420 C420 320 540 340 610 470Z" fill="${colors[0]}" />
    <rect x="354" y="318" width="92" height="128" rx="18" fill="#7a4d3f" />
  `,
  cross: (colors) => `
    <rect width="800" height="600" fill="#d5b08b" />
    <circle cx="630" cy="100" r="72" fill="${colors[1]}" opacity="0.72" />
    <rect x="360" y="170" width="82" height="290" rx="12" fill="${colors[0]}" />
    <rect x="270" y="225" width="260" height="72" rx="12" fill="${colors[0]}" />
    <path d="M0 600 Q150 470 300 540 T620 520 T800 590 V600Z" fill="#8d6139" />
  `,
  eagle: (colors) => `
    <rect width="800" height="600" fill="#ead2b2" />
    <path d="M120 360 C200 240 320 230 400 320 C480 230 600 240 680 360 C590 340 520 360 462 420 C442 370 420 340 400 330 C380 340 358 370 338 420 C280 360 210 340 120 360Z" fill="${colors[0]}" />
    <circle cx="400" cy="150" r="58" fill="${colors[1]}" />
    <path d="M120 500 L210 390 L320 500 L450 355 L570 500 L680 380 L800 500 V600 H0V520Z" fill="#a36c45" />
  `,
  scroll: (colors) => `
    <rect width="800" height="600" fill="#efe0b5" />
    <rect x="170" y="120" width="460" height="340" rx="26" fill="#fff8e7" stroke="${colors[0]}" stroke-width="18" />
    <circle cx="190" cy="180" r="28" fill="${colors[1]}" />
    <circle cx="610" cy="400" r="28" fill="${colors[1]}" />
    <path d="M250 210 H550 M250 270 H550 M250 330 H520 M250 390 H540" stroke="${colors[0]}" stroke-width="18" stroke-linecap="round" />
  `,
  tablet: (colors) => `
    <rect width="800" height="600" fill="#d7c6a8" />
    <rect x="220" y="110" width="360" height="390" rx="48" fill="${colors[0]}" />
    <rect x="250" y="150" width="300" height="310" rx="30" fill="#f0e3c8" />
    <path d="M320 220 H480 M320 280 H470 M320 340 H500 M320 400 H445" stroke="${colors[1]}" stroke-width="20" stroke-linecap="round" />
  `,
  book: (colors) => `
    <rect width="800" height="600" fill="#f2dfbe" />
    <rect x="185" y="130" width="200" height="330" rx="20" fill="${colors[0]}" />
    <rect x="415" y="130" width="200" height="330" rx="20" fill="${colors[1]}" />
    <rect x="380" y="130" width="40" height="330" fill="#f7efda" />
    <path d="M235 205 H335 M235 260 H340 M235 315 H325" stroke="#f9f0db" stroke-width="16" stroke-linecap="round" />
    <path d="M465 205 H565 M465 260 H570 M465 315 H555" stroke="#fff9e8" stroke-width="16" stroke-linecap="round" />
  `,
  discussion: (colors) => `
    <rect width="800" height="600" fill="#d4e5e0" />
    <rect x="110" y="150" width="270" height="185" rx="28" fill="${colors[0]}" />
    <polygon points="190,335 225,400 280,335" fill="${colors[0]}" />
    <rect x="420" y="245" width="270" height="185" rx="28" fill="${colors[1]}" />
    <polygon points="500,430 560,500 590,430" fill="${colors[1]}" />
    <path d="M170 220 H310 M170 270 H280 M480 315 H620 M480 365 H580" stroke="#f4fffd" stroke-width="18" stroke-linecap="round" />
  `,
  arch: (colors) => `
    <rect width="800" height="600" fill="#e3ddd1" />
    <rect x="165" y="160" width="120" height="310" fill="${colors[0]}" />
    <rect x="515" y="160" width="120" height="310" fill="${colors[0]}" />
    <path d="M225 260 C225 140 575 140 575 260 V470 H225Z" fill="${colors[1]}" />
    <path d="M305 470 V316 C305 214 495 214 495 316 V470Z" fill="#f6f2e5" />
  `,
  lamp: (colors) => `
    <rect width="800" height="600" fill="#221712" />
    <path d="M255 370 C270 270 530 270 545 370 C530 450 270 450 255 370Z" fill="${colors[0]}" />
    <rect x="375" y="190" width="50" height="120" rx="16" fill="#d8b282" />
    <path d="M400 100 C448 154 446 210 400 250 C354 210 352 154 400 100Z" fill="${colors[1]}" />
    <circle cx="400" cy="122" r="58" fill="#ffc96e" opacity="0.55" />
  `
};

function svgDataUri(event) {
  const body = artRenderers[event.art](event.palette);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" role="img" aria-label="${escapeHtml(event.title)}">
      ${body}
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("\"", "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderTimeline() {
  const scroll = document.getElementById("timeline-scroll");
  const stage = document.getElementById("timeline-stage");
  const sorted = [...timelineEvents].sort((a, b) => a.year - b.year);
  const minYear = sorted[0].year;
  const maxYear = sorted[sorted.length - 1].year;
  const edgePadding = 64;
  const markerRadius = 14;
  const cardHalfWidth = 130;
  const line = document.createElement("div");
  const markerCardPairs = [];
  const zoomState = {
    current: 1,
    min: 0.65,
    max: 3.2,
    stageWidth: 0
  };
  const popupGapDesktop = 128;
  const popupGapMobile = 110;
  const popupTopPadding = 24;

  stage.innerHTML = "";
  line.className = "timeline-line";
  line.setAttribute("aria-hidden", "true");
  stage.appendChild(line);

  sorted.forEach((event, index) => {
    const card = document.createElement("article");
    const marker = document.createElement("button");
    const accent = event.palette[0];
    const image = svgDataUri(event);
    const ratio = (event.year - minYear) / (maxYear - minYear);

    marker.className = "timeline-marker";
    marker.style.background = `radial-gradient(circle at 35% 30%, ${event.palette[1]}, ${event.palette[0]})`;
    marker.type = "button";
    marker.setAttribute("aria-label", `${event.title} (${event.label})`);
    marker.setAttribute("aria-expanded", "false");

    card.className = "event-card";
    card.innerHTML = `
      <div class="event-card-inner">
        <div class="image-shell">
          <img class="event-thumb" src="${image}" alt="${escapeHtml(event.title)} illustration" />
        </div>
        <span class="event-date" style="background:${accent}">${event.label}</span>
        <h3 class="event-title">${event.title}</h3>
        <p class="event-desc">${event.description}</p>
      </div>
    `;

    marker.addEventListener("click", () => {
      const isVisible = card.classList.contains("is-visible");
      marker.classList.toggle("is-active", !isVisible);
      marker.setAttribute("aria-expanded", String(!isVisible));
      card.classList.toggle("is-visible", !isVisible);
    });

    card.addEventListener("click", () => {
      marker.classList.remove("is-active");
      marker.setAttribute("aria-expanded", "false");
      card.classList.remove("is-visible");
    });

    markerCardPairs.push({ marker, card, ratio });
    stage.append(marker, card);
  });

  const legend = document.createElement("p");
  legend.className = "legend";
  legend.textContent = "Dates are representative scholarly placements. Several entries are ranges because the source material supports approximate periods more confidently than exact years.";
  stage.appendChild(legend);

  function updateLayout() {
    const viewportWidth = scroll.clientWidth || stage.clientWidth || 1200;
    const viewportHeight = window.innerHeight || 900;
    const gap = window.innerWidth <= 900 ? popupGapMobile : popupGapDesktop;
    const baseLineWidth = Math.max(viewportWidth - edgePadding * 2, 720);
    const lineWidth = baseLineWidth * zoomState.current;
    const stageWidth = Math.max(viewportWidth, lineWidth + edgePadding * 2);
    const lineLeft = (stageWidth - lineWidth) / 2;
    let maxCardHeight = 0;
    let tallestCardBottom = 0;

    markerCardPairs.forEach(({ card }) => {
      maxCardHeight = Math.max(maxCardHeight, card.offsetHeight);
    });

    const preferredLineTop = viewportHeight * 0.75;
    const lineTop = Math.max(preferredLineTop, popupTopPadding + maxCardHeight + gap);

    zoomState.stageWidth = stageWidth;
    stage.style.width = `${stageWidth}px`;
    stage.style.setProperty("--line-top-px", `${lineTop}px`);
    stage.style.setProperty("--popup-gap-px", `${gap}px`);
    line.style.left = `${lineLeft}px`;
    line.style.width = `${lineWidth}px`;

    markerCardPairs.forEach(({ marker, card, ratio }) => {
      const x = lineLeft + ratio * lineWidth;
      marker.style.left = `${x - markerRadius}px`;
      card.style.left = `${x - cardHalfWidth}px`;

      const cardHeight = card.offsetHeight;
      const cardTop = Math.max(popupTopPadding, lineTop - gap - cardHeight);
      card.style.top = `${cardTop}px`;
      tallestCardBottom = Math.max(tallestCardBottom, cardTop + cardHeight);
    });

    const minHeight = Math.max(window.innerHeight, lineTop + 160, tallestCardBottom + gap + 80);
    stage.style.minHeight = `${minHeight}px`;
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  scroll.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();

      const rect = scroll.getBoundingClientRect();
      const pointerOffset = event.clientX - rect.left;
      const priorWidth = zoomState.stageWidth || stage.clientWidth || 1;
      const anchorRatio = clamp((scroll.scrollLeft + pointerOffset) / priorWidth, 0, 1);
      const zoomFactor = Math.exp(-event.deltaY * 0.0016);
      const nextZoom = clamp(zoomState.current * zoomFactor, zoomState.min, zoomState.max);

      if (nextZoom === zoomState.current) {
        return;
      }

      zoomState.current = nextZoom;
      updateLayout();
      scroll.scrollLeft = anchorRatio * zoomState.stageWidth - pointerOffset;
    },
    { passive: false }
  );

  window.addEventListener("resize", updateLayout);
  updateLayout();
}

renderTimeline();
