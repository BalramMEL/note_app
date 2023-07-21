import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

const StyledCard = styled(Card)`
    width: 240px;
    height: auto;
    margin: 2rem;    
    box-shadow: none;
    border-radius: .8rem;
    border: 1px solid #e0e0e0;
`

const Note = ({ note }) => {

    const { notes, setNotes, setArchiveNotes, setDeleteNotes } = useContext(DataContext);
    
    const archiveNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setArchiveNotes(prevArr => [note, ...prevArr]);
    }
    const deleteNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setDeleteNotes(prevArr => [note, ...prevArr]);
    }

    return (
        <StyledCard>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions>
                <ArchiveOutlinedIcon
                    style={{ marginLeft: 'auto' }}
                    fontSize="small"
                    onClick = {() => archiveNote(note)}
                />
                <DeleteOutlineOutlinedIcon                    
                    fontSize="small"
                    onClick = {() => deleteNote(note)}
                />
            </CardActions>
        </StyledCard>        
    )
}

export default Note;