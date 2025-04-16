document.addEventListener("DOMContentLoaded", () => {
  const playerCards = [
    { name: "カードA", attack: 5 },
    { name: "カードB", attack: 3 },
    { name: "カードC", attack: 7 },
  ];

  const cpuCards = [
    { name: "カードX", attack: 4 },
    { name: "カードY", attack: 6 },
    { name: "カードZ", attack: 2 },
  ];

  const playerArea = document.getElementById("player-cards");
  const cpuArea = document.getElementById("cpu-cards");
  const logArea = document.getElementById("log-messages");
  const playButton = document.getElementById("play-card");

  let playerIndex = 0;
  let cpuIndex = 0;

  // カードを表示
  function renderCards() {
    playerArea.innerHTML = playerCards.map(
      (card) => `<div class="card">${card.name}<br>攻撃力: ${card.attack}</div>`
    ).join("");
    cpuArea.innerHTML = cpuCards.map(
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

  // ゲーム開始
  playButton.addEventListener("click", () => {
    if (playerIndex >= playerCards.length || cpuIndex >= cpuCards.length) {
      addLogMessage("ゲーム終了！");
      return;
    }

    const playerCard = playerCards[playerIndex];
    const cpuCard = cpuCards[cpuIndex];

    addLogMessage(`あなた: ${playerCard.name} (${playerCard.attack}) vs CPU: ${cpuCard.name} (${cpuCard.attack})`);

    if (playerCard.attack > cpuCard.attack) {
      addLogMessage("あなたが勝ちました！");
    } else if (playerCard.attack < cpuCard.attack) {
      addLogMessage("CPUが勝ちました！");
    } else {
      addLogMessage("引き分けです！");
    }

    playerIndex++;
    cpuIndex++;
  });

  renderCards();
});
