const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img")

// eventos
function generatorQrcode() {
    const qrCodeInputValue = qrCodeInput.value;

    if (!qrCodeInputValue) return;

    qrCodeBtn.innerHTML = "Gerando código...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    

    qrCodeImg.addEventListener("load" , () =>{
      container.classList.add("active");
      qrCodeBtn.innerHTML = "gerando código..."
    })
}

qrCodeBtn.addEventListener("click", () => {
    generatorQrcode();
});

qrCodeInput.addEventListener("keydown", (e) => {
   if(e.code === "Enter"){
      generatorQrcode();
   }
});

//limpando área do qrcode

qrCodeInput.addEventListener("keyup" , () =>{
      if(!qrCodeInput.value){
            container.classList.remove("active");
            qrCodeBtn.innerHTML = "Gerar QR Code"
      }
})


