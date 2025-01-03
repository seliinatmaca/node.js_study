// Node.js'te "asenkron" ve "senkron" kavramları işlemlerin ne zaman ve nasıl çalıştırıldığın ifade eder.

/*
* Senkron
* Senkron birişlem baştan sona tamamlanana kadar diğer kodların çalışmasını durdurur.
* yani işlemi başlattığınızda işlem tamamlanmadan sonra ki satır çalışmaz.

* Senkron işlemler özellikle büyük veri işlemleri için bekleme süresini arttırabilir ve performansı olumsuz etkiler.
* Bunun sebebi node js'in tek iş parçacıklı yapıya sahip olması ve bir senkron işlem devam ederken diğer işlemler beklemek zorunda kalır.
*/

/*
 * Asenkron
 * Asenkron işlemler başladığı anda kod çalışmaya devam eder.
 * Node.js işlemi arkaplanda yürütür ve tamamlandığında callback function ile sonuç döndürür.
 * Asenkron işlemler node.js'in single-thread yapısından dolayı performansı artıtır çünkü bir işlem devam ederken diğer işlemleri engellemeden yürütülebilir.
 */

/*
 *!! Hangi durumda hangisi kullanılır ? SENKRON ? ASENKRON ?
 * Küçük işlemlerde ve beklemenin kritik olduğu durumlarda tercih edilir.
 * Performansın önemli olduğu kullanıcı deneyimini etkilemek istemediğimiz durumlarda asenkron yöntemleri kullanmalıyız.
 * Büyük dosya varsa veya çok fazla girdi / çıktı varsa asenkron yapıyı tercih ederiz.
 */

const fs = require("fs");

// fs.readFile("./data/örnek.txt", "utf-8", (err, data) => {
//   if (err) return console.log("okuma işleminde hata !!! 💥 ", err);

//   console.log("Dosya başarıyla okundu", data);
// });
// fs.writeFile("./data/output-2.txt", "selamlar", (err) => {
//   if (err) return console.log("yazma işleminda hata!!! 💥", err);

//   console.log("🎾 Yeni dosya başatıyla oluşturuldu");
// });

// fs.unlink("./data/bozuk.txt", (err) => {
//   if (err) return console.log("silme işleminda hata!!! 💥", err);

//   console.log("🎾 Dosya başarıyla silindi");
// });

// Okuma işleminin okuma işlemine bağımlı olduğu seneryoda da asenkron yapıyı kullanabiliriz.

//start.txt dosyasını okuyup içinde ki dosyaya erişelim.
fs.readFile("./data/start.txt", "utf-8", (err, filename) => {
  if (err) return console.log("okunamadı !!");

  console.log(filename);

  //start.txt dosyasının içerisinde yazan dosyayı oku
  const sonuc = fs.readFileSync(`./data/${filename}`, "utf-8");

  //sonucu konsola yazdır
  console.log("Sonuc", sonuc);
});
