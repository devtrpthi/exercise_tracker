import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from '../assets/icons/gym.png';

function BodyPart({item, bodyPart, setBodyPart}) {
    return(
       <Stack
       type='button' alignItems='center' justifyContent='center' className="bodyPart-card"
       sx={{
                borderTop: bodyPart === item ? '4px solid #ff2625' : '',
                 backgroundColor: '#fff',
                borderBottomLeftRadius: '5px',
                width: '270px',
                heigth: '280px',
                cursor: 'pointer', gap: '47px' 
       }}
       >
        <img src={Icon} alt='dumbbell' style={{ width:'40px', height: '40px'}}/>
       </Stack>
    );
}

export default BodyPart;