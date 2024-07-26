// script.js
document.addEventListener("DOMContentLoaded", () => {
    const headings = document.querySelectorAll(".explosive-heading");
    const images = document.querySelectorAll(".hidden-image");
    const audio = document.getElementById("voice001");
    const yamakoshi = document.getElementById("voice002");
    const menuaudio = document.getElementById("menuvoice001");

    const menuImagePaths = [
        "Menu001.png",
        "Menu002.png",
        "Menu003.png",
        "Menu004.png",
        "Menu005.png",
    ];

    const menuVoicePaths = [
        "MenuVoice001.mp3",
        "MenuVoice002.mp3",
        "MenuVoice003.mp3",
        "MenuVoice004.mp3",
        "MenuVoice005.mp3",
    ];

    // 見出しのアニメーション
    headings.forEach((heading, index) => {
        setTimeout(() => {
            heading.style.opacity = 1; // 見出しをフェードイン
        }, index * 4000); // 各見出しを順番に表示するための遅延時間
    });

    // ランダム表示
    setInterval(() => {
        images[2].style.opacity = 1;
        yamakoshi.play();

        setTimeout(() => {
            images[2].style.opacity = 0;
        }, 5000); // 5秒後フェードアウト
    }, 300000); 


    setInterval(() => {
        location.reload(); // ページをリロードする
    }, 900000); 

    let currentIndex = 1;
    function changeImage() {
        images[1].style.opacity = 0; // 現在の画像を非表示にする

        setTimeout(() => {
            images[1].src = menuImagePaths[currentIndex]; // Menu001.png～Menu003.pngのいずれかを表示する
            images[1].style.opacity = 1;

            menuaudio.src = menuVoicePaths[currentIndex];
            menuaudio.play();

            // インデックスを更新
            currentIndex = (currentIndex + 1) % menuImagePaths.length;
        }, 2000); // 2秒後フェードイン
    }

    // 最初の画像のアニメーション
    setTimeout(() => {
        images[0].style.opacity = 0; // 最初の画像を非表示にする
        audio.play();
        images[0].style.opacity = 1; // 最初の画像をフェードイン
    }, headings.length * 4000 + 1000); // 最初の画像を表示するための遅延時間

    // 2番目の画像のアニメーション
    setTimeout(() => {
        images[1].style.opacity = 0; // 2番目の画像を非表示にする

        setTimeout(() => {
            images[0].style.opacity = 0; // 最初の画像を非表示にする
            images[1].style.opacity = 1;  
            menuaudio.play();

            // 30秒ごとに画像を切り替えるタイマーを設定
            setInterval(changeImage, 20000);  // 30秒ごとにchangeImage関数を呼び出す
        }, 2000); 
    }, headings.length * 4000 + 5000); // 2番目の画像を表示するための遅延時間

});
