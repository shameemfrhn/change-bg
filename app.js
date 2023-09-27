document.addEventListener("DOMContentLoaded", function () {
    const colorChangeButton = document.getElementById("color-change-button");
    colorChangeButton.addEventListener("click", changeBackgroundColor);

    function changeBackgroundColor() {
        // Generate a random color
        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
    }

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
