const fs = require('fs');
const path = require('path');

const notesPath = path.join(__dirname, 'data', 'notes.json');

// to load notes

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync(notesPath);
        return JSON.parse(dataBuffer.toString());
    } catch (error){
        return [];
    }
};

// to save notes

const saveNotes = (notes) =>{
    fs.writeFileSync(notesPath, JSON.stringify(notes,null,2));
}

// to add notes

const addNote = (title,body) => {
    const notes = loadNotes();

    const duplicate = notes.find(note => note.title === title );
    if(duplicate){
        console.log("Note with this name already exists, try creating the note with a different name");
        return;
    }

    notes.push({
        id: Date.now(),
        title,
        body 
    });

    saveNotes(notes);
    console.log("Note added successfully !");

};

// to list notes

const listNotes = () => {
    const notes = loadNotes();

    if(notes.length === 0 ){
        console.log("No notes found");
        return;
    }

    console.log("List of all your notes : ");
    notes.forEach(note => {
        console.log(`- ${note.id}; ${note.title}`);      
    });
    
};

// to read notes

const readNote = (id) => {
    const notes = loadNotes();
    const note = notes.find(n => n.id === id );

    if(!note){
        console.log("note not found !");
        return;        
    }

    console.log(` ${note.title}`);
    console.log(note.body);     
};

// to delete notes 

const deleteNote = (id) => {
    const notes = loadNotes();
    const filternotes = notes.filter(note => note.id != id);

    if(notes.length === filternotes.length){
        console.log("Note not found");
        return;         
    }

    saveNotes(filternotes);
    console.log("Note deleted");
};

module.exports ={
    addNote,
    listNotes,
    readNote,
    deleteNote
};

