import {Box} from "@mui/material"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Components
import SwipeDrawer from "./SwipeDrawer";
import Notes from "./notes/Notes";
import DeleteNotes from "./delete/DeleteNotes";
import Archives from './archives/archives';

const Home = () => {
    return (
        <Box sx={{ display: 'flex', width: "100%" }}>   
            <Router>
                <SwipeDrawer />
                <Routes>
                    <Route path="/" element={<Notes />} />
                    <Route path="/archives" element={<Archives />} />
                    <Route path="/delete" element={<DeleteNotes />} />
                </Routes>
                
            </Router>    
        </Box>
    )    
}

export default Home;