
let notesArray = 
[
    {title:"note one", body:"Lorem Ipsum"},
    {title:"note two", body:"Lorem Ipsum"}
];

function remove() {
    let notes = document.querySelector("#text-area");
    let noteButtons = document.querySelector(".notebuttons");
    if (noteButtons.style.display == "flex" || noteButtons.style.display == "") {
        noteButtons.style.display = "none";
        notes.style.display = "none";
    }
}


function newNote() {
    let notes = document.querySelector("#text-area");
    let noteButtons = document.querySelector(".notebuttons");
    let textBox = document.querySelector(".note-area");
    if (noteButtons.style.display == "none"){
        noteButtons.style.display = "flex";
        notes.style.display = "flex";
    }
    else{
        textBox.value = "";
    }
}


function save() {
    let noteList = document.querySelector("nav > ul > li:last-child");
    let textBox = document.querySelector(".note-area");
    var title = textBox.value.split("\n")[0];
    let newObj = {title: title, body: textBox.value};
    notesArray.push(newObj);
    let newListItem = document.createElement("li");
    newListItem.innerHTML = title;
    newListItem.id = "note"+notesArray.length;
    newListItem.addEventListener('click', function(){update(this); }, false);
    noteList.after(newListItem);
}


function update(saved) {
    let textBox = document.querySelector("#text-area");
    let index = saved.id;
    index = index.replace(".note_area", "") - 1;
    textBoxObj = notesArray[index];;
    textBox.value = textBoxObj.body;
}

function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("side").style.marginLeft = "250px";
  }
  
  
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("side").style.marginLeft = "0";
  }

  function darkMode() {
    let header = document.querySelector("header");
    let newNote = document.querySelector("#new");
    let save = document.querySelector("#save");
    let side = document.querySelector(".side");
    let main = document.querySelector(".main");
    let notes = document.querySelector(".note-area");
    let remove = document.querySelector("#remove");
    let dark = document.querySelector("#dark");
    let footer = document.querySelector("footer");
    if (!(header.style.backgroundColor == "#3935525")) {
        dark.innerHTML = "Light Mode";
        header.style.backgroundColor = "#393552";
        newNote.style.backgroundColor = "#6e6a86";
        save.style.backgroundColor = "#232136";
        side.style.backgroundColor = "#393552";
        main.style.backgroundColor = "#59546d";
        remove.style.backgroundColor = "#2a273f";
        footer.style.backgroundColor = "#232136";
    }
    else {
        dark.innerHTML = "Dark Mode";
        header.style.backgroundColor = "#9893a5";
        newNote.style.backgroundColor = "#c4a7e7";
        save.style.backgroundColor = "#575279";
        side.style.backgroundColor = "#9893a5";
        main.style.backgroundColor = "#f2e9de";
        remove.style.backgroundColor = "#6e6a86";
        footer.style.backgroundColor = "#575279";
    }
}
function init(){
    let note1 = document.querySelector("#note-1");
    let note2 = document.querySelector("#note-2");
    note1.addEventListener('click', function(){update(this); }, false);
    note2.addEventListener('click', function(){update(this); }, false);
}

init()


  