## QR Code Generator (Node.js)

Basit ve hızlı bir şekilde sabit bir URL için 1000x1000 piksel boyutunda PNG formatında QR kodu üretir.

### Özellikler
- 1000x1000 px PNG çıktı
- Yüksek hata düzeltme seviyesi (H)
- Tek komutla çalıştırma (CLI argümanı gerekmez)

### Gereksinimler
- Node.js 18+ (önerilir)

### Kurulum
Depoyu klonladıktan sonra bağımlılığı yükleyin:

```bash
npm install
```

### Kullanım
Varsayılan ayarla (URL `qr.js` içinde sabit):

```bash
node qr.js
```

İşlem tamamlandığında proje kök dizininde `qr.png` oluşturulur.

### URL Nasıl Değiştirilir?
`qr.js` içindeki URL’i düzenleyin:

```js
// qr.js
const url = 'https://example.com';
```

### Özelleştirme (İsteğe Bağlı)
Boyut, margin ve renkleri `qr.js` içinde değiştirebilirsiniz:

```js
QRCode.toFile(outputPath, url, {
  type: 'png',
  width: 1000,           // Boyut (px)
  errorCorrectionLevel: 'H',
  margin: 2,             // Kenar boşluğu
  color: {
    dark: '#000000',     // QR rengi
    light: '#FFFFFF'     // Arka plan rengi
  }
})
```

### Sorun Giderme
- `Error: invalid URL`: `qr.js` içindeki URL’in geçerli bir URL olduğundan emin olun (örn. `https://...`).
- Çıktı oluşmadı: Yazma izninizin olduğundan emin olun ve dosya adının çakışıp çakışmadığını kontrol edin.

### Proje Yapısı
```
.
├─ qr.js            # Çalıştırılabilir ana dosya (URL burada sabit)
├─ package.json     # Bağımlılıklar ve proje bilgileri
├─ .gitignore       # Gereksiz dosyaları hariç tutar
└─ README.md        # Bu dosya
```

---
Keyfi olarak CLI argümanı ile çalışacak sürüme ihtiyacınız olursa haber verin; kısa bir komutla URL alacak bir varyant da ekleyebilirim.


