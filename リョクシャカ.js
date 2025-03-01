document.getElementById("gacha-btn").addEventListener("click", function () {
    const menu = [
        { name: "Channel U ツアーTシャツM", price: 3800 },
        { name: "Channel U ツアーTシャツL", price: 3800 },
        { name: "Channel U ツアーTシャツXL", price: 3800 },
        { name: "Channel U ツアータオル", price: 2200 },
        { name: "Channel  U ツアーアクリルキーホルダー", price: 800 },
        { name: "Channel U ジャケ写Tシャツ(ビッグシルエット)M", price: 4200 },
        { name: "Channel U ジャケ写Tシャツ(ビッグシルエット)XL", price: 4200 },
        { name: "Channel U ツアーラバーバンドオーロラ", price: 600 },
        { name: "Channel U ツアーラバーバンドクロ", price: 600 },
        { name: "ChannelU ツアーマグネット", price: 4500 },
        { name: "PLAYER 1Tシャツ(ビッグシルエット)M", price: 4200 },
        { name: "PLAYER 1Tシャツ(ビッグシルエット)XL", price: 4200 },
        { name: "PLAYER 1ミトン", price: 2000 },
        { name: "PLAYER 1巾着ポーチ", price: 1500 },
        { name: "ブロッコリー＆カリフラワーTシャツM", price: 3800 },
        { name: "ブロッコリー＆カリフラワーTシャツL", price: 3800 },
        { name: "ブロッコリー＆カリフラワーTシャツXL", price: 3800 },
        { name: "ブロッコリー＆カリフラワーブランケット", price: 3500 },
        { name: "ブロッコリー＆カリフラワークッション", price: 3500 },
        { name: "PLAYER 1セットアップ(ナイロン)M", price: 12000 },
        { name: "PLAYER 1セットアップ(ナイロン)XL", price: 12000 },
        { name: "Channel U ツアーステッカーセット", price: 900  },
        { name: "メッシュバッグ2025", price: 1000 },
        { name: "ガチャ", price: 500 },
    ];

    let total = 0;
    let selectedItems = [];
    
    while (total < 10000) 
    {
        let item = menu[Math.floor(Math.random() * menu.length)];
        if (total + item.price <= 10000) { // 修正: 1000円 → 10000円
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
