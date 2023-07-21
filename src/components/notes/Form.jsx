import { useState, useRef, useContext } from "react";
import { Box, TextField, ClickAwayListener  } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DataContext } from "../../context/DataProvider";
import { v4 as uuid } from 'uuid';

const Container = styled(Box)`
    display: flex;
    flex-direction: column;    
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    border-color: #e0e0e0;
    padding: 10px 15px;
    width: 600px;
    border-radius: 8px;
    min-height: 30px;
    margin: 0.5rem 21rem;    
`

const note = {
    id: '',
    heading: '',
    text: ''
}

const Form = () => {
    const [showTextField, setShowtextField] = useState(false);
    const [addNote, setAddNote] = useState({...note, id: uuid()});

    const {setNotes} = useContext(DataContext);
    const containerRef = useRef();

    const onTextAreaClick = () => {
        setShowtextField(true);
        containerRef.current.style.minHeight = '70px'
    }

    const handleClickAway = () => {
        setShowtextField(false);
        containerRef.current.style.minHeight = '30px'

        setAddNote({ ...note, id: uuid() });
        if (addNote.heading || addNote.text) {
            setNotes(prevArr => [addNote, ...prevArr])
        }
    }

    const onTextChange = (e) => {
        let changedNote = { ...addNote, [e.target.name]: e.target.value }
        setAddNote(changedNote);
     }

    return (
      <ClickAwayListener onClickAway={handleClickAway}>
        <Container ref={containerRef}>
            {showTextField &&
                <TextField
                    placeholder="Title"
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                    style={{ marginBottom: 10 }}
                    onChange={(e) => onTextChange(e)}
                    name="heading"
                    value={addNote.heading}
                />
            }
            <TextField
                placeholder="Take a note...."
                variant="standard"
                multiline
                maxRows={Infinity}
                InputProps={{ disableUnderline: true }}
                onClick={onTextAreaClick}
                onChange={(e) => onTextChange(e)}
                name="text"
                value={addNote.text}
            />
            </Container>
        </ClickAwayListener> 
    )
}

export default Form;