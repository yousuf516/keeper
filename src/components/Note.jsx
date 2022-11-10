import React from "react";
import note from "../note";



function Note() {
    return (
        note.map(note => (
            <div className="note">
                <h1>{note.title}</h1>
                <p>{note.content}</p>
            </div>
        ))
    );
}

export default Note;