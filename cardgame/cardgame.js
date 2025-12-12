"use strict";

// ==============================
// DEFINIÇÃO DE CARTAS E PROJETOS
// ==============================

const RESOURCES = [
  { id: "camera", label: "Câmera" },
  { id: "microfone", label: "Microfone" },
  { id: "iluminacao", label: "Iluminação" },
  { id: "equipamento", label: "Equipamento" },
  { id: "tecnico_som", label: "Técnico de som" },
  { id: "grafistas", label: "Grafistas" },
  { id: "producao", label: "Produção" },
  { id: "guiao", label: "Guião" },
  { id: "fones", label: "Fones" },
  { id: "guionistas", label: "Guionistas" },
  { id: "footage", label: "Footage" },

  // Recursos usados nos projetos
  { id: "designer_grafico", label: "Designer Gráfico" },
  { id: "software_design", label: "Software de Design" },
  { id: "material_grafico", label: "Material Gráfico" },
  { id: "copywriter", label: "Copywriter" },
  { id: "camera_profissional", label: "Câmera Profissional" },
  { id: "videografo", label: "Videógrafo" },
  { id: "software_edicao", label: "Software de Edição" },
  { id: "fotografo", label: "Fotógrafo" },
  { id: "edicao", label: "Edição" },
  { id: "drone", label: "Drone" },
  { id: "designer_interiores", label: "Designer de interiores" }
];

// Ações / cartas de sorte
const ACTIONS = [
  {
    id: "plus1",
    name: "+1 Carta",
    description: "Compra 1 carta do baralho.",
    copies: 6
  },
  {
    id: "plus2",
    name: "+2 Cartas",
    description: "Compra 2 cartas do baralho.",
    copies: 4
  },
  {
    id: "plus3",
    name: "+3 Cartas",
    description: "Compra 3 cartas do baralho.",
    copies: 2
  },
  {
    id: "roubo",
    name: "Roubo Criativo",
    description: "Rouba 1 carta aleatória da mão de outro jogador.",
    copies: 3
  },
  {
    id: "roubo2",
    name: "Roubo Duplo",
    description: "Rouba 2 cartas aleatórias da mão de outro jogador.",
    copies: 2
  },
  {
    id: "bloqueio",
    name: "Bloqueio",
    description: "Cancela uma carta usada contra ti (automático enquanto tiveres esta carta na mão).",
    copies: 3
  },
  {
    id: "reciclagem",
    name: "Reciclagem",
    description: "Escolhe 1 carta de recurso da pilha de descarte e coloca-a na tua mão.",
    copies: 2
  },
  {
    id: "brainstorm",
    name: "Brainstorm",
    description: "Vê as 3 cartas do topo do baralho e escolhe 1 para a tua mão.",
    copies: 2
  },
  {
    id: "troca_projetos",
    name: "Troca de Projetos",
    description: "Troca o teu projeto com o de outro jogador.",
    copies: 2
  },
  {
    id: "gambiarra",
    name: "Gambiarra",
    description: "Só pode ser usada quando te faltar exatamente 1 recurso para concluir o projeto.",
    copies: 2
  },
  {
    id: "pausa",
    name: "Pausa Técnica",
    description: "Escolhe um jogador  ele não pode jogar cartas no próximo turno (mas pode comprar carta).",
    copies: 2
  },
  // Estas três agora SÃO roubo (não descarte):
  {
    id: "discard1",
    name: "Retirar 1 Carta",
    description: "Rouba 1 carta aleatória da mão de outro jogador.",
    copies: 3
  },
  {
    id: "discard2",
    name: "Retirar 2 Cartas",
    description: "Rouba 2 cartas aleatórias da mão de outro jogador.",
    copies: 2
  },
  {
    id: "discard3",
    name: "Retirar 3 Cartas",
    description: "Rouba 3 cartas aleatórias da mão de outro jogador.",
    copies: 1
  }
  //   Cliente cancelou o projeto FOI REMOVIDA
];

// Pontos dos projetos
function projectPoints(size, resourceCount) {
  if (size === "pequeno") {
    return Math.min(4, Math.max(2, resourceCount)); // 24
  }
  if (size === "medio") {
    return Math.min(7, Math.max(5, resourceCount + 1)); // 57
  }
  if (size === "grande") {
    return Math.min(10, Math.max(8, resourceCount + 3)); // 810
  }
  return resourceCount;
}

// Projetos únicos
const PROJECTS = [
  // Pequenos
  {
    name: "Cartaz publicitário",
    size: "pequeno",
    resources: ["designer_grafico", "software_design", "material_grafico"]
  },
  {
    name: "Post Social Media",
    size: "pequeno",
    resources: ["designer_grafico", "copywriter", "material_grafico"]
  },
  {
    name: "Reel Instagram",
    size: "pequeno",
    resources: ["camera_profissional", "videografo", "software_edicao"]
  },
  {
    name: "Criar um Logotipo",
    size: "pequeno",
    resources: ["designer_grafico", "software_design"]
  },
  {
    name: "Convite Digital",
    size: "pequeno",
    resources: ["designer_grafico", "material_grafico"]
  },
  {
    name: "Banner Web",
    size: "pequeno",
    resources: ["designer_grafico", "software_design", "copywriter"]
  },
  {
    name: "Flyer promocional",
    size: "pequeno",
    resources: ["designer_grafico", "material_grafico", "copywriter"]
  },
  {
    name: "Meme Viral",
    size: "pequeno",
    resources: ["copywriter", "material_grafico"]
  },
  {
    name: "Sessão Fotográfica (Pequeno)",
    size: "pequeno",
    resources: ["camera", "fotografo", "iluminacao"]
  },

  // Médios
  {
    name: "Sessão Fotográfica (Média)",
    size: "medio",
    resources: ["camera", "fotografo", "iluminacao", "edicao"]
  },
  {
    name: "Making Of",
    size: "medio",
    resources: ["camera", "videografo", "fotografo", "microfone"]
  },
  {
    name: "Entrevista",
    size: "medio",
    resources: ["camera", "microfone", "videografo", "software_edicao", "iluminacao"]
  },

  // Grandes
  {
    name: "Podcast",
    size: "grande",
    resources: ["microfone", "camera", "iluminacao", "tecnico_som", "fones"]
  },
  {
    name: "Documentário",
    size: "grande",
    resources: [
      "camera",
      "videografo",
      "microfone",
      "iluminacao",
      "copywriter",
      "software_edicao",
      "designer_grafico",
      "software_design"
    ]
  },
  {
    name: "Campanha Publicitária",
    size: "grande",
    resources: [
      "camera",
      "videografo",
      "iluminacao",
      "copywriter",
      "producao",
      "designer_interiores",
      "tecnico_som",
      "microfone",
      "software_edicao"
    ]
  },
  {
    name: "Festival",
    size: "grande",
    resources: [
      "camera",
      "fotografo",
      "videografo",
      "iluminacao",
      "drone",
      "copywriter",
      "microfone",
      "software_edicao"
    ]
  }
].map(p => ({
  ...p,
  points: projectPoints(p.size, p.resources.length)
}));

