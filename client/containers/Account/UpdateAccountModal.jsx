import React, { useContext } from 'react'
import Modal from '@mui/material/Modal';
import { Button, IconButton, TextField, Box, Typography } from '@mui/material';
import { Cancel } from '@mui/icons-material'
import { UserContext } from '../../context/UserContext';

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

export default function UpdateAccountModal({ children }) {
    const { username, setUsername, handleUpdate, setEmail, email } = useContext(UserContext)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        handleUpdate({ username, email })
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
                        <Typography variant="h6">Edit Profile</Typography>
                        <IconButton onClick={handleClose}>
                            <Cancel />
                        </IconButton>
                    </Box>
                    <Box display={'flex'} alignItems={'center'} gap={'10px'} component={'form'} onSubmit={handleSubmit}>
                        <div>
                            <TextField fullWidth value={username} onChange={(e) => setUsername(e.target.value)} sx={{ bgcolor: '#333333' }} />
                            <TextField fullWidth value={email} onChange={(e) => setEmail(e.target.value)} sx={{ bgcolor: '#333333' }} />
                            <Button type='submit' variant='contained' color='secondary' sx={{ mt: "15px", display: 'block', borderRadius: '25px', width: '100px', float: 'right' }}>Save</Button>
                        </div>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}