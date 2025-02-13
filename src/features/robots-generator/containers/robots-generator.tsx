import React from "react";
import { Container } from "../../../styles/common.styles";
import { RobotsList, RobotsForm, RobotsPreview } from "../components";

export const RobotsGenerator: React.FC = () => {
  return (
    <Container>
      <RobotsForm />
      <RobotsList />
      <RobotsPreview />
    </Container>
  );
};
