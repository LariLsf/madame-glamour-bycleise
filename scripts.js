document.addEventListener("DOMContentLoaded", function() {
    // Remove os alertas dos botões e ajusta as cores de hover
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = "#ff0066"; // Rosa escuro
            button.style.color = "white";
        });

        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = "";
            button.style.color = "white";
        });
    });

    // Aplica efeitos de hover nas imagens do curso
    const courseImages = document.querySelectorAll("#curso img");
    const aboutImages = document.querySelectorAll(".sobre-nos-images img");

    function applyImageHoverEffect(images) {
        images.forEach(image => {
            image.addEventListener("mouseover", () => {
                image.style.filter = "brightness(1.2)";
                image.style.transform = "scale(1.05)";
            });

            image.addEventListener("mouseout", () => {
                image.style.filter = "brightness(1)";
                image.style.transform = "scale(1)";
            });
        });
    }

    // Aplica o efeito de hover nas imagens do curso e sobre nós
    applyImageHoverEffect(courseImages);
    applyImageHoverEffect(aboutImages);
});
