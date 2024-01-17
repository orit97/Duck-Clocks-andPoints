export  function Is(pointsArray,x,y){
for(let i=0; i<pointsArray.length;i++){     
  if((pointsArray[i].x ===x && pointsArray[i].y === y))
    {return true;}
    }
    return false;
}
export  function IsInArray(pointsArray,point){
  for(let i=0; i<pointsArray.length;i++){     
    if((pointsArray[i].x === point.x && pointsArray[i].y === point.y))
      {return true;}
      }
      return false;
    
    }


    export  function MapLength(points){
    const totalLength = 0;
  for (let i = 1; i < points.length-1; i++) {
     totalLength += Math.sqrt(
      Math.pow(points[i].x - points[i - 1].x, 2) +
      Math.pow(points[i].y - points[i - 1].y, 2)
    );
  }

  return totalLength
           
    }

  

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