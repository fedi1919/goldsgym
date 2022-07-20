import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HoriznontalScrollbar from "./HoriznontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = (props) => {
  console.log(props);
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      <Typography variant="h3">
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {props.length ? <HoriznontalScrollbar data={props} /> : <Loader />}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
