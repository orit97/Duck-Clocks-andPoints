export default class Duck{
   name;
   color;
   age;
   weight;
   picture;
   
    constructor(name, color, age, weight, picture){
      this.name = name;
      this.color = color;
      this.age = age;
      this.weight = weight;
      this.picture = picture;      
    }

      show(){
         let output = document.getElementById("output");
         output.innerHTML = `
         <p>Name: ${this.name}</p>
         <p>Color: ${this.color}</p>
         <p>Age: ${this.age}</p>
         <p>Weight: ${this.weight}</p>
         <p><img  src="${document.querySelector("#pic").src} height="200"></p>
         `;

      }

      quack() {
         const audio = new Audio("sounds/quack.mp3");
         audio.play();
         let quack = document.getElementById("output");
         let quackamount = (this.age * this.weight) / 2;
         for (let i = 0; i < quackamount; i++) quack.innerHTML += `<p>Quack!<p>`;
       }
}