// ==================
// ESTADO DO JOGO
// ==================

const state = {
  players: [],
  currentPlayerIndex: 0,
  deck: [],
  discard: [],
  resourceDiscard: [],
  projectDeck: [],
  gameStarted: false,
  gambiarraActiveForPlayer: null,
  winner: null,
  hasDrawnThisTurn: false,

  currentProjectOptions: null,
  currentProjectOptionsPlayerIndex: null
};

// ==============
// UTILITÁRIOS
// ==============

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getResourceLabel(id) {
  const r = RESOURCES.find(r => r.id === id);
  return r ? r.label : id;
}

function getActionName(id) {
  const a = ACTIONS.find(a => a.id === id);
  return a ? a.name : id;
}

function logEvent(msg) {
  const logEl = document.getElementById("log");
  if (!logEl) return;
  const div = document.createElement("div");
  div.className = "log-entry";
  const span = document.createElement("span");
  span.className = "tag";
  span.textContent = "LOG";
  div.appendChild(span);
  div.appendChild(document.createTextNode(" " + msg));
  logEl.prepend(div);
}

// cancelar projeto (já não há carta que faça isto automaticamente, mas deixamos util se for usado noutro contexto)
function cancelProjectForPlayer(p) {
  if (!p.project) return null;
  const proj = p.project;
  const assigned = proj.assignedResources || [];
  assigned.forEach(card => {
    state.discard.push(card);
    if (card.kind === "recurso") {
      state.resourceDiscard.push(card);
    }
  });
  p.project = null;
  return proj.name;
}

// ==================
// INICIALIZAÇÃO DOM
// ==================

const setupPanel = document.getElementById("setupPanel");
const tablePanel = document.getElementById("tablePanel");
const playersSetup = document.getElementById("playersSetup");
const numPlayersSelect = document.getElementById("numPlayers");
const generatePlayersBtn = document.getElementById("generatePlayersBtn");
const startGameBtn = document.getElementById("startGameBtn");

const currentPlayerInfo = document.getElementById("currentPlayerInfo");
const handContainer = document.getElementById("handContainer");
const projectContainer = document.getElementById("projectContainer");
const playersOverview = document.getElementById("playersOverview");
const allPlayersPanel = document.getElementById("allPlayersPanel");
const deckInfo = document.getElementById("deckInfo");
const projectDeckInfo = document.getElementById("projectDeckInfo");
const drawCardBtn = document.getElementById("drawCardBtn");
const tryCompleteBtn = document.getElementById("tryCompleteBtn");
const tradeThreeBtn = document.getElementById("tradeThreeBtn");
const nextTurnBtn = document.getElementById("nextTurnBtn");
const winnerBanner = document.getElementById("winnerBanner");

// gerar inputs de jogadores
if (generatePlayersBtn) {
  generatePlayersBtn.addEventListener("click", () => {
    const n = parseInt(numPlayersSelect.value, 10) || 2;
    playersSetup.innerHTML = "";
    for (let i = 0; i < n; i++) {
      const wrapper = document.createElement("div");
      const label = document.createElement("label");
      label.textContent = `Jogador ${i + 1}`;
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = `Nome do jogador ${i + 1}`;
      input.value = `Jogador ${i + 1}`;
      input.dataset.playerIndex = String(i);
      wrapper.appendChild(label);
      wrapper.appendChild(input);
      playersSetup.appendChild(wrapper);
    }
  });

  // gerar campos iniciais por defeito
  generatePlayersBtn.click();
}

// botão iniciar jogo
if (startGameBtn) {
  startGameBtn.addEventListener("click", () => {
    const nameInputs = playersSetup.querySelectorAll("input[type='text']");
    const players = [];
    nameInputs.forEach((input, idx) => {
      const name = (input.value || "").trim() || `Jogador ${idx + 1}`;
      players.push({
        name,
        hand: [],
        project: null,
        points: 0,
        skippedTurns: 0
      });
    });

    if (players.length < 2) {
      alert("Precisas de pelo menos 2 jogadores.");
      return;
    }

    state.players = players;
    state.currentPlayerIndex = 0;
    state.gameStarted = true;
    state.winner = null;
    state.gambiarraActiveForPlayer = null;
    state.deck = [];
    state.discard = [];
    state.resourceDiscard = [];
    state.projectDeck = [];
    state.hasDrawnThisTurn = false;
    state.currentProjectOptions = null;
    state.currentProjectOptionsPlayerIndex = null;

    // Construir baralho principal
    const deck = [];
    RESOURCES.forEach(res => {
      for (let i = 0; i < 4; i++) {
        deck.push({
          kind: "recurso",
          resourceId: res.id
        });
      }
    });
    ACTIONS.forEach(action => {
      const copies = action.copies || 2;
      for (let i = 0; i < copies; i++) {
        deck.push({
          kind: "acao",
          actionId: action.id
        });
      }
    });

    state.deck = shuffle(deck);

    // Baralho de projetos (1 de cada)
    state.projectDeck = shuffle(PROJECTS.map(p => ({ ...p })));

    // Dar 5 cartas iniciais a cada jogador
    state.players.forEach((player, playerIndex) => {
      player.hand = [];
      player.points = 0;
      player.skippedTurns = 0;
      player.project = null;
      for (let i = 0; i < 5; i++) {
        const c = drawFromDeck();
        if (c) {
          giveCardToPlayer(playerIndex, c);
        }
      }
    });

    logEvent("Novo jogo iniciado.");
    if (setupPanel) setupPanel.classList.add("hidden");
    if (tablePanel) tablePanel.classList.remove("hidden");

    // começa o turno do primeiro jogador com 1 carta automática
    startTurnForCurrentPlayer();
  });
}

