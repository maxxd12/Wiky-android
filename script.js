document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        let answer = button.nextElementSibling;
        answer.classList.toggle('visible');
    });
});


