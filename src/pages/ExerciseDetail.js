import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";
import {exerciseOptions, fetchData} from '../utils/fetchData';
import Details from "../components/Details";
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';



function ExerciseDetail() {
    const[exerciseDetail, setExerciseDetail] = useState();
    return(
        <Box>
            <Details exerciseDetail={exerciseDetail} />
            <ExerciseVideos/>
            <SimilarExercises/>
        </Box>
    );
}

export default ExerciseDetail;