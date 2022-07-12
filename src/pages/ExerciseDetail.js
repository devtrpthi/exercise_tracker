import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";

import {exerciseOptions, fetchData} from './utils/fetchData';



function ExerciseDetail() {
    return(
        <Box>
            <Detail/>
            <ExerciseVideos/>
            <SimilarExercises/>
        </Box>
    );
}

export default ExerciseDetail;