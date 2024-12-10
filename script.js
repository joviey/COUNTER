/*let reset = [0];
let increased = [1,2,3,4,5,6,7,8,9];
let decreased = [-1,-2,-3,-4,-5,-6];

let demo = document.getElementById("demo");
let increasedBtn = document.getElementById("increase-btn");
let decreaseBtn = document.getElementById("decrease-btn");

console.log(decreaseBtn)

demo.addEventListener("click", function(){
    demo.innerHTML = reset[0]
})
increasedBtn.addEventListener("click", function(){
    demo.innerHTML = increased[5]
})*/

let count = 0;

let demo = document.querySelector("#demo");
let btns = document.querySelectorAll(".btn");

console.log(btns)
console.log(btns.currentTarget)
console.log(btns.classList)
console.log(btns.contains)

btns.forEach(btn => {
    btn.addEventListener("click", function(e){
        console.log(e.classList)
        const styles = e.currentTarget.classList;
        if (styles.contains("increased")){
            count++;
        }
        else if (styles.contains("decreased")){
            count--;
        }
        else{
            count = 0;
        }
        if (count > 0 ){
            demo.style.color = "green";
        }
        else if (count < 0){
            demo.style.color = "red";
        }
        else{
            demo.style.color = "black";
        }
        demo.textContent = count;
    })
})
