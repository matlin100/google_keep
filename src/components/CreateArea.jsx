import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setIsOpen(false);
    event.preventDefault(); //prevent refresh page
  }

  return (
    <div>
      <form>
        <input
          onClick={() => setIsOpen(true)}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        {isOpen && (
          <React.Fragment>
            <textarea
              name="content"
              onChange={handleChange}
              value={note.content}
              placeholder="Take a note..."
              rows="3"
            />
            <Zoom in={true}>
              <Fab className="addbutton" onClick={submitNote}>
                <AddIcon />
              </Fab>
            </Zoom>
          </React.Fragment>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
