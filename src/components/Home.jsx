import {Box} from "@mui/material"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, { useEffect, useState } from "react";

//Components
import SwipeDrawer from "./SwipeDrawer";
import Notes from "./notes/Notes";
import DeleteNotes from "./delete/DeleteNotes";
import Archives from './archives/archives';

const Home = () => {
    const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

    return (
        <Box sx={{ display: 'flex', width: "100%" }}>   
            <Router>
                <SwipeDrawer />
                <Routes>
                    <Route path="/" element={<Notes />} />
                    <Route path="/archives" element={<Archives notes={notes} setNotes={setNotes}/>} />
                    <Route path="/delete" element={<DeleteNotes notes={notes} setNotes={setNotes} />} />
                </Routes>
                
            </Router>    
        </Box>
    )    
}

export default Home;