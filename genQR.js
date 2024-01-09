let genBtn = document.getElementById("genQR");



function genQR() {
    let qrcode = new QRCode("qrcode", "https://youtube.com");
}

genQR();