//  fetch('https://examiner-service.onrender.com/hi').then(respose => { return respose.json()}).then(data => alert(data.a))
const ftch = (wort, wortart) => {
  if(wort == "trinken" && wortart == "verb"){
    return {
  verbe: [
    {id:"trinken"}
    ],
  nomen: [
    {id:"Wasser"},
    {id:"Bier"}
    ]}
}else if(wort == "essen" && wortart == "verb"){
  return {
    verbe: [
      { id: "essen" }
      ],
    nomen: [
      { id: "Brot" },
      { id: "Sandwich" },
      { id: "Steak" }
      ]
  }
  }
}

var words = {}
words = ftch("trinken", "verb")
words = ftch("essen", "verb")

var t1 = document.getElementById("t1")
var d1 = document.getElementById("d1")

var max_l = words.nomen.length
if (words.nomen.length < words.verbe.length) max_l = words.verbe.length

Array(max_l).fill(0).map((_, i) => {
  var tr = document.createElement("tr")
  var td1 = document.createElement("td")

if (i<words.verbe.length){
  td1.innerHTML = words.verbe[i].id
}

var td2 = document.createElement("td")
if (i<words.nomen.length){
  td2.innerHTML = words.nomen[i].id
}

tr.appendChild(td1)
tr.appendChild(td2)
t1.appendChild(tr)
})
 




var debug_element = document.createElement("div")
debug_element.innerHTML = ftch("trinken", "verb").verbe[0].id
d1.appendChild(debug_element)