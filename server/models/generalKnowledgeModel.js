const uniqid = require('uniqid');
const fs = require('fs');
const path = require('path');

function readNotes(){
    const filePath = path.join(__dirname, '../data/generalKnowledge.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const notes = JSON.parse(fileContent);

    return notes;
};

function add(data) {
    const notes = readNotes();
    const newNote = {
        "id": uniqid(),
        "question": data.question,
        "image": data.image,
        "options": data.options,
        "answer": data.answer
    };

    const filePath = path.join(__dirname, '../data/generalKnowledge.json');
    notes.push(newNote);        
    fs.writeFileSync(filePath, JSON.stringify(notes));
    return notes;
}

module.exports = {
    readNotes,
    add
}