// =========================
// FUNÇÕES DE BARALHO / DRAW
// =========================

function drawFromDeck() {
  if (state.deck.length === 0) {
    if (state.discard.length > 0) {
      logEvent("O baralho acabou. A pilha de descarte foi baralhada de novo.");
      state.deck = shuffle(state.discard);
      state.discard = [];
      state.resourceDiscard = [];
    } else {
      return null;
    }
  }
  const card = state.deck.shift();
  return card || null;
}

// entregar carta a um jogador (não há mais carta de cancel_project)
function giveCardToPlayer(playerIndex, card) {
  if (!card) return;
  const p = state.players[playerIndex];
  p.hand.push(card);
}

// ==================
// UI E RENDERIZAÇÃO
// ==================

function updateAllUI() {
  if (!state.gameStarted) return;
  updateDeckInfo();
  renderPlayersOverview();
  renderCurrentPlayer();
  renderHand();
  renderProject();
  renderAllPlayersPanel();
  renderWinner();
}

function updateDeckInfo() {
  if (!deckInfo || !projectDeckInfo) return;
  deckInfo.textContent =
    "Baralho principal: " +
    state.deck.length +
    " cartas (Descarte: " +
    state.discard.length +
    ")";
  projectDeckInfo.textContent =
    "Baralho de projetos: " + state.projectDeck.length + " cartas";
}

function renderPlayersOverview() {
  if (!playersOverview) return;
  playersOverview.innerHTML = "";
  state.players.forEach((p, idx) => {
    const div = document.createElement("div");
    div.className =
      "player-chip" + (idx === state.currentPlayerIndex ? " current" : "");
    const skipInfo =
      p.skippedTurns > 0 ? " | ø pausa (" + p.skippedTurns + ")" : "";
    div.innerHTML =
      "<strong>" +
      p.name +
      "</strong> " +
      '<span class="points">' +
      p.points +
      " pts</span>" +
      skipInfo;
    playersOverview.appendChild(div);
  });
}

function renderCurrentPlayer() {
  if (!currentPlayerInfo) return;
  const p = state.players[state.currentPlayerIndex];
  const skipped = p.skippedTurns > 0;

  currentPlayerInfo.innerHTML =
    '<div class="card-header">' +
    "<div>" +
    '<div style="font-size:0.8rem; color:#9ca3af;">Jogador atual</div>' +
    '<div style="font-size:1rem; font-weight:600;">' +
    p.name +
    "</div>" +
    "</div>" +
    "<div>" +
    '<div style="font-size:0.75rem; color:#9ca3af;">Pontos</div>' +
    '<div style="font-size:1.1rem; font-weight:700; color:#facc15;">' +
    p.points +
    "</div>" +
    "</div>" +
    "</div>" +
    '<div class="small-text" style="margin-top:4px;">' +
    "Cartas na mão: <strong>" +
    p.hand.length +
    "</strong>" +
    (skipped
      ? "<br>ø Este turno está sob <strong>Pausa Técnica</strong>: só podes comprar carta."
      : "") +
    "</div>";

  const canPlay = !skipped && !state.winner;

  if (drawCardBtn) {
    drawCardBtn.disabled = !!state.winner || state.hasDrawnThisTurn;
  }
  if (tryCompleteBtn) {
    tryCompleteBtn.disabled = !canPlay;
  }

  // pode trocar 3 iguais?
  const counts = {};
  p.hand
    .filter(c => c.kind === "recurso")
    .forEach(c => {
      counts[c.resourceId] = (counts[c.resourceId] || 0) + 1;
    });
  const canTradeThree = Object.values(counts).some(n => n >= 3);
  if (tradeThreeBtn) {
    tradeThreeBtn.disabled = !!state.winner || !canTradeThree || skipped;
  }
}

// ordenação alfabética de grupos (recurso/ação)
function sortGroupedCardsForDisplay(groups) {
  return groups.sort((a, b) => {
    const ca = a.card;
    const cb = b.card;
    let nameA, nameB;
    if (ca.kind === "recurso") {
      nameA = getResourceLabel(ca.resourceId);
    } else {
      nameA = getActionName(ca.actionId);
    }
    if (cb.kind === "recurso") {
      nameB = getResourceLabel(cb.resourceId);
    } else {
      nameB = getActionName(cb.actionId);
    }
    return nameA.localeCompare(nameB, "pt");
  });
}

function renderHand() {
  if (!handContainer) return;
  const p = state.players[state.currentPlayerIndex];
  const proj = p.project;
  handContainer.innerHTML = "";

  // Agrupar cartas por tipo (recurso / ação)
  const groupsArray = [];
  p.hand.forEach((card, idx) => {
    const key = card.kind === "recurso" ? "R:" + card.resourceId : "A:" + card.actionId;
    let group = groupsArray.find(g => g.key === key);
    if (!group) {
      group = { key, card, indices: [], count: 0 };
      groupsArray.push(group);
    }
    group.indices.push(idx);
    group.count += 1;
  });

  // ordenar alfabeticamente pelo nome da carta
  const sortedGroups = sortGroupedCardsForDisplay(groupsArray);

  sortedGroups.forEach(group => {
    const card = group.card;
    const div = document.createElement("div");
    div.className = "card";

    if (card.kind === "recurso") {
      const label = getResourceLabel(card.resourceId);

      let canAllocate = false;
      if (proj) {
        const requiredCount = proj.resources.filter(r => r === card.resourceId).length;
        const assigned = (proj.assignedResources || []).filter(
          r => r.resourceId === card.resourceId
        ).length;
        canAllocate = requiredCount > assigned;
      }

      let innerHtml =
        '<div class="card-header">' +
        '<div style="font-weight:600;">' +
        label +
        "</div>" +
        '<span class="card-type type-recurso">Recurso</span>' +
        "</div>" +
        '<div class="small-text">' +
        "Usa esta carta para satisfazer requisitos de projetos." +
        "</div>";

      if (group.count > 1) {
        innerHtml += '<div class="card-count">x' + group.count + "</div>";
      }

      div.innerHTML = innerHtml;

      if (canAllocate) {
        const btn = document.createElement("button");
        btn.textContent = "Alocar ao projeto";
        btn.classList.add("secondary");
        btn.style.marginTop = "4px";
        btn.addEventListener("click", () => {
          const indexToUse = group.indices[0];
          allocateResourceCardToProject(indexToUse);
        });
        div.appendChild(btn);
      }
    } else if (card.kind === "acao") {
      const action = ACTIONS.find(a => a.id === card.actionId);
      div.classList.add("clickable");

      let innerHtml =
        '<div class="card-header">' +
        '<div style="font-weight:600;">' +
        (action ? action.name : card.actionId) +
        "</div>" +
        '<span class="card-type type-acao">Ação</span>' +
        "</div>" +
        '<div class="small-text">' +
        (action ? action.description : "") +
        "</div>";

      if (group.count > 1) {
        innerHtml += '<div class="card-count">x' + group.count + "</div>";
      }

      div.innerHTML = innerHtml;

      div.addEventListener("click", () => {
        const indexToUse = group.indices[0];
        playActionCard(indexToUse);
      });
    }

    handContainer.appendChild(div);
  });
}

