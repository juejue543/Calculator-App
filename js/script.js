














let numbers = document.getElementsByClassName("num");
let screen = document.getElementsByClassName("text-space");

for(let i =0; i < 15; i+=1){
    numbers[i].addEventListener("click", function(e){
       
        screen[0].innerText += numbers[i].innerText;
        console.log(numbers[i].innerText);
        
    })
}

let reset = document.getElementById("Reset");
reset.addEventListener("click", function(){
    screen[0].innerText = "";
})

let Equality = document.getElementById("Equality");
Equality.addEventListener("click", function(){
    let x = screen[0].innerText
    let y = eval(x);
    screen[0].innerText = y;
    console.log(y)
});

let Delete = document.getElementById("del");
Delete.addEventListener("click", function(){
    screen[0].innerText =  screen[0].innerText.slice(0,-1);
})

