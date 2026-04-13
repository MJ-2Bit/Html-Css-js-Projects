let btn =  document.querySelector("#addbtn");
let list = document.querySelector("#taskList");
let inp = document.querySelector("#taskInput");

btn.addEventListener("click", function(){

function addtask(){

    let task = inp.value;
                                            
    if(task === "") return;

  let li = document.createElement("li");
  li.innerHTML = task;

  let btn1 = document.createElement("button")
  btn1.innerHTML = "Delete"
  btn1.classList.add("deleteBtn")

   li.appendChild(btn1)
  list.appendChild(li)

  btn1.addEventListener("click",function(){
    li.remove()
  })


  li.addEventListener("click", function(){
    li.classList.toggle("done")
  } )
 
  inp.value = ""
}
  inp.addEventListener("keydown", function(e){
    if((e) === "Enter"){
      addtask();
    }
  })
 addtask();
}) 

