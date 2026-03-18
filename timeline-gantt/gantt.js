const ganttEvents = [
  {
    start: -1250,
    end: -1240,
    label: "c. 1250 BCE",
    title: "Exodus from Egypt",
    description: "A common scholarly placement is in the 13th century BCE, usually represented in the mid-1200s BCE rather than as a fixed exact year.",
    palette: ["#b54f2a", "#f1b34f"],
    art: "waves",
    group: "Exodus and Settlement"
  },
  {
    start: -1205,
    end: -1195,
    label: "c. 1200 BCE",
    title: "Joshua crosses the Jordan",
    description: "Usually placed shortly after the Exodus traditions in broad Late Bronze or early Iron Age reconstructions.",
    palette: ["#2f6b8a", "#8fd1de"],
    art: "river",
    group: "Exodus and Settlement"
  },
  {
    start: -1005,
    end: -995,
    label: "c. 1000 BCE",
    title: "Jerusalem established as David's capital",
    description: "Jerusalem's rise as the royal center is commonly associated with the United Monarchy horizon around 1000 BCE.",
    palette: ["#7f3b24", "#d99a62"],
    art: "city",
    group: "Monarchy and First Temple"
  },
  {
    start: -966,
    end: -957,
    label: "c. 960s BCE",
    title: "Solomon's Temple built",
    description: "Using conventional biblical chronology, the First Temple is usually placed in the mid-10th century BCE.",
    palette: ["#9b6b1a", "#efd48d"],
    art: "temple",
    group: "Monarchy and First Temple"
  },
  {
    start: -586,
    end: -586,
    label: "586 BCE",
    title: "Babylonians destroy the First Temple",
    description: "The fall of Jerusalem to Babylon in 586 BCE is one of the strongest fixed dates in the sequence.",
    palette: ["#61291d", "#cf6d42"],
    art: "fire",
    group: "Monarchy and First Temple"
  },
  {
    start: -538,
    end: -520,
    label: "538-520 BCE",
    title: "Return from exile begins",
    description: "The Persian-era return is usually linked to Cyrus's policy after the conquest of Babylon, with restoration beginning in 538 BCE.",
    palette: ["#35624f", "#8ad1a5"],
    art: "road",
    group: "Exile and Restoration"
  },
  {
    start: -516,
    end: 70,
    label: "516 BCE-70 CE",
    title: "Second Temple period",
    description: "The rebuilt temple is generally dated to 516 or 515 BCE, marking the start of the Second Temple era in Jerusalem.",
    palette: ["#6e5217", "#f0c870"],
    art: "columns",
    group: "Exile and Restoration"
  },
  {
    start: -6,
    end: -4,
    label: "c. 6-4 BCE",
    title: "Birth of John the Baptist",
    description: "John's birth is usually placed in the same late Herodian context as Jesus, before Herod's death in 4 BCE.",
    palette: ["#5f5a2e", "#c8d27f"],
    art: "desert",
    group: "Jesus and Jerusalem"
  },
  {
    start: -6,
    end: -4,
    label: "c. 6-4 BCE",
    title: "Birth of Jesus",
    description: "A broad scholarly estimate places Jesus' birth between about 6 and 4 BCE.",
    palette: ["#314d75", "#b7d8ff"],
    art: "star",
    group: "Jesus and Jerusalem"
  },
  {
    start: 30,
    end: 30,
    label: "30 CE",
    title: "Crucifixion of Jesus",
    description: "The dominant scholarly options are 30 CE or 33 CE; 30 CE is commonly used as the representative date.",
    palette: ["#5d1d19", "#c78874"],
    art: "cross",
    group: "Jesus and Jerusalem"
  },
  {
    start: 70,
    end: 70,
    label: "70 CE",
    title: "Romans sack Jerusalem",
    description: "Roman destruction of Jerusalem and the Second Temple in 70 CE reshaped both Judaism and Christianity.",
    palette: ["#3f2a2f", "#b88365"],
    art: "eagle",
    group: "Jesus and Jerusalem"
  },
  {
    start: 50,
    end: 110,
    label: "c. 50-110 CE",
    title: "New Testament writings",
    description: "Most New Testament books are typically dated between the 50s and early 2nd century, with the core writing period in the late 1st century.",
    palette: ["#355f52", "#9fd5bf"],
    art: "scroll",
    group: "Early Christian Texts"
  },
  {
    start: 90,
    end: 120,
    label: "c. 90-120 CE",
    title: "Didache",
    description: "The Didache is usually dated to the late 1st or early 2nd century and is often associated with Syria.",
    palette: ["#6d3f5b", "#d7a6cd"],
    art: "tablet",
    group: "Early Christian Texts"
  },
  {
    start: 200,
    end: 200,
    label: "c. 200 CE",
    title: "Mishnah compiled",
    description: "Rabbi Judah ha-Nasi's redaction of the Mishnah is generally placed around 200 CE.",
    palette: ["#6b4321", "#d4a878"],
    art: "book",
    group: "Rabbinic Literature"
  },
  {
    start: 200,
    end: 500,
    label: "c. 200-500 CE",
    title: "Gemara develops",
    description: "The Gemara represents centuries of discussion layered onto the Mishnah in both Palestinian and Babylonian settings.",
    palette: ["#285761", "#8ec8c5"],
    art: "discussion",
    group: "Rabbinic Literature"
  },
  {
    start: 350,
    end: 425,
    label: "c. 400 CE",
    title: "Jerusalem Talmud",
    description: "The Palestinian or Jerusalem Talmud is usually dated to the late 4th or early 5th century CE.",
    palette: ["#5e5b85", "#b9b7e8"],
    art: "arch",
    group: "Rabbinic Literature"
  },
  {
    start: 450,
    end: 550,
    label: "c. 500 CE",
    title: "Babylonian Talmud",
    description: "The Babylonian Talmud reached its mature form later than the Jerusalem Talmud, commonly around the 5th to 6th century CE.",
    palette: ["#4a3322", "#d2a06d"],
    art: "lamp",
    group: "Rabbinic Literature"
  }
];

