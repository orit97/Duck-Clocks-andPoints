
export default class Point {

    constructor(){
        this.x = 0;
       this.y = 0;
    }

    show_point(){
        const output = document.querySelector("#output");
        output.innerHTML =
        `
        <p>(${x},${y})</p>
        `
    }
    equals(p)
    {
        if((p.x === this.x && p.y === this.y))
        {return true;}
        return false;             
    }
}