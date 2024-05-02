import { Box, Grid, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import main from './video/video.mp4';
import './Welcomehome.css';

const Welcomehome = () => (
    <Box display='flex' justifyContent='center' textAlign='center'> 
        <div className="home-container">
            <div className="home-content">
                <h1 className="home-heading">RML JOB SEARCH</h1>
                <p className="home-description">
                Welcome to our advanced job search system! Our platform is designed to streamline and simplify the job search process, helping you find your dream job with ease. Whether you're a seasoned professional looking for new opportunities or just starting your career, we've got you covered.
                </p>
                <p className="home-description"></p>
                <Typography variant='h6' className="home-heading">MEMBERS OF THIS PROJECT:</Typography>
                <Typography className="home-description">ALSON FRED LEYVA</Typography>
                <Typography className="home-description">METCHLYR BALASABAS</Typography>
                <Typography className="home-description">REY OBARCO</Typography>

                <p className="home-description"></p>
            </div>
            <div className='video-background'>
        <video autoPlay loop muted className='video main-video' style={{ width: '100%', height: '100%' }}> <source src={main} type='video/mp4' />
        </video>
        </div>
        </div>
    </Box>
)
export default Welcomehome