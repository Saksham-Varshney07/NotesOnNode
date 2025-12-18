const {
    addNote,
    listNotes,
    readNote,
    deleteNote
} = require('./notes');

const command = process.argv[2];

switch(command){
    case 'add':
        addNote(process.argv[3], process.argv[4]);
        break;

    case 'list':
        listNotes();
        break;
    
    case 'read':
        readNote(Number(process.argv[3]));
        break;

    case 'delete':
        deleteNote(Number(process.argv[3]));
        break;

        default:
            console.log(`
                Available commands:
                add "title" "body"
                list
                read <id>
                delete <id>
                `);
}