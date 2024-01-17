import Duck from "./Models/Duck.js";
import Clock from "./Models/Clock.js";
import Point from "./Models/Point.js";
import { Is,IsInArray } from "./functions.js";
function Main() {
  const d = new Duck();
  const name = document.querySelector("#name");
  const color = document.querySelector("#color");
  const age = document.querySelector("#age");
  const weight = document.querySelector("#weight");
  const picture = document.querySelector("#pic").src;
  const duckForm = document.querySelector("#duckForm");

  document.querySelector("#picture").addEventListener("change", function () {
    const preview = document.querySelector("#pic");
    const file = this.files[0];
    const reader = new FileReader();
    reader.addEventListener(
      "load" || show(onclick),
      () => {
        preview.src = reader.result;
      },
      false
    );
    if (file) {
      reader.readAsDataURL(file);
    }
  });

  duckForm.addEventListener("submit", (event) => {
    event.preventDefault();
    d.name = name.value;
    d.color = color.value;
    d.age = age.value;
    d.weight = weight.value;
    d.picture = picture;
    duckForm.style.display = "none";
    document.querySelector(".btns").style.display = "unset";
  });

  const show = document.querySelector("#show");

  show.addEventListener("click", () => {
    d.show();
  });

  const quack = document.querySelector("#quack");

  quack.addEventListener("click", () => {
    d.quack();
  });

  const clocks = [];
  const clockForm = document.querySelector("#clockForm");

  clockForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const a = new Clock();
    const hour = document.querySelector("#hour");
    const minute = document.querySelector("#minute");
    const second = document.querySelector("#second");
    const country = document.querySelector("#country");

    a.hour = hour.value;
    a.minute = minute.value;
    a.second = second.value;
    a.country = country.value;
    
    clocks.push(a);
    
    document.querySelector("#clockForm").reset();
    if (clocks.length == 5) {
      const outputElement = document.querySelector("#output");
      for (let i = 0; i < clocks.length; i++) {
        outputElement.innerHTML += 
        `
          <div class="clock-info"> 
            <p>Time:${clocks[i].show_clock()}</p>
            <p>In Seconds:${clocks[i].convertToSeconds()}</p>
            <p>Country:${clocks[i].country}</p>
          </div>
        `
      }                    
    }

    
  });
  let points = [];
const pointFrm = document.querySelector("#pointForm");
  pointFrm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const p = new Point();
    let xInput = document.querySelector("#x");
    let yInput = document.querySelector("#y");
    p.x = xInput.value;
    p.y = yInput.value;
    console.log("Point coordinates:", p);
    points.push(p);
     document.querySelector("#pointForm").reset();
    const equals = document.querySelector("#equals");
    equals.addEventListener("click",()=>{
      const e = new Point();
     xInput = document.querySelector("#x");
     yInput = document.querySelector("#y");
    e.x = xInput.value;
    e.y = yInput.value;
    const output = document.querySelector("#output");
    output.innerHTML =` <p>${e.equals(p)}</p> 
    `
    });
  });
  const sorter = document.querySelector("#sort");
  sorter.addEventListener("click",()=>{
    const r =new Point(); 
    r.x = document.querySelector("#x").value;
    r.y=document.querySelector("#y").value;
    const output = document.querySelector("#output");
    output.innerHTML = 
    `
    <p>${"Q2IsInArray:"+Is(points,r.x,r.y)}</p>
    <p>${"Q3IsInArray"+IsInArray(points,r)}</p>
    ` 
  })

  const clear=document.querySelectorAll("#clear")
  clear.addEventListener("click",(points)=>(
  points=[0]
  ))
}
Main();

 /* isEqual=(Points=[],x,y)=>{
    const p = new Point(x,y);

    for(let i=0;i<Point.length;i++)
    {
      if(Points[i]==p) 
          return true;
      else
        return false;
    }


  }*/


/*{
  const outputElement = document.querySelector("#output");
  outputElement.innerHTML = clocks.map
  ((clock) => 
  `
    <div class="clock-info"> 
      <p>${clock.show_clock()}</p>
      <p>${clock.convertToSeconds()}</p>
      <p>${clock.country}</p>
    </div>
  `
  )
    
}*/
/*
const a = new Clock({
    hour: document.querySelector("#hour").value,
    minute: document.querySelector("#minute").value,
    second: document.querySelector("#second").value,
    country: document.querySelector("#country").value,
});
*/

/*
const { value: hour } = document.querySelector("#hour");
const { value: minute } = document.querySelector("#minute");
const { value: second } = document.querySelector("#second");
const { value: country } = document.querySelector("#country");

const a = new Clock({ hour, minute, second, country });

 */