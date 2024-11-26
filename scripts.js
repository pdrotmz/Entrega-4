document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const responseMessage = document.getElementById("form-response");
    responseMessage.classList.remove("hidden");
    responseMessage.textContent = "Mensagem enviada com sucesso !";

    event.target.reset();

    setTimeout( () => {
        responseMessage.classList.add("hidden");
    }, 3000);
});