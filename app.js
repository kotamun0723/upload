// ボタンをクリックしたときの処理
document.getElementById("sendMessageButton").addEventListener("click", function() {
  const message = document.getElementById("messageInput").value; // 入力されたメッセージを取得

  // メッセージが空でないか確認
  if (message.trim() === "") {
    alert("メッセージを入力してください。");
    return;
  }

  // LINE Notify APIにメッセージを送る
  const formData = new FormData();
  formData.append("message", message); // 入力されたメッセージをFormDataに追加

  fetch("https://notify-api.line.me/api/notify", {
    method: "POST",
    headers: {
      "Authorization": `Bearer uZH3TcoO9Z4yJXpiFOU8e6tM6uVxndECYc2cPuD7AEd` // ここにLINE Notifyのアクセストークンを記入
    },
    body: formData,
    mode: "no-cors"  // CORS無視
  })
  .then(() => {
    console.log("メッセージ送信完了（レスポンスは取得しない）");
    alert("メッセージが送信されました！");
  })
  .catch(error => {
    console.error("エラー:", error);
    alert("エラーが発生しました。もう一度お試しください。");
  });
});
