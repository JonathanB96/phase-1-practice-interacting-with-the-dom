//Increment counter every second
let counter = document.querySelector("#counter");
let interval = setInterval(()=>{
    counter.textContent = parseInt(counter.textContent, 10) + 1
}, 1000)


//minus & plus buttons

let minusBtn = document.querySelector("#minus");
let plusBtn = document.querySelector("#plus");

minusBtn.addEventListener("click", ()=> {
    counter.textContent = parseInt(counter.textContent, 10) - 1
})
plusBtn.addEventListener("click", ()=> {
    counter.textContent = parseInt(counter.textContent, 10) + 1
})

// heart button
let heart = document.querySelector("#heart");
let num = 0;

heart.addEventListener("click", ()=>{
    let i = 0;
    let li = document.createElement("li");
    li.textContent = `${counter.textContent} has been liked ${num+1} time`
    let ul = document.querySelector(".likes");
    ul.appendChild(li);
    if(parseInt(counter.textContent, 10)===i+parseInt(counter.textContent)){
        li.textContent =`${counter.textContent} has been liked ${num+1} times` 
        }

})

// Pause button
let pause = document.querySelector("#pause");
let buttons = document.querySelectorAll("button");
function desableBtn(){
    for(let btn of buttons){
        if(btn.id !== "pause"){
            btn.setAttribute('disabled' , 'disabled');
        }
        
        
    }
    pause.textContent = "resume"
    clearInterval(interval)

}

function enableBtn(){
    for(let btn of buttons){
        if(btn.id !== "pause"){
            btn.removeAttribute('disabled');
        }
        
        
    }
    pause.textContent = "pause";
    // setInterval(()=>{
    //     counter.textContent = parseInt(counter.textContent, 10) + 1
    // }, 1000);
    
}

pause.addEventListener('click', ()=>{
    if(pause.textContent.trim()=== "pause"){
        
        desableBtn()
        
    }
    else{
        enableBtn()
    }
    
    
})
//Adding comment
let form = document.querySelector("#comment-form");
let input = document.querySelector("#comment-input");
let submitBtn = document.querySelector("button#submit");
let div = document.querySelector(".comments");


form.addEventListener('submit', (e)=>{

    e.preventDefault()
      let p = document.createElement('p');
   p.textContent = input.value;
   div.appendChild(p);

   form.reset()

})


