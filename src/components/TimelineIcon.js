import React from "react";

import BuildIcon from "@material-ui/icons/Build";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import PollIcon from "@material-ui/icons/Poll";
import FunctionsIcon from "@material-ui/icons/Functions";
import SportsVolleyballIcon from "@material-ui/icons/SportsVolleyball";

export default function TimelineIcon(props) {
  if (props.type === "BuildIcon") {
    return <BuildIcon />;
  } else if (props.type === "Brightness2Icon") {
    return <Brightness2Icon />;
  } else if (props.type === "Brightness7Icon") {
    return <Brightness7Icon />;
  } else if (props.type === "RestaurantIcon") {
    return <RestaurantIcon />;
  } else if (props.type === "HowToRegIcon") {
    return <HowToRegIcon />;
  } else if (props.type === "EqualizerIcon") {
    return <EqualizerIcon />;
  } else if (props.type === "PollIcon") {
    return <PollIcon />;
  } else if (props.type === "FunctionsIcon") {
    return <FunctionsIcon />;
  } else if (props.type === "SportsVolleyballIcon") {
    return <SportsVolleyballIcon />;
  } else {
    return <>&ensp;</>;
  }
}
