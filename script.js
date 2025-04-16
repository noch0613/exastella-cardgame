document.addEventListener("DOMContentLoaded", () => {
  // 初期データ
  const deck = [
    { name: "カードA", attack: 5 },
    { name: "カードB", attack: 3 },
    { name: "カードC", attack: 7 },
    { name: "カードD", attack: 4 },
    { name: "カードE", attack: 6 },
  ];

  const playerHand = []; // 手札
  const cpuHand = []; // CPUの手札

  const playerArea = document.getElementById("player-cards");
  const cpuArea = document.getElementById("cpu-cards");
  const logArea = document.getElementById("log-messages");
  const playButton = document.getElementById("play-card");

  let isPlayerTurn = true; // 自分のターンかどうか

  // カードを表示する
  function renderCards() {
    playerArea.innerHTML = playerHand.map(
      (card) => `<div class="card">${card.name}<br>攻撃力: ${card.attack}</div>`
    ).join("");

    cpuArea.innerHTML = cpuHand.map(
      (card) => `<div class="card">${card.name}<br>攻撃力: ${card.attack}</div>`
    ).join("");
  }

  // ログにメッセージを追加
  function addLogMessage(message) {
    const logMessage = document.createElement("p");
    logMessage.textContent = message;
    logArea.appendChild(logMessage);
    logArea.scrollTop = logArea.scrollHeight; // 自動スクロール
  }

  // 山札からカードを引く
  function drawCard(deck, hand) {
    if (deck.length === 0) {
      addLogMessage("山札が空です！");
      return null;
    }
    const card = deck.shift(); // 山札の一番上のカードを取得
    hand.push(card); // 手札に追加
    return card;
  }

  // 自分のターン開始
  function startPlayerTurn() {
    addLogMessage("あなたのターンです。");

    // 山札からカードを引く
    const drawnCard = drawCard(deck, playerHand);
    if (drawnCard) {
      addLogMessage(`あなたは ${drawnCard.name} (攻撃力: ${drawnCard.attack}) を引きました。`);
    }

    renderCards(); // UIを更新
  }

  // CPUのターン開始
  function startCpuTurn() {
    addLogMessage("CPUのターンです。");
    // CPUのロジック（例: 山札から引く、攻撃するなど）
    const drawnCard = drawCard(deck, cpuHand);
    if (drawnCard) {
      addLogMessage(`CPUは ${drawnCard.name} (攻撃力: ${drawnCard.attack}) を引きました。`);
    }

    renderCards(); // UIを更新

    // 次のターンはプレイヤー
    isPlayerTurn = true;
    startPlayerTurn();
  }

  // カードを出す（クリック時の処理）
  playButton.addEventListener("click", () => {
    if (!isPlayerTurn) {
      addLogMessage("今はCPUのターンです！");
      return;
    }

    addLogMessage("あなたはカードを出しました！");
    // ここでプレイヤーのアクションを処理します

    // 次のターンはCPU
    isPlayerTurn = false;
    startCpuTurn();
  });

  // ゲーム開始
  startPlayerTurn();
});