const groupNotes = {
  "Exodus and Settlement": "Foundational Israelite traditions and entry into the land.",
  "Monarchy and First Temple": "Jerusalem's rise, temple construction, and the Babylonian catastrophe.",
  "Exile and Restoration": "Return, rebuilding, and the long Second Temple frame.",
  "Jesus and Jerusalem": "Late Herodian births, crucifixion, and Rome's destruction of the city.",
  "Early Christian Texts": "The New Testament corpus and the Didache in the early Christian literary world.",
  "Rabbinic Literature": "Mishnah, Gemara, and the major Talmudic redactions."
};

const groupOrder = [
  "Exodus and Settlement",
  "Monarchy and First Temple",
  "Exile and Restoration",
  "Jesus and Jerusalem",
  "Early Christian Texts",
  "Rabbinic Literature"
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

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("\"", "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function svgDataUri(event) {
  const body = artRenderers[event.art](event.palette);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" role="img" aria-label="${escapeHtml(event.title)}">
      ${body}
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function assignSubrows(events) {
  const byGroup = new Map(groupOrder.map((group) => [group, []]));

  events.forEach((event) => {
    const normalizedEnd = Math.max(event.end, event.start + 1);
    byGroup.get(event.group).push({ ...event, normalizedEnd });
  });

  const grouped = [];

  groupOrder.forEach((group) => {
    const subrows = [];
    const items = byGroup.get(group).sort((a, b) => a.start - b.start);

    items.forEach((item) => {
      const laneIndex = subrows.findIndex((laneEnd) => item.start > laneEnd + 6);
      const subrow = laneIndex === -1 ? subrows.length : laneIndex;
      subrows[subrow] = item.normalizedEnd;
      grouped.push({ ...item, subrow });
    });
  });

  return grouped;
}

function formatTick(year) {
  if (year < 0) {
    return `${Math.abs(year)} BCE`;
  }

  return `${year} CE`;
}

function buildGantt() {
  const stage = document.getElementById("gantt-stage");
  const viewportWidth = window.innerWidth || 1440;
  const chartWidth = Math.max(Math.round(viewportWidth * 1.6), 2200);
  const sidebarWidth = window.innerWidth <= 900 ? 180 : 240;
  const chartMin = -1300;
  const chartMax = 550;
  const yearSpan = chartMax - chartMin;
  const pxPerYear = chartWidth / yearSpan;
  const barHeight = 44;
  const subrowGap = 18;
  const rowGap = 18;
  const rowTopPadding = 22;
  const rowBottomPadding = 24;
  const laneStride = barHeight + subrowGap;
  const axisTicks = [-1200, -1000, -800, -600, -400, -200, 0, 200, 400, 500];
  const events = assignSubrows(ganttEvents);

  stage.style.width = `${sidebarWidth + chartWidth}px`;
  stage.innerHTML = "";

  const axisRow = document.createElement("section");
  axisRow.className = "axis-row";
  axisRow.innerHTML = `
    <div class="axis-sidebar">Historical span</div>
    <div class="axis-track"></div>
  `;

  const axisTrack = axisRow.querySelector(".axis-track");
  axisTicks.forEach((tickYear) => {
    const offset = ((tickYear - chartMin) / yearSpan) * chartWidth;
    const tick = document.createElement("div");
    tick.className = "axis-tick";
    tick.style.left = `${offset}px`;

    const label = document.createElement("div");
    label.className = "axis-label";
    label.style.left = `${offset}px`;
    label.textContent = formatTick(tickYear);

    axisTrack.append(tick, label);
  });

  stage.appendChild(axisRow);

  groupOrder.forEach((group) => {
    const groupEvents = events.filter((event) => event.group === group);
    const subrowCount = Math.max(...groupEvents.map((event) => event.subrow), 0) + 1;
    const rowHeight = rowTopPadding + rowBottomPadding + subrowCount * barHeight + (subrowCount - 1) * subrowGap;

    const row = document.createElement("section");
    row.className = "group-row";
    row.style.minHeight = `${rowHeight}px`;

    const sidebar = document.createElement("div");
    sidebar.className = "group-sidebar";
    sidebar.innerHTML = `
      <h3 class="group-name">${group}</h3>
      <p class="group-note">${groupNotes[group]}</p>
    `;

    const track = document.createElement("div");
    track.className = "group-track";
    track.style.height = `${rowHeight}px`;

    axisTicks.forEach((tickYear) => {
      const offset = ((tickYear - chartMin) / yearSpan) * chartWidth;
      const gridline = document.createElement("div");
      gridline.className = "track-gridline";
      gridline.style.left = `${offset}px`;
      track.appendChild(gridline);
    });

    groupEvents.forEach((event) => {
      const startPx = ((event.start - chartMin) / yearSpan) * chartWidth;
      const endPx = ((Math.max(event.end, event.start + 1) - chartMin) / yearSpan) * chartWidth;
      const widthPx = Math.max(endPx - startPx, 28);
      const topPx = rowTopPadding + event.subrow * laneStride;
      const image = svgDataUri(event);
      const bar = document.createElement("button");

      bar.className = "event-bar";
      bar.style.left = `${startPx}px`;
      bar.style.top = `${topPx}px`;
      bar.style.width = `${widthPx}px`;
      bar.style.background = `linear-gradient(135deg, ${event.palette[0]}, ${event.palette[1]})`;
      bar.type = "button";
      bar.setAttribute("aria-expanded", "false");
      bar.setAttribute("aria-label", `${event.title} (${event.label})`);

      if (widthPx >= 150) {
        bar.classList.add("show-title");
      }

      if (widthPx >= 240) {
        bar.classList.add("show-date");
      }

      bar.innerHTML = `
        <span class="bar-text">
          <span class="bar-title">${event.title}</span>
          <span class="bar-date">${event.label}</span>
        </span>
        <div class="detail-card" aria-hidden="true">
          <div class="detail-image-wrap">
            <img class="detail-thumb" src="${image}" alt="${escapeHtml(event.title)} illustration" />
            <img class="detail-large" src="${image}" alt="" aria-hidden="true" />
          </div>
          <div class="detail-meta">
            <h4 class="detail-title">${event.title}</h4>
            <span class="detail-date" style="background:${event.palette[0]}">${event.label}</span>
            <p class="detail-desc">${event.description}</p>
          </div>
        </div>
      `;

      bar.addEventListener("click", (clickEvent) => {
        clickEvent.stopPropagation();
        const open = !bar.classList.contains("is-open");
        bar.classList.toggle("is-open", open);
        bar.setAttribute("aria-expanded", String(open));
      });

      const detailCard = bar.querySelector(".detail-card");
      detailCard.addEventListener("click", (clickEvent) => {
        clickEvent.stopPropagation();
        bar.classList.remove("is-open");
        bar.setAttribute("aria-expanded", "false");
      });

      track.appendChild(bar);
    });

    row.append(sidebar, track);
    stage.appendChild(row);
  });

  const footerNote = document.createElement("p");
  footerNote.className = "footer-note";
  footerNote.textContent = "Dates remain representative scholarly anchors or ranges. Longer bars indicate periods or composition ranges, not precise day-level durations.";
  stage.appendChild(footerNote);

  stage.onclick = () => {
    stage.querySelectorAll(".event-bar.is-open").forEach((bar) => {
      bar.classList.remove("is-open");
      bar.setAttribute("aria-expanded", "false");
    });
  };
}

buildGantt();
window.addEventListener("resize", buildGantt);
