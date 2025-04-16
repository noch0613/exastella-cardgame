document.addEventListener("DOMContentLoaded", () => {
  const deck = [
    { name: "カードA", attack: 5 },
    { name: "カードB", attack: 3 },
    { name: "カードC", attack: 7 },
    { name: "カードD", attack: 4 },
    { name: "カードE", attack: 6 },
  ];

  const playerHand = []; // プレイヤーの手札
  const cpuHand = []; // CPUの手札

  const playerArea = document.getElementById("player-cards");
  const cpuArea = document.getElementById("cpu-cards");
  const logArea = document.getElementById("log-messages");
  const playButton = document.getElementById("play-card");
  const deckCount = document.getElementById("deck-count");

  // デッキの初期枚数を表示
  function updateDeckCount() {
    deckCount.textContent = deck.length;
  }

  // 山札からカードを引く
  function drawCard(deck, hand) {
    if (deck.length === 0) {
      console.log("山札が空です！");
      return null;
    }
    const card = deck.shift(); // 山札の一番上のカードを取得
    hand.push(card); // 手札に追加
    updateDeckCount(); // デッキ枚数を更新
    return card;
  }

  // プレイヤーのターン開始
  function startPlayerTurn() {
    console.log("あなたのターンです。");

    // 山札からカードを引く
    const drawnCard = drawCard(deck, playerHand);
    if (drawnCard) {
      console.log(`あなたは ${drawnCard.name} (攻撃力: ${drawnCard.attack}) を引きました。`);
    }

    renderCards(); // UIを更新
  }

  // カードを表示する
  function renderCards() {
    playerArea.innerHTML = playerHand.map(
      (card) => `<div class="card">${card.name}<br>攻撃力: ${card.attack}</div>`
    ).join("");

    cpuArea.innerHTML = cpuHand.map(
      (card) => `<div class="card">${card.name}<br>攻撃力: ${card.attack}</div>`
    ).join("");
  }

  // ゲーム開始
  updateDeckCount(); // 初期枚数を表示
  startPlayerTurn();

  // カードを出すボタンのイベント
  playButton.addEventListener("click", () => {
    console.log("あなたはカードを出しました！");
  });
});
