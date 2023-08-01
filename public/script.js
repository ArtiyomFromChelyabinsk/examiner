//  fetch('https://examiner-service.onrender.com/hi').then(respose => { return respose.json()}).then(data => alert(data.a))
const ftch = (wort, wortart) => {
  if(wort == "trinken" && wortart == "v"){
    return {
  verbe: [
    {id:"trinken"}
    ],
  nomen: [
    {id:"Wasser"},
    {id:"Bier"}
    ]}
}else if(wort == "essen" && wortart == "v"){
  return {
    verbe: [
      { id: "essen" }
      ],
    nomen: [
      { id: "Brot" },
      { id: "Kaese" },
      { id: "Steak" }
      ]
    }
  }else if(wort == "schneiden" && wortart == "v"){
  return {
    verbe: [
      { id: "schneiden" }
      ],
    nomen: [
      { id: "Brot" },
      { id: "Kaese" }
      ]
    }
  }else if(wort == "Steak" && wortart == "n"){
  return {
    verbe: [
      { id: "essen" },
      { id: "braten" }
      ],
    nomen: [
      { id: "Steak" }
      ]
    }
  }else if(wort == "Kaese" && wortart == "n"){
  return {
    verbe: [
      { id: "essen" },
      { id: "schneiden" }
      ],
    nomen: [
      { id: "Kease" }
      ]
    }
  }else if (wort == "Brot" && wortart == "n") {
    return {
      verbe: [
        { id: "essen" },
        { id: "schneiden" }
        ],
      nomen: [
        { id: "Brot" }
        ]
    }
  }
}


var words = {}


var t1 = document.getElementById("t1")
var d1 = document.getElementById("d1")


const update = (wort, wortart) => {
  
  t1.innerHTML = ""
  
  words = ftch(wort, wortart)
  
  var max_l = words.nomen.length
if (words.nomen.length < words.verbe.length) max_l = words.verbe.length

Array(max_l).fill(0).map((_, i) => {
  var tr = document.createElement("tr")
  var td1 = document.createElement("td")

if (i<words.verbe.length){
  var idv = words.verbe[i].id
  td1.innerHTML = idv
  td1.onclick = () => {
    update(idv, "v")
  }
}

var td2 = document.createElement("td")
if (i<words.nomen.length){
  var id = words.nomen[i].id
  td2.innerHTML = id
  td2.onclick = () => {
    update(id, "n")
  }
}

tr.appendChild(td1)
tr.appendChild(td2)
t1.appendChild(tr)
})
 
}


//update("trinken", "verb")
//update("essen", "verb")
update("Steak", "n")







var debug_element = document.createElement("div")
debug_element.innerHTML = ftch("trinken", "verb").verbe[0].id
d1.appendChild(debug_element)