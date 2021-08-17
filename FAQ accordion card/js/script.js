const question = document.querySelectorAll(".question_block");

question.forEach(elementRef => {
    elementRef.addEventListener("click", () => {
        if (elementRef.parentNode.classList.contains("show_answer"))
            elementRef.parentNode.classList.remove("show_answer");
        else {
            question.forEach(remove => {
                remove.parentNode.classList.remove("show_answer");
            });
            elementRef.parentNode.classList.add("show_answer");
        }
    });
});