function renderProject() {
  if (!projectContainer) return;
  projectContainer.innerHTML = "";
  const p = state.players[state.currentPlayerIndex];

  if (p.project) {
    const proj = p.project;
    const div = document.createElement("div");
    div.className = "project-card";

    let sizeLabel;
    if (proj.size === "pequeno") sizeLabel = "Pequeno";
    else if (proj.size === "medio") sizeLabel = "Médio";
    else sizeLabel = "Grande";

    const assigned = proj.assignedResources || [];
    const assignedCountById = {};
    assigned.forEach(card => {
      const id = card.resourceId;
      assignedCountById[id] = (assignedCountById[id] || 0) + 1;
    });

    const usedSoFar = {};
    const resourcesHtml = proj.resources
      .map(resId => {
        const used = usedSoFar[resId] || 0;
        const totalAssigned = assignedCountById[resId] || 0;
        const isCovered = used < totalAssigned;
        usedSoFar[resId] = used + 1;
        const cls = isCovered ? ' class="allocated"' : "";
        return "<li" + cls + ">" + getResourceLabel(resId) + "</li>";
      })
      .join("");

    div.innerHTML =
      '<div class="card-header">' +
      "<div>" +
      '<div style="font-size:0.8rem; color:#9ca3af;">Projeto</div>' +
      '<div style="font-size:1rem; font-weight:600;">' +
      proj.name +
      "</div>" +
      "</div>" +
      '<div style="text-align:right;">' +
      '<div class="project-pill">' +
      sizeLabel +
      "</div>" +
      '<div class="project-points">' +
      proj.points +
      " pts</div>" +
      "</div>" +
      "</div>" +
      '<div style="margin-top:4px;">' +
      '<div style="font-size:0.8rem; color:#9ca3af;">Recursos necessários:</div>' +
      '<ul class="resource-list">' +
      resourcesHtml +
      "</ul>" +
      "</div>";

    projectContainer.appendChild(div);
    return;
  }

  if (
    state.currentProjectOptions &&
    state.currentProjectOptionsPlayerIndex === state.currentPlayerIndex
  ) {
    const title = document.createElement("div");
    title.className = "project-choice-title";
    title.textContent = "Escolhe um dos projetos disponíveis (3 opções aleatórias):";
    projectContainer.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "project-choice-container";

    state.currentProjectOptions.forEach((proj, idx) => {
      let sizeLabel;
      if (proj.size === "pequeno") sizeLabel = "Pequeno";
      else if (proj.size === "medio") sizeLabel = "Médio";
      else sizeLabel = "Grande";

      const resourcesHtml = proj.resources
        .map(r => "<li>" + getResourceLabel(r) + "</li>")
        .join("");

      const card = document.createElement("div");
      card.className = "project-choice-card";
      card.innerHTML =
        '<div class="card-header">' +
        '<div style="font-weight:600;">' +
        proj.name +
        "</div>" +
        '<div style="text-align:right;">' +
        '<div class="project-pill">' +
        sizeLabel +
        "</div>" +
        '<div class="project-points">' +
        proj.points +
        " pts</div>" +
        "</div>" +
        "</div>" +
        '<div style="font-size:0.75rem; color:#9ca3af;">Recursos necessários:</div>' +
        '<ul class="resource-list">' +
        resourcesHtml +
        "</ul>";

      const btn = document.createElement("button");
      btn.textContent = "Escolher este projeto";
      btn.addEventListener("click", () => selectProjectOption(idx));
      card.appendChild(btn);

      grid.appendChild(card);
    });

    projectContainer.appendChild(grid);
    return;
  }

  const info = document.createElement("div");
  info.className = "small-text";
  info.innerHTML =
    "Não tens projeto em andamento.<br>" +
    '<button class="secondary" id="takeNewProjectBtn">• Escolher projeto (3 opções)</button>';
  projectContainer.appendChild(info);

  const btn = info.querySelector("#takeNewProjectBtn");
  btn.addEventListener("click", () => {
    startProjectChoiceForCurrentPlayer();
  });
}

