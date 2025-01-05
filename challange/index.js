const fs = require("fs");

// Örnek;

/*
1) title dosyasını okuyun
2) content dosyasını okuyun
3) title dosyasındaki başlığa ve content dosyasında ki içeriğie sahip bir dosya oluşturun.

*/

const title = fs.readFileSync("./challange/title.txt", "utf-8");

const content = fs.readFileSync("./challange/content.txt", "utf-8");

fs.writeFileSync(title, content);

//yukarıda kinin açıklaması
fs.writeFileSync("./challange/finish.txt", "Navigating...");
