const path = require('path');
const QRCode = require('qrcode');

// Buraya URL'inizi yazın
const url = 'https://github.com/yemreeke';

// Çıkış dosyası adı (aynı klasöre kaydeder)
const outputPath = path.resolve(__dirname, 'qr.png');

QRCode.toFile(outputPath, url, {
    type: 'png',
    width: 1000, // 1000x1000 px
    errorCorrectionLevel: 'H',
    margin: 2,
    color: {
        dark: '#000000',
        light: '#FFFFFF'
    }
})
    .then(() => {
        console.log(`QR code saved to: ${outputPath}`);
    })
    .catch((err) => {
        console.error('Failed to generate QR code:', err.message);
        process.exit(1);
    });


