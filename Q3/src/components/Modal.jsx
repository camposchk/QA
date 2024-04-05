import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Tilt } from 'react-tilt'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export const MyModal = ({ character }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button onClick={handleOpen} style={{marginLeft: 100, marginBottom: 10}}>Info</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Tilt options={defaultOptions}>
                        <img src={character.image}></img>
                    </Tilt>
                    <Typography style={{ color: 'black' }} id="modal-modal-title" variant="h6" component="h2">
                        {character.name}
                    </Typography>
                    <Typography style={{ color: 'black' }} id="modal-modal-description" sx={{ mt: 2 }}>
                        {character.species}
                    </Typography>
                    <Typography style={{ color: 'black' }} id="modal-modal-description" sx={{ mt: 2 }}>
                        {character.gender}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
