const buttonEl= document.querySelector(".btn");
const appEl=document.getElementById("app");

// Getting all the notes stored in local Storage
getNotes().forEach(note => {
    const noteEl=createNote(note.id,note.content);
    appEl.insertBefore(noteEl,buttonEl);
});

// Creating notes 
function createNote(id,content){
    const noteEl=document.createElement("textarea");
    noteEl.classList.add("note");
    noteEl.placeholder="Empty Note";
    noteEl.value=content;

    //Event listener for deleting the note
    noteEl.addEventListener("dblclick",()=>{
        const warning=confirm("Do you want to delete this note?");
        if(warning){
            deleteNote(id,noteEl);
        }
    });
    
    // Event Listener for updating the note
    noteEl.addEventListener("input",()=>{
        updateNote(id,noteEl.value);
    });

    return noteEl;
}

// Deleting the note
function deleteNote(id,noteEl){
    const notes=getNotes().filter(note=>note.id!=id);
    saveNote(notes);
    appEl.removeChild(noteEl);
}

// Updating the note
function updateNote(id,content){
    const notes=getNotes();
    const noteEl=notes.filter((note)=>note.id==id)[0];
    noteEl.content=content;
    saveNote(notes);
}

// Adding the note 
function addNote(){
    let notes=getNotes();
    const noteobj={
        id: Math.floor(Math.random()*100000),
        content: ''
    };
    const noteEl=createNote(noteobj.id,noteobj.content);
    appEl.insertBefore(noteEl,buttonEl);
    notes.push(noteobj);
    saveNote(notes);
}

// To get the notes stored in the local storage
function getNotes(){
    return JSON.parse(localStorage.getItem("note-app") || "[]");
}
// Saving the notes in the local storage
function saveNote(notes){
    localStorage.setItem("note-app",JSON.stringify(notes));
}

// Handle the click on button to add the note
buttonEl.addEventListener("click",addNote);