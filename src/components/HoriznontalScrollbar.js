import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";

import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HoriznontalScrollbar = (props) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {props.data.map((element) => {
        return (
          <Box
            key={element.id || element}
            itemId={element.id || element}
            title={element.id || element}
            m="0 40px"
          >
            {props.isBodyParts ? (
              <BodyPart
                item={element}
                bodyPart={props.bodyPart}
                setBodyPart={props.setBodyPart}
              />
            ) : (
              <ExerciseCard exercise={element} />
            )}
          </Box>
        );
      })}
    </ScrollMenu>
  );
};

export default HoriznontalScrollbar;