function renderAllPlayersPanel() {
  if (!allPlayersPanel) return;
  allPlayersPanel.innerHTML = "";
  state.players.forEach((player, idx) => {
    const div = document.createElement("div");
    div.className = "player-board" + (idx === state.currentPlayerIndex ? " current" : "");

    const header = document.createElement("div");
    header.className = "player-board-header";
    header.innerHTML =
      '<div class="name">' +
      player.name +
      "</div>" +
      '<div class="pts">' +
      player.points +
      " pts</div>";
    div.appendChild(header);

    const projTitle = document.createElement("div");
    projTitle.className = "player-board-section-title";
    projTitle.textContent = "Projeto";
    div.appendChild(projTitle);

    if (player.project) {
      const proj = player.project;
      let sizeLabel;
      if (proj.size === "pequeno") sizeLabel = "Pequeno";
      else if (proj.size === "medio") sizeLabel = "Médio";
      else sizeLabel = "Grande";

      const projLine = document.createElement("div");
      projLine.className = "small-text";
      projLine.innerHTML =
        "<strong>" +
        proj.name +
        "</strong> (" +
        sizeLabel +
        ", " +
        proj.points +
        " pts)";
      div.appendChild(projLine);

      const assigned = proj.assignedResources || [];
      const assignedTitle = document.createElement("div");
      assignedTitle.className = "small-text";
      assignedTitle.textContent = "Recursos alocados:";
      div.appendChild(assignedTitle);

      const tags = document.createElement("div");
      tags.className = "player-board-tags";

      if (assigned.length === 0) {
        const chip = document.createElement("span");
        chip.className = "tag-chip";
        chip.textContent = "Nenhum";
        tags.appendChild(chip);
      } else {
        // agrupamento de recursos alocados
        const groupMap = new Map();
        assigned.forEach(card => {
          const id = card.resourceId;
          if (!groupMap.has(id)) {
            groupMap.set(id, { id, count: 1 });
          } else {
            groupMap.get(id).count += 1;
          }
        });
        // ordenar alfabeticamente por label
        const groups = Array.from(groupMap.values()).sort((a, b) =>
          getResourceLabel(a.id).localeCompare(getResourceLabel(b.id), "pt")
        );
        groups.forEach(g => {
          const chip = document.createElement("span");
          chip.className = "tag-chip resource";
          chip.textContent =
            getResourceLabel(g.id) + (g.count > 1 ? " x" + g.count : "");
          tags.appendChild(chip);
        });
      }

      div.appendChild(tags);
    } else {
      const projLine = document.createElement("div");
      projLine.className = "small-text";
      projLine.textContent = "Sem projeto em andamento.";
      div.appendChild(projLine);
    }

    const handTitle = document.createElement("div");
    handTitle.className = "player-board-section-title";
    handTitle.textContent = "Mão";
    div.appendChild(handTitle);

    const handTags = document.createElement("div");
    handTags.className = "player-board-tags";

    if (player.hand.length === 0) {
      const chip = document.createElement("span");
      chip.className = "tag-chip";
      chip.textContent = "Sem cartas";
      handTags.appendChild(chip);
    } else {
      const groupMap = new Map();
      player.hand.forEach(card => {
        let key;
        if (card.kind === "recurso") {
          key = "R:" + card.resourceId;
        } else {
          key = "A:" + card.actionId;
        }
        if (!groupMap.has(key)) {
          groupMap.set(key, { card, count: 1 });
        } else {
          groupMap.get(key).count += 1;
        }
      });

      const groups = Array.from(groupMap.values()).sort((a, b) => {
        const ca = a.card;
        const cb = b.card;
        let nameA, nameB;
        if (ca.kind === "recurso") {
          nameA = getResourceLabel(ca.resourceId);
        } else {
          nameA = getActionName(ca.actionId);
        }
        if (cb.kind === "recurso") {
          nameB = getResourceLabel(cb.resourceId);
        } else {
          nameB = getActionName(cb.actionId);
        }
        return nameA.localeCompare(nameB, "pt");
      });

      groups.forEach(group => {
        const chip = document.createElement("span");
        chip.className =
          "tag-chip " +
          (group.card.kind === "recurso" ? "resource" : "action");
        if (group.card.kind === "recurso") {
          chip.textContent =
            getResourceLabel(group.card.resourceId) +
            (group.count > 1 ? " x" + group.count : "");
        } else {
          const name = getActionName(group.card.actionId);
          chip.textContent = name + (group.count > 1 ? " x" + group.count : "");
        }
        handTags.appendChild(chip);
      });
    }

    div.appendChild(handTags);
    allPlayersPanel.appendChild(div);
  });
}

function renderWinner() {
  if (!winnerBanner) return;
  if (!state.winner) {
    winnerBanner.classList.add("hidden");
    winnerBanner.textContent = "";
    if (nextTurnBtn) nextTurnBtn.disabled = false;
    return;
  }
  winnerBanner.classList.remove("hidden");
  winnerBanner.textContent =
    "<Æ " +
    state.winner.name +
    " venceu o jogo com " +
    state.winner.points +
    " pontos!";
  if (drawCardBtn) drawCardBtn.disabled = true;
  if (tryCompleteBtn) tryCompleteBtn.disabled = true;
  if (tradeThreeBtn) tradeThreeBtn.disabled = true;
  if (nextTurnBtn) nextTurnBtn.disabled = true;
}

// =====================
// ESCOLHA DE PROJETOS
// =====================

function startProjectChoiceForCurrentPlayer() {
  if (state.projectDeck.length === 0) {
    alert("Não há mais projetos no baralho!");
    return;
  }

  const options = [];
  for (let i = 0; i < 3; i++) {
    if (state.projectDeck.length === 0) break;
    options.push(state.projectDeck.shift());
  }

  state.currentProjectOptions = options;
  state.currentProjectOptionsPlayerIndex = state.currentPlayerIndex;
  updateAllUI();
}

function selectProjectOption(index) {
  if (
    !state.currentProjectOptions ||
    state.currentProjectOptionsPlayerIndex !== state.currentPlayerIndex
  ) {
    return;
  }

  const p = state.players[state.currentPlayerIndex];
  const chosen = state.currentProjectOptions[index];
  const others = state.currentProjectOptions.filter((_, i) => i !== index);

  p.project = {
    ...chosen,
    assignedResources: []
  };

  state.projectDeck.push(...others);

  logEvent(p.name + ' escolheu o projeto "' + chosen.name + '".');

  state.currentProjectOptions = null;
  state.currentProjectOptionsPlayerIndex = null;
  updateAllUI();
}

// =====================
// AÇÕES DO JOGADOR
// =====================

// compra extra manual (1x por turno)
if (drawCardBtn) {
  drawCardBtn.addEventListener("click", () => {
    if (state.winner) return;
    const p = state.players[state.currentPlayerIndex];

    if (state.hasDrawnThisTurn) {
      alert("Já compraste a carta extra deste turno.");
      return;
    }

    const card = drawFromDeck();
    if (!card) {
      alert("Não há cartas para comprar.");
      return;
    }
    giveCardToPlayer(state.currentPlayerIndex, card);
    state.hasDrawnThisTurn = true;

    let label;
    if (card.kind === "recurso") {
      label = "Recurso: " + getResourceLabel(card.resourceId);
    } else {
      label = "Ação: " + getActionName(card.actionId);
    }
    logEvent(p.name + " comprou uma carta extra (" + label + ").");
    updateAllUI();
  });
}

