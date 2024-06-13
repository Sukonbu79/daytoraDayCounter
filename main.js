const startDay = new Date("2024-05-25"); // 基準日を設定
const today = new Date(); // 現在日を取得

const pastTime = today.getTime() - startDay.getTime(); // 経過時間をミリ秒で取得
const pastDays = Math.floor(pastTime / (1000 * 60 * 60 * 24) + 1); // 経過時間を日数に変換

console.log(`基準日からの日数: ${pastDays}`);

// document.querySelector("#day-counts").innerText = pastDays;

// jQuery練習
jQuery("#day-counts").text(pastDays);
