import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

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
            <Link to="/agendar" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out shadow-lg">
                ¡Agenda tu cita Ahora!
            </Link>
        </Box>
    </>
  )
}

export default Main