if (tryCompleteBtn) {
  tryCompleteBtn.addEventListener("click", () => {
    if (state.winner) return;
    const p = state.players[state.currentPlayerIndex];
    if (!p.project) {
      alert("Não tens projeto em andamento.");
      return;
    }
    attemptCompleteProject();
  });
}

if (tradeThreeBtn) {
  tradeThreeBtn.addEventListener("click", () => {
    if (state.winner) return;
    tradeThreeEqual();
  });
}

if (nextTurnBtn) {
  nextTurnBtn.addEventListener("click", () => {
    if (state.winner) return;
    advanceTurn();
  });
}

// =====================
// INÍCIO E FIM DE TURNO
// =====================

// início do turno do jogador atual:
// - reseta o direito à carta extra
// - compra 1 carta automática do baralho
function startTurnForCurrentPlayer() {
  state.hasDrawnThisTurn = false;

  if (!state.gameStarted || state.winner) {
    updateAllUI();
    return;
  }

  const p = state.players[state.currentPlayerIndex];

  const card = drawFromDeck();
  if (card) {
    giveCardToPlayer(state.currentPlayerIndex, card);

    let label;
    if (card.kind === "recurso") {
      label = "Recurso: " + getResourceLabel(card.resourceId);
    } else {
      label = "Ação: " + getActionName(card.actionId);
    }

    logEvent(p.name + " recebeu 1 carta no início do turno (" + label + ").");
  } else {
    logEvent(
      p.name +
        " não pôde receber carta automática no início do turno (baralho vazio)."
    );
  }

  updateAllUI();
}

function advanceTurn() {
  const p = state.players[state.currentPlayerIndex];
  if (p.skippedTurns > 0) {
    p.skippedTurns -= 1;
  }

  state.currentPlayerIndex =
    (state.currentPlayerIndex + 1) % state.players.length;
  state.gambiarraActiveForPlayer = null;

  // novo jogador começa o turno e recebe 1 carta automática
  startTurnForCurrentPlayer();
}

// =====================
// ALOCAR RECURSOS
// =====================

function allocateResourceCardToProject(cardIndex) {
  const p = state.players[state.currentPlayerIndex];
  const proj = p.project;
  if (!proj) return;

  const card = p.hand[cardIndex];
  if (!card || card.kind !== "recurso") return;

  const requiredCount = proj.resources.filter(r => r === card.resourceId).length;
  const assigned = (proj.assignedResources || []).filter(
    r => r.resourceId === card.resourceId
  ).length;

  if (assigned >= requiredCount) {
    alert("Este tipo de recurso já está totalmente cumprido para o projeto.");
    return;
  }

  proj.assignedResources = proj.assignedResources || [];
  const removedList = p.hand.splice(cardIndex, 1);
  const removed = removedList[0];
  proj.assignedResources.push(removed);

  logEvent(
    p.name +
      " alocou " +
      getResourceLabel(card.resourceId) +
      ' ao projeto "' +
      proj.name +
      '".'
  );
  updateAllUI();
}

// =====================
// TROCAR 3 CARTAS IGUAIS
// =====================

function tradeThreeEqual() {
  const p = state.players[state.currentPlayerIndex];

  const counts = {};
  const indicesByRes = {};
  p.hand
    .map((c, idx) => ({ c, idx }))
    .filter(x => x.c.kind === "recurso")
    .forEach(x => {
      const id = x.c.resourceId;
      counts[id] = (counts[id] || 0) + 1;
      if (!indicesByRes[id]) indicesByRes[id] = [];
      indicesByRes[id].push(x.idx);
    });

  const candidates = Object.keys(counts).filter(resId => counts[resId] >= 3);
  if (candidates.length === 0) {
    alert("Não tens 3 cartas de recurso iguais para trocar.");
    return;
  }

  const listText = candidates
    .map(
      (resId, i) =>
        i + 1 + " - " + getResourceLabel(resId) + " (tens " + counts[resId] + ")"
    )
    .join("\n");

  const ansRes = prompt(
    "Escolhe qual recurso queres usar para a troca (3 iguais serão descartadas):\n" +
      listText
  );
  if (!ansRes) return;
  const choiceIdx = parseInt(ansRes, 10) - 1;
  if (isNaN(choiceIdx) || choiceIdx < 0 || choiceIdx >= candidates.length) {
    alert("Escolha inválida.");
    return;
  }

  const tradeResId = candidates[choiceIdx];

  const allList = RESOURCES.map(
    (r, i) => i + 1 + " - " + r.label
  ).join("\n");
  const ansGain = prompt(
    "Escolhe o recurso que queres receber em troca:\n" + allList
  );
  if (!ansGain) return;
  const gainIdx = parseInt(ansGain, 10) - 1;
  if (isNaN(gainIdx) || gainIdx < 0 || gainIdx >= RESOURCES.length) {
    alert("Escolha inválida.");
    return;
  }
  const gainResId = RESOURCES[gainIdx].id;

  const idxs = indicesByRes[tradeResId].slice(0, 3).sort((a, b) => b - a);
  idxs.forEach(i => {
    const removedList = p.hand.splice(i, 1);
    const removed = removedList[0];
    state.discard.push(removed);
    if (removed.kind === "recurso") {
      state.resourceDiscard.push(removed);
    }
  });

  p.hand.push({
    kind: "recurso",
    resourceId: gainResId
  });

  logEvent(
    p.name +
      " trocou 3x " +
      getResourceLabel(tradeResId) +
      " por 1x " +
      getResourceLabel(gainResId) +
      "."
  );
  updateAllUI();
}

// =====================
// CONCLUSÃO DE PROJETO
// =====================

