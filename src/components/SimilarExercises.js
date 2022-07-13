import React from "react";
import { Box, Stack, Typograpgy, Typography } from "@mui/material";
import HorizontalScrollbar from './Horizontalscrollbar';
import Loader from "./Loader";

function SimilarExercises({targetMuscleExercises,equipmentExercises}) {
    return(
       <Box sx={{mt: {lg:'100px' ,xs: '0'}}}>
        <Typography variant='h3'>Exercises that target same muscle group</Typography>
        <Stack direction='row' sx={{p:'2', position: 'relative'}}>
            {targetMuscleExercises.length ?
             <HorizontalScrollbar data={targetMuscleExercises}/>
             :<Loader/>}
        </Stack>
       </Box>
    );
}

export default SimilarExercises;