
import {LightbulbOutlined as Lightbulb} from '@mui/icons-material';
import { Box, Typography, styled } from '@mui/material';

const Light = styled(Lightbulb)`
    font-size: 140px;
    color:#D8D8D8 ;
`

const Text= styled(Typography)`
    font-size: 22px;
    color:#80868b ;
`

const Container= styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20vh;
    gap: 1rem;
`

const EmptyNotes = () => {
    return (
        <Container>
            <Light />
            <Text>Notes you add appear here</Text>
        </Container>
    )   
}

export default EmptyNotes;