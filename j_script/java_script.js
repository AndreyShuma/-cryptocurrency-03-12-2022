// "use strict"
//  class Comment {
//     constructor(text) {
//         this.text = text
//         this.ttt = 0
//     }
//     static upvote00000() {
//         this.ttt += 1
//     }
//  }

//  class MyComment extends Comment {
//     constructor(text, my) {
//         super(text)
//         this.my = my
//     }
//  }

//  const firstComent = new Comment("First comment1111");
//  const myComment123 = new MyComment("TEXT", "ygrerfgbj");
//  console.log(firstComent);
//  console.log(myComment123);
//  const asd = {
//     name: "Вася",
//     age: 25
//  };
// //  console.log(asd);
//  const rrr = new Object({age:20});
// //  console.log(rrr);
// //  console.log(firstComent instanceof Comment);
// //  console.log(firstComent instanceof Array);
// //  firstComent.upvote00000();
// let a = {
//     name: "Вася",
//     age: 20
// }
// let b = {
//     wight: 50,
// }
// b.__proto__ = a;
// console.log(b);
// class Like {
//     constructor(like, color) {
//         this.text = like
//         this.favoritColor = color
//     }
//     love(tet) {
//         console.log('I love you!! '+ tet)
//     }
// }
// let c = new Like("yes", "red");
// console.log(c);
// let d = {
//     height: 150
// };

// d.prototype = function ffhhfg() {
//    return console.log("БУГАГА--ГА-ГА!!!!!");
// };
// console.log(d);
// d.__proto__ = c;
class Car {
    constructor (marka, model) {
        this.marka = marka
        this.model = model
    }
    myCar() {
       return console.log(`Я люблю модель автомобиля ${this.marka} и марка просто супер ${this.model}`);
    }
    static sayHy() {
        console.log(`Я люблю свою машину!!!`);
    }
}
class Tractor extends Car {
    constructor (name, marka, model ){
        super(marka, model)
        this.name = name
    }
}
const bmw = new Car ('BMW', 'BMW 6 Series 2016');
const jonDir = new Tractor('JonDir', 'S-952');
console.log(bmw);
console.log(jonDir);
// const hot = [1,2,3];
// console.log(hot);
// Array.prototype.sayBy = function () {
//     console.log('Bye-bye!!')
// };
var animal = {
    eats: "Yes"
  };
  var rabbit = {
    jumps: true
  };

  rabbit.__proto__ = animal;
  
  // в rabbit можно найти оба свойства
//   console.log( rabbit.jumps ); // true
//   console.log( rabbit.eats ); // true
  console.log( rabbit);
  for (let key in rabbit) {
    // console.log(key);
    // console.log(rabbit[key]);
  };
  console.log(Object.getOwnPropertyNames(rabbit.__proto__));
  console.log(rabbit.valueOf());
