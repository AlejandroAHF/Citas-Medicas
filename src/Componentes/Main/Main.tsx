import { Box, Typography, Button } from '@mui/material';

const Main = () => {
  return (
    <>
        <Box
        sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
            textAlign: 'center',
        }}
        >
        <Typography variant="h2" gutterBottom>
            ¡Bienvenido a Citas Médicas!
        </Typography>
        <Typography variant="h6" gutterBottom>
            Agenda tu cita médica de manera rápida y sencilla con los mejores especialistas.
        </Typography>
        <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ marginTop: '20px' }}
        >
            ¡Agenda tu cita Ahora!
        </Button>
        </Box>
    </>
  )
}

export default Main