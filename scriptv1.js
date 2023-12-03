
//save comment by adding it to the my notes section



//create a paragraph to store the new notes
let pcom1 = document.createElement("p");

//get container hosting notes- notes will be appended here
let innotes = document.querySelector(".innernotes");

let commentsList = [];
let saveComment = () => {
//get value
//get note from input
let newcom = document.getElementById("noteId");


for(i = 0; i < commentsList.length;i++) {
    commentsList = commentsList.push(newcom[i].value);
}

let newcomm = commentsList[0];

pcom1.setAttribute("class", "editacts");
pcom1.innerHTML = newcomm;

//get mynotes box

innotes.appendChild(pcom1);

//onclick, the note should display the edit banner
pcom1.setAttribute("onclick", "showBanner()");

}


//get container with action btns
let accont = document.querySelector(".editactions");


let showBanner = () => {

accont.classList.remove("hideacts"); //remove the class - because it hosts the display:none declaration
}

//when actions appear;
//close button should remove the note from the main section and add it in the deleted section

let dlist = document.querySelector(".deletedbox");
let deleteThis = () => {
let deleted = pcom1;
innotes.removeChild(deleted);

//add to delete list
dlist.appendChild(deleted);
accont.classList.add("hideacts");
deleted.removeAttribute("onclick", "showBanner()");
noted.removeAttribute("contenteditable", "true");

}

//edit note
let noted = pcom1;

let editNote = () => {
let noted = pcom1;
noted.setAttribute("contenteditable", "true");
}






