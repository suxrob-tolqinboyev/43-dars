// masala 1
// const talabalarsoni = {
//     Suxrob:{name:"Suxrob", age : 21 },
//     Jasur:{name:"Jasur", age : 20 },
//     Usmon:{name : "Usmon", age : 22},
// };

// const result =Object.keys(talabalarsoni).length;
// console.log("Talabalar soni" , result);

// masala 2
// const mahsulotlar = {
//     olma : 3000,
//     nok : 4000,
//     banan : 2000,
// };

// const result = Object.values(mahsulotlar).reduce((sum, val) => sum + val , 0);
// console.log("Narxlar yig'indisi : " + result);

// masala 3

// const talabalar = {dushanba:"Matematika ",seshanba: "Fizika" ,chorshanba : "Infarmatika"};

// console.log("Talabalar soni" , Object.keys(talabalar));

// masala 4
// let shaxs = {name:"Suxrob" , age : 25};
// Object.freeze(shaxs);
// shaxs.name="Usmon";
// console.log(shaxs);

// masala 5

// let vazifalar = {uy_ishi: true , dastur_yaratish:false, sport: true};
// let tugatilgan = Object.values(vazifalar).filter((val) => val == true).length;
// let tugatilmagan = Object.values(vazifalar).filter(
//   (val) => val == false
// ).length;

// console.log("Tugatilgan: " + tugatilgan, "Tugatilmagan: " + tugatilmagan);

// masala 6

// let mahsulotlar = { olma: 3000, nok: 4000, banan: 2000 };

// let qimmatMahsulotlar = Object.entries(mahsulotlar).filter(
//   ([kal, qiy]) => qiy > 3000
// );

// console.log(qimmatMahsulotlar.join());

// masala 7

// let sinf = { Ahmad: 15, Murod: -3, Javohir: 17 };
// let musbatYoshlar = Object.entries(sinf).reduce((acc, [ism, yosh]) => {
//   if (yosh >= 0) {
//     acc[ism] = yosh;
//   }
//   return acc;
// }, {});

// console.log(musbatYoshlar);

// masala 8
// let bankHisob = { balans: 50000 };

// Object.defineProperty(bankHisob, "pinCode", {
//   value: 1234,
//   writable: false,
//   enumerable: false,
//   configurable: false,
// });
// console.log(bankHisob.pinCode);
// bankHisob.pinCode = 2003;
// console.log(bankHisob.pinCode);

// masala 9
// let shaxs = {
//     ism: "Laylo",
//     familiya: "Ismoilova",
//     toliqism: function () {
//       return this.ism + " " + this.familiya;
//     },
//   };
//   console.log(shaxs.toliqism());

// masala 10

// function sum (){
//     return this.reduce ((acc,num) =>acc + num,0);
// }
// let qiymatlar = [10,20,30];
// let result =sum.call(qiymatlar);

// console.log(result);

// masala 11

// let mahsulotlar = { olma: 3000, nok: 4000 };
// let mahsulotNarxi = function () {
//   return this.olma;
// };
// let natija = mahsulotNarxi.bind(mahsulotlar);
// console.log(natija());

// masala 12

// let narxlar = [500, 1000, 1500];
// let yegindi = function () {
//   return this.reduce((a, b) => a + b, 0);
// };
// console.log(yegindi.apply(narxlar));

//masala 13

// const savdo = {olma: 3000,nok: 4000,banan: 2000 };
// savdo.foyda = function () {
//   return this.olma + this.nok + this.banan;
// };
// console.log(savdo.foyda());

// masala 14
// let sinf = {oquvchilar: 25,oqtuvchilar:1 };
// Object.seal(sinf);
// sinf.oqtuvchilar=2;
// console.log(sinf);

// masala15
// let shaxs = {
//   ism: "Olima",
//   yosh: 25,
//   salomlash: function () {
//     return Salom, men ${this.ism}man!;
//   },
// };
// console.log(shaxs.salomlash());

// masala 16
// function Odam(ism) {
//     this.ism = ism;
//   }
//   Odam.prototype.gapir = function () {
//     return this.ism + " mavjud";
//   };
//   let odam1 = new Odam("Aziz");
//   console.log(odam1.gapir());

// masala 17
// let katalog = {
//     texnika: { kompyuter: 5000, printer: 3000 },
//     oziq_ovqat: { non: 1000, choy: 2000 },
//   };
//   let texnikaYigindi = Object.values(katalog.texnika).reduce((a, b) => a + b, 0);
//   let oziqYegindi = Object.values(katalog.oziq_ovqat).reduce((a, b) => a + b, 0);
  
//   console.log(`Texnika: ${texnikaYigindi}, Oziq-ovqat: ${oziqYegindi}`);

// masala 19
// let talabalar = { Ahmad: 1, Laylo: 2 };

// Object.defineProperty(talabalar, "yangiTalaba", {
//   value: "Suxrob",
//   writable: false,
//   enumerable: true,
//   configurable: false,
// });

// console.log(talabalar.yangiTalaba);

// masala 20
// Array.prototype.ortacha = function () {
//     let yigindi = this.reduce((acc, val) => acc + val, 0);
//     return yigindi / this.length; 
//   };
  
//   let ballar = [90, 80, 70];
//   console.log("O‘rtacha:", ballar.ortacha()); 
  



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// KONSPEKT
// Obyekt prototype haqida .Javascript - bu Prototype ga asoslangan dasturlash 
// tili hisoblanadi.

//  Prototype tarjimasi qolib .Prototype: bu obyektning qolibini tuzishda yordam
//  beradi.

// Prototype bilan biz qo’shimcha prototype yaratsak bo’ladi.
// Setprototypeof bilan eski obyekt bilan yengi ochilgan obektni birlashtirib 
// beradi.

// Freeze bilan Obektga yengi metod qo’shsak, qo’shilgan metodlar muzlatiladi.

// Create eski prototypeni  yangi obyekt yaratishdi va berilgan prototypeni 
// yangi obyektga ko'chirib o'tkazadi.

//  This obektning turgan joyi yoki elon qilingan joyiga qarab otasini obyektini
//  olib beradi.

//  GetPrototypeOf - bu obyektning prototypeda nimalar mavjudligini qaytaradi.

//  Object.assign() - bu bir nechta oyektlarni xususiyatlarini birlashtirin 
// boshqa obyekt ichiga nusxalab beradi.

// Object.seal() - bu obyektning xususiyatlarini o'zgartirishga yo'l qo'ymaydi,
// lekin faqat xususiyatlarning qiymatlarini o'zgartirishga ruxsat beradi.

// Call () - bu metod bizga obyekt bilan function strukturani bog'ab beradi.



