document.addEventListener("DOMContentLoaded", () => {
    const image = document.querySelector(".hidden-image");

    setTimeout(() => {
        image.style.opacity = 1; // 画像をフェードイン
    }, 12000); // すべての見出しアニメーションが終わった後に画像を表示
});
