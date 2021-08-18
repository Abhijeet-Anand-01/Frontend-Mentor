const question = document.querySelectorAll(".question_block");

question.forEach(elementRef => {
    elementRef.addEventListener("click", () => {
        if (elementRef.parentNode.classList.contains("show_answer")) {
            elementRef.parentNode.classList.remove("show_answer");
        }
        else {
            question.forEach(remove => {
                remove.parentNode.classList.remove("show_answer");
            });
            elementRef.parentNode.classList.add("show_answer");
        }
    });
});

const img = document.getElementById("imgHover");

question.forEach(elementRef => {
    elementRef.addEventListener("mouseover", () => {
        img.classList.add("hover");
    });
});
question.forEach(elementRef => {
    elementRef.addEventListener("mouseout", () => {
        img.classList.remove("hover");
    });
});
