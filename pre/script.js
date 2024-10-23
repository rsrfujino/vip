// script.js
document.addEventListener("DOMContentLoaded", () => {
    const mediaElements = [
        document.getElementById("media001"),
        document.getElementById("media002"),
        document.getElementById("media003")
    ];
    const bgm = document.getElementById("bgm");

    const displayDurations = [60000, 35000, 30000]; // 各メディアの表示時間（ミリ秒）
    let currentIndex = 0;

    // スリープBlock
    var noSleep = new NoSleep();
    noSleep.enable();

    // BGMを再生
    bgm.play();

    function changeMedia() {
        // すべてのメディア要素を非表示にする
        mediaElements.forEach((media) => {
            media.style.opacity = 0;
        });

        // 現在のメディア要素を表示する
        setTimeout(() => {
            mediaElements[currentIndex].style.opacity = 1;
            if (mediaElements[currentIndex].tagName === "VIDEO") {
                mediaElements[currentIndex].play();
            }

            // 次のメディアを表示するタイマーを設定
            setTimeout(changeMedia, displayDurations[currentIndex]);

            // インデックスを更新
            currentIndex = (currentIndex + 1) % mediaElements.length;
        }, 2000); // 2秒後フェードイン
    }

    // 初回のメディア表示
    changeMedia();
});
