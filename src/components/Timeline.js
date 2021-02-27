import React from "react";
import { Avatar, Box, Grid, Typography } from "@material-ui/core";

import TimelineIcon from "./TimelineIcon";
import timelineData from "../assets/timelineData.json";

export default function Timeline() {
  const TimelineEventLeft = (props) => {
    return (
      <Grid item xs={4}>
        <Box
          style={{ color: "#104090" }}
          textAlign="right"
          overflow="visable"
          whiteSpace="nowrap"
        >
          {props.children}
        </Box>
      </Grid>
    );
  };

  const TimelineEventCenter = (props) => {
    return (
      <Grid item>
        {props.color === "highlight" ? (
          <Avatar style={{ backgroundColor: "#F0A000" }}>
            {props.children}
          </Avatar>
        ) : (
          <Avatar style={{ backgroundColor: "#104090" }}>
            {props.children}
          </Avatar>
        )}
      </Grid>
    );
  };

  const TimelineEventRight = (props) => {
    return (
      <Grid item xs={4}>
        <Box
          style={{ color: "#104090" }}
          textAlign="left"
          overflow="visable"
          whiteSpace="nowrap"
        >
          {props.children}
        </Box>
      </Grid>
    );
  };

  const TimelineEventConnector = (props) => {
    return (
      <Box style={{ color: "#104090" }} my={-1.5} textAlign="center">
        {props.begin ? "" : "|"}
      </Box>
    );
  };

  const TimelineEvent = (props) => {
    return (
      <>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          wrap="nowrap"
          spacing={1}
        >
          <TimelineEventLeft color={props.color}>
            {props.left}
          </TimelineEventLeft>
          <TimelineEventCenter color={props.color}>
            <TimelineIcon type={props.center} />
          </TimelineEventCenter>
          <TimelineEventRight color={props.color}>
            {props.right}
          </TimelineEventRight>
        </Grid>
      </>
    );
  };

  const TimelineEvents = (props) => {
    if (props.eventData.length) {
      return (
        <>
          {props.eventData.map((event) => {
            return (
              <>
                <TimelineEventConnector begin={props.eventData[0] === event} />
                <TimelineEvent
                  color={event.color}
                  end={props.eventData[0] === event}
                  center={event.icon}
                  left={event.time}
                  right={event.text}
                />
              </>
            );
          })}
        </>
      );
    }
    return <>error</>;
  };

  const TimelineCard = (props) => {
    return (
      <Grid item>
        <Box py={2}>
          <Box component="h2" mb={3} textAlign="center" color="#104090">
            {props.title}
          </Box>
          <TimelineEvents eventData={props.events} />
        </Box>
      </Grid>
    );
  };

  const TimelineCards = (props) => {
    if (props.data.length) {
      return (
        <>
          {props.data.map((day) => {
            return <TimelineCard title={day.date || ""} events={day.events} />;
          })}
        </>
      );
    }
    return <div>bad data</div>;
  };

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      spacing={5}
    >
      <TimelineCards data={timelineData} />
    </Grid>
  );
}
