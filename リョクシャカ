<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>リョクシャカグッズ1万円ガチャ</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>リョクシャカグッズ1万円ガチャ</h1>
    <button id="gacha-btn">ガチャを回す！</button>
    <div id="result"></div>
    <script src="script.js"></script>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    text-align: center;
}
button {
    font-size: 25px;
    padding: 10px;
    margin: 20px;
    cursor: pointer;
}
#result {
    margin-top: 20px;
    font-size: 17px;
}
document.getElementById("gacha-btn").addEventListener("click", function () {
    const menu = [
        { name: "Channel U ツアーTシャツM", price: 3800 },
        { name: "Channel U ツアーTシャツL", price: 3800 },
        { name: "Channel U ツアーTシャツXL", price: 3800 },
        { name: "Channel U ツアータオル", price: 2200 },
        { name: "Channel  U ツアーアクリルキーホルダー", price: 800 },
        { name: "'Channel U' ジャケ写Tシャツ(ビッグシルエット)M", price: 4200 },
        { name: "'Channel U' ジャケ写Tシャツ(ビッグシルエット)XL", price: 4200 },
        { name: "Channel U ツアーラバーバンドオーロラ", price: 600 },
        { name: "Channel U ツアーラバーバンド黒", price: 600 },
        { name: "Channel U ツアーマグネット", price: 4500 },
        { name: "'PLAYER 1'Tシャツ(ビッグシルエット)M", price: 4200 },
        { name: "'PLAYER 1'Tシャツ(ビッグシルエット)XL", price: 4200 },
        { name: "'PLAYER 1'ミトン", price: 2000 },
        { name: "'PLAYER 1'巾着ポーチ", price: 1500 },
        { name: "ブロッコリー＆カリフラワーTシャツM", price: 3800 },
        { name: "ブロッコリー＆カリフラワーTシャツL", price: 3800 },
        { name: "ブロッコリー＆カリフラワーTシャツXL", price: 3800 },
        { name: "ブロッコリー＆カリフラワーブランケット", price: 3500 },
        { name: "ブロッコリー＆カリフラワークッション", price: 3500 },
        { name: "'PLAYER 1'セットアップ(ナイロン)M", price: 12000 },
        { name: "'PLAYER 1'セットアップ(ナイロン)XL", price: 12000 },
        { name: "Channel U ツアーステッカーセット", price: 900 },
        { name: "メッシュバッグ2025", price: 1000 },
    ];

    let total = 0;
    let selectedItems = [];
    
    while (total < 10000) {
        let item = menu[Math.floor(Math.random() * menu.length)];
        if (total + item.price <= 1000) {
            selectedItems.push(item);
            total += item.price;
        } else {
            break;
        }
    }

    let resultText = selectedItems.map(i => `${i.name} (${i.price}円)`).join("<br>");
    resultText += `<br><strong>合計: ${total}円</strong>`;

    document.getElementById("result").innerHTML = resultText;
});