function attemptCompleteProject() {
  const p = state.players[state.currentPlayerIndex];
  const proj = p.project;
  if (!proj) return;

  const remainingRequired = proj.resources.slice();

  const assigned = proj.assignedResources || [];
  assigned.forEach(card => {
    const idx = remainingRequired.indexOf(card.resourceId);
    if (idx !== -1) {
      remainingRequired.splice(idx, 1);
    }
  });

  const missing = remainingRequired;
  let canUseGambiarra = false;
  const hasGambiarraCardIndex = p.hand.findIndex(
    c => c.kind === "acao" && c.actionId === "gambiarra"
  );

  if (state.gambiarraActiveForPlayer === p.name && missing.length === 1) {
    canUseGambiarra = true;
  }

  if (missing.length === 0 || (canUseGambiarra && missing.length === 1)) {
    assigned.forEach(card => {
      state.discard.push(card);
      if (card.kind === "recurso") {
        state.resourceDiscard.push(card);
      }
    });
    proj.assignedResources = [];

    if (canUseGambiarra && hasGambiarraCardIndex >= 0) {
      const removedList = p.hand.splice(hasGambiarraCardIndex, 1);
      const gCard = removedList[0];
      state.discard.push(gCard);
      state.gambiarraActiveForPlayer = null;
    }

    p.points += proj.points;
    state.discard.push({ kind: "projeto_concluido", projectName: proj.name });

    logEvent(
      p.name +
        ' concluiu o projeto "' +
        proj.name +
        '" e ganhou ' +
        proj.points +
        " pontos."
    );

    if (p.points >= 20 && !state.winner) {
      state.winner = p;
      logEvent(p.name + " alcançou 20 pontos e venceu o jogo!");
    }

    p.project = null;
    updateAllUI();
  } else {
    alert(
      "Ainda te faltam recursos alocados para este projeto.\nFaltam: " +
        missing.map(getResourceLabel).join(", ")
    );
  }
}

// ==========================
// LÓGICA DAS CARTAS DE AÇÃO
// ==========================

function askTargetPlayer(excludeIndex) {
  const others = state.players
    .map((p, idx) => ({ player: p, idx }))
    .filter(x => x.idx !== excludeIndex);

  if (others.length === 0) {
    alert("Não há outros jogadores para escolher.");
    return null;
  }

  const promptText =
    "Escolhe o número do jogador alvo:\n" +
    others
      .map(
        x =>
          x.idx + 1 + " - " + x.player.name + " (" + x.player.points + " pts)"
      )
      .join("\n");

  const answer = prompt(promptText);
  if (!answer) return null;
  const num = parseInt(answer, 10);
  if (isNaN(num)) return null;
  const targetIdx = num - 1;
  if (targetIdx < 0 || targetIdx >= state.players.length || targetIdx === excludeIndex) {
    alert("Jogador inválido.");
    return null;
  }
  return targetIdx;
}

function targetHasBloqueio(targetIndex) {
  const target = state.players[targetIndex];
  const idxBloq = target.hand.findIndex(
    c => c.kind === "acao" && c.actionId === "bloqueio"
  );
  if (idxBloq >= 0) {
    const removedList = target.hand.splice(idxBloq, 1);
    const bloqCard = removedList[0];
    state.discard.push(bloqCard);
    logEvent(
      target.name + " usou uma carta de Bloqueio e cancelou a ação contra si."
    );
    return true;
  }
  return false;
}

function playActionCard(cardIndex) {
  const playerIndex = state.currentPlayerIndex;
  const p = state.players[playerIndex];

  if (p.skippedTurns > 0) {
    alert("Estás em Pausa Técnica neste turno. Só podes comprar carta.");
    return;
  }

  const card = p.hand[cardIndex];
  if (!card || card.kind !== "acao") return;
  if (state.winner) return;

  const action = ACTIONS.find(a => a.id === card.actionId);
  if (!action) return;

  switch (action.id) {
    case "plus1":
      logEvent(p.name + " jogou +1 Carta.");
      drawNCardsForPlayer(playerIndex, 1);
      discardActionFromHand(playerIndex, cardIndex);
      break;

    case "plus2":
      logEvent(p.name + " jogou +2 Cartas.");
      drawNCardsForPlayer(playerIndex, 2);
      discardActionFromHand(playerIndex, cardIndex);
      break;

    case "plus3":
      logEvent(p.name + " jogou +3 Cartas.");
      drawNCardsForPlayer(playerIndex, 3);
      discardActionFromHand(playerIndex, cardIndex);
      break;

    case "roubo":
      handleRouboCards(playerIndex, cardIndex, 1);
      break;

    case "roubo2":
      handleRouboCards(playerIndex, cardIndex, 2);
      break;

    case "discard1": // agora também roubo
      handleRouboCards(playerIndex, cardIndex, 1);
      break;

    case "discard2":
      handleRouboCards(playerIndex, cardIndex, 2);
      break;

    case "discard3":
      handleRouboCards(playerIndex, cardIndex, 3);
      break;

    case "bloqueio":
      alert(
        "Esta carta funciona como um escudo automático contra ações dos outros.\nMantém-na na mão até alguém te atacar."
      );
      break;

    case "reciclagem":
      handleReciclagem(playerIndex, cardIndex);
      break;

    case "brainstorm":
      handleBrainstorm(playerIndex, cardIndex);
      break;

    case "troca_projetos":
      handleTrocaProjetos(playerIndex, cardIndex);
      break;

    case "gambiarra":
      handleGambiarra(playerIndex, cardIndex);
      break;

    case "pausa":
      handlePausaTecnica(playerIndex, cardIndex);
      break;

    default:
      alert("Ação ainda não implementada.");
  }

  updateAllUI();
}

function discardActionFromHand(playerIndex, cardIndex) {
  const p = state.players[playerIndex];
  const removedList = p.hand.splice(cardIndex, 1);
  const card = removedList[0];
  state.discard.push(card);
}

function drawNCardsForPlayer(playerIndex, n) {
  const p = state.players[playerIndex];
  const drawnLabels = [];
  for (let i = 0; i < n; i++) {
    const c = drawFromDeck();
    if (c) {
      giveCardToPlayer(playerIndex, c);
      if (c.kind === "recurso") {
        drawnLabels.push("Recurso: " + getResourceLabel(c.resourceId));
      } else {
        drawnLabels.push("Ação: " + getActionName(c.actionId));
      }
    }
  }
  if (drawnLabels.length > 0) {
    logEvent(
      p.name +
        " comprou " +
        drawnLabels.length +
        " carta(s): " +
        drawnLabels.join(", ") +
        "."
    );
  }
}

