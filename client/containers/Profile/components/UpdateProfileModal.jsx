import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, IconButton, TextField, Avatar } from '@mui/material';
import { Cancel } from '@mui/icons-material'
import { UserContext } from '../../../context/UserContext';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#121212',
    boxShadow: 24,
    p: 4,
};

export default function UpdateProfileModal({ children }) {
    const { username, setUsername, handleUpdate } = useContext(UserContext)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        handleUpdate({ username })
        setOpen(false)
    }

    return (
        <div>
            <Box onClick={handleOpen}>{children}</Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography variant="h6">Update Profile</Typography>
                        <IconButton onClick={handleClose}>
                            <Cancel />
                        </IconButton>
                    </Box>
                    <Box display={'flex'} alignItems={'center'} gap={'10px'} component={'form'} onSubmit={handleSubmit}>
                        <Avatar sx={{ width: '150px', height: '150px', cursor: 'pointer' }} />
                        <div>
                            <TextField fullWidth value={username} onChange={(e) => setUsername(e.target.value)} sx={{ bgcolor: '#333333' }} />
                            <Button type='submit' variant='contained' color='secondary' sx={{ mt: "15px", display: 'block', borderRadius: '25px', width: '100px', float: 'right' }}>Save</Button>
                        </div>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}