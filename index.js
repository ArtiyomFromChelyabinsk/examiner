function select(id){
   document.getElementById(id).style.backgroundColor = "#00FF00";
}

function unselect(id) {
  document.getElementById(id).style.backgroundColor = "#ffffff";
}

const lib = [
 { 
   "p" : -1,
   "words":
 [
   {"w":"Ich"},
   {"w":",", "type" : "none-word"},
   {"w":" ", "type" : "none-word"},
   {"w":"will", "type" : "word"},
   {"w":" ", "type" : "none-word"},
   {"w":"nach"},
   {"w":" ", "type" : "none-word"},
   {"w":"Hause", "type" : "word"},
   {"w":" ", "type" : "none-word"},
   {"w":"fahren"},
   {"w":" ", "type" : "none-word"},
   {"w":"mit"},
   {"w":"!", "type" : "none-word"},
 ],
   
 }
]
const arrL = lib[0]["words"].length
let p = -1

const addArr = (item, ai) => {
 // var p = item["p"]
 var a = item["words"]
 
 a.map((num, i)=>{
  var elemDiv = document.createElement('span');
  
  elemDiv.innerText = num["w"]
  elemDiv.id = ai.toString()+'_'+i
  
  if (num["type"]!="none-word"){
   elemDiv.onclick = function() {
   
   if (item.p!=-1) unselect(ai.toString()+'_'+item.p)
   item.p = i
   select(ai.toString()+'_'+item.p)
   printP(item)
  }
 }
 document.body.appendChild(elemDiv)

 }
 
 )
}

lib.map((n, i)=>{
  addArr(n, i)
  var elemDiv1 = document.createElement('br');
  document.body.appendChild(elemDiv1)
  
  var article = document.createElement('div')
  article.className = "article"
  document.body.appendChild(article)
  
  var submit = document.createElement('div')
  submit.className = "submit"
  submit.innerHTML = "submit"
  submit.onclick = () => {
    true;
  }
  article.appendChild(submit)
  
  var elemDiv2 = document.createElement('div')
  elemDiv2.className = "left"
  elemDiv2.innerHTML = "left"
  elemDiv2.onclick = () => {
    left(i)
  }
  article.appendChild(elemDiv2)
  
  var elemDiv = document.createElement('div')
  elemDiv.className = "right"
  elemDiv.innerHTML = "right"
  elemDiv.onclick = () => {
    right(i)
  }
  article.appendChild(elemDiv)
})

function move(ai, b){
  
  // let p = lib[ai]["p"]
  
  if (p == -1) return
  if (p==0 && b==0) return
  if (b==1 && p==arrL-1) return
  
  arr = lib[ai]["words"]
   
   let g = 1
   if (b==0) {
     g = -1
   }
   
   q = p + g
 
   while (arr[q]["type"]=="none-word" && q != -1 && q != arrL){
     q = q + g
   }
   
   var x = arr[p]
   arr[p] = arr[q]
   arr[q] = x
   
   document.getElementById(ai.toString()+'_'+p).innerHTML = arr[p]["w"]
   unselect(ai.toString()+'_'+p)
   
   document.getElementById(ai.toString()+'_'+q).innerHTML = arr[q]["w"]
   select(ai.toString()+'_'+q)
   lib[ai]["p"] = q
   // p = q
   printP()
 
}

const right = (arr) => move(arr, 1)
const left = (arr) => move(arr, 0)

function printP(item){
  document.getElementById("p").innerHTML = item.p
}