// Roubo 1 / 2 / 3 cartas (de qualquer tipo) COM LOG DETALHADO
function handleRouboCards(playerIndex, cardIndex, n) {
  const targetIndex = askTargetPlayer(playerIndex);
  if (targetIndex === null) return;

  if (targetHasBloqueio(targetIndex)) {
    discardActionFromHand(playerIndex, cardIndex);
    return;
  }

  const actor = state.players[playerIndex];
  const target = state.players[targetIndex];

  if (target.hand.length === 0) {
    alert("O jogador alvo não tem cartas na mão.");
    discardActionFromHand(playerIndex, cardIndex);
    return;
  }

  let stolenCount = 0;
  const stolenLabels = [];
  for (let i = 0; i < n; i++) {
    if (target.hand.length === 0) break;
    const randIdx = Math.floor(Math.random() * target.hand.length);
    const removedList = target.hand.splice(randIdx, 1);
    const stolen = removedList[0];
    actor.hand.push(stolen);
    stolenCount++;

    if (stolen.kind === "recurso") {
      stolenLabels.push("Recurso: " + getResourceLabel(stolen.resourceId));
    } else {
      stolenLabels.push("Ação: " + getActionName(stolen.actionId));
    }
  }

  logEvent(
    actor.name +
      " roubou " +
      stolenCount +
      " carta(s) de " +
      target.name +
      ": " +
      (stolenLabels.length ? stolenLabels.join(", ") : "nenhuma") +
      "."
  );
  discardActionFromHand(playerIndex, cardIndex);
}

function handleReciclagem(playerIndex, cardIndex) {
  const p = state.players[playerIndex];
  if (state.resourceDiscard.length === 0) {
    alert("Não há recursos na pilha de descarte.");
    discardActionFromHand(playerIndex, cardIndex);
    return;
  }

  const top = state.resourceDiscard[state.resourceDiscard.length - 1];
  p.hand.push(top);
  state.resourceDiscard.pop();
  logEvent(
    p.name + " recuperou um recurso da pilha de descarte com Reciclagem (" +
      getResourceLabel(top.resourceId) +
      ")."
  );
  discardActionFromHand(playerIndex, cardIndex);
}

function handleBrainstorm(playerIndex, cardIndex) {
  const p = state.players[playerIndex];

  const seen = [];
  for (let i = 0; i < 3; i++) {
    const c = drawFromDeck();
    if (!c) continue;
    seen.push(c);
  }

  if (seen.length === 0) {
    alert("Não há cartas suficientes para Brainstorm.");
    discardActionFromHand(playerIndex, cardIndex);
    return;
  }

  const desc = seen
    .map((c, i) => {
      if (c.kind === "recurso") {
        return i + 1 + " - Recurso: " + getResourceLabel(c.resourceId);
      }
      return i + 1 + " - Ação: " + getActionName(c.actionId);
    })
    .join("\n");

  const answer = prompt(
    "Escolhe uma das cartas para ficar na mão:\n" + desc
  );
  let chosenIndex = parseInt(answer || "", 10) - 1;
  if (isNaN(chosenIndex) || chosenIndex < 0 || chosenIndex >= seen.length) {
    chosenIndex = 0;
  }

  const chosenList = seen.splice(chosenIndex, 1);
  const chosenCard = chosenList[0];
  giveCardToPlayer(playerIndex, chosenCard);

  // devolve as outras para o topo do baralho
  state.deck = seen.concat(state.deck);

  let label;
  if (chosenCard.kind === "recurso") {
    label = "Recurso: " + getResourceLabel(chosenCard.resourceId);
  } else {
    label = "Ação: " + getActionName(chosenCard.actionId);
  }

  logEvent(p.name + " usou Brainstorm e escolheu (" + label + ").");
  discardActionFromHand(playerIndex, cardIndex);
}

function handleTrocaProjetos(playerIndex, cardIndex) {
  const p = state.players[playerIndex];
  if (!p.project) {
    alert("Não tens projeto para trocar.");
    discardActionFromHand(playerIndex, cardIndex);
    return;
  }

  const targetIndex = askTargetPlayer(playerIndex);
  if (targetIndex === null) return;

  const target = state.players[targetIndex];
  if (!target.project) {
    alert("O jogador alvo não tem projeto em andamento.");
    discardActionFromHand(playerIndex, cardIndex);
    return;
  }

  if (targetHasBloqueio(targetIndex)) {
    discardActionFromHand(playerIndex, cardIndex);
    return;
  }

  const temp = p.project;
  p.project = target.project;
  target.project = temp;

  logEvent(p.name + " trocou de projeto com " + target.name + ".");
  discardActionFromHand(playerIndex, cardIndex);
}

// Gambiarra: só pode ser usada se faltar exatamente 1 recurso
function handleGambiarra(playerIndex, cardIndex) {
  const p = state.players[playerIndex];

  if (!p.project) {
    alert("Não tens projeto em andamento para usar Gambiarra.");
    return;
  }

  const proj = p.project;

  const remainingRequired = proj.resources.slice();
  const assigned = proj.assignedResources || [];

  assigned.forEach(card => {
    const idx = remainingRequired.indexOf(card.resourceId);
    if (idx !== -1) {
      remainingRequired.splice(idx, 1);
    }
  });

  const missing = remainingRequired;

  if (missing.length !== 1) {
    alert(
      "Só podes usar Gambiarra quando te faltar exatamente 1 recurso para concluir o projeto."
    );
    return;
  }

  state.gambiarraActiveForPlayer = p.name;
  logEvent(
    p.name +
      " ativou Gambiarra. Pode faltar 1 recurso na conclusão do projeto neste turno."
  );
  discardActionFromHand(playerIndex, cardIndex);
}

function handlePausaTecnica(playerIndex, cardIndex) {
  const targetIndex = askTargetPlayer(playerIndex);
  if (targetIndex === null) return;

  if (targetHasBloqueio(targetIndex)) {
    discardActionFromHand(playerIndex, cardIndex);
    return;
  }

  const target = state.players[targetIndex];
  target.skippedTurns += 1;
  logEvent(
    state.players[playerIndex].name +
      " aplicou Pausa Técnica a " +
      target.name +
      "."
  );
  discardActionFromHand(playerIndex, cardIndex);
}
