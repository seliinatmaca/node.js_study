//* FS modülünü bu dosyaya çağırma (import etme)
const fs = require("fs");

//* FS (FileSystem)
//* Node.js modüllerden bir tanes
//* Sahip olduğu modüller sayesinde dosya dizininde işlemler yapabileceğiz.
//* Dosya Oluşturma / Silme / Okuma / Yazma

//* 1) Dosya Okuma
const text = fs.readFileSync("./data/örnek.txt", "utf-8");
// console.log(text);
console.log("Dosya okuma bitti");

//* 2) Dosya Yazma
//* Gönderilecek metin içeriğini hazırla

const newText = `
Greyfurt hakkında öğrendiğim bilgiler bunlardı:
${text}

Oluşturulma Tarihi:
${new Date().toLocaleDateString()}
`;

//* output isminde varolan dosya yoksa yenisinin oluşturup içeriğini belirler.
fs.writeFileSync("./data/output.txt", newText);
console.log("Dosya yazma bitti");

//* 3) Dosya Silme
fs.unlinkSync("./data/bozuk.txt");
console.log("Dosya silme bitti");

//* 4) Dizin (Klasör) Oluşturma
fs.mkdirSync("challange");
console.log("Klasör oluşturma bitti");

//* 5) Dosya / Dizinin İsmini Değiştirme
fs.renameSync("challange", "zorluk");
console.log("Klasör ismi değiştirme bitti");
