const container = document.querySelector(".container");
const modal = document.querySelector(".thx-modal");
let deneme = null;


btnSendMail.addEventListener("click", () => {
    container.style.display = "none";
    modal.style.display = "flex";
    
});

btnDismiss.addEventListener("click", () => {
    modal.style.display = "none";
    container.style.display = "flex";
});
