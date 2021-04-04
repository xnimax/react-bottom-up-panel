import React, { FC, useState } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

const WINDOW_HEIGHT = window.innerHeight;
const PANEL_HEIGHT_SIZE = WINDOW_HEIGHT / 1.8;
const FONT_COLOR = "#000";
const BACKGROUND_COLOR = "#2980b9";
interface Props {
  children?: JSX.Element[] | JSX.Element | string;
}
interface positionType {
  x: number;
  y: number;
}
const Panel: FC<Props> = ({ children }) => {
  const [posY, setPosY] = useState(PANEL_HEIGHT_SIZE);
  const nodeRef = React.useRef(null);

  const handleStop = (e: any, position: positionType) => {
    const { y } = position;
    let newHeight = 0;
    if (y < PANEL_HEIGHT_SIZE && posY === PANEL_HEIGHT_SIZE) newHeight = 0;
    else if (y >= 0) newHeight = PANEL_HEIGHT_SIZE;
    setPosY(newHeight);
  };
  const handleDrag = (e: any, position: positionType) => {};

  return (
    <Wrap >
      <GlobalStyle />
      <Draggable
        nodeRef={nodeRef}
        cancel=".homeData"
        allowAnyClick={true}
        enableUserSelectHack={true}
        axis="y"
        handle=".bgPane"
        defaultPosition={{ x: 0, y: 0 }}
        position={{ x: 0, y: posY }}
        onStop={handleStop}
        onDrag={handleDrag}
      >
        <Container className="bgPane" ref={nodeRef}>
          {children}
        </Container>
      </Draggable>
    </Wrap>
  );
};

export default Panel;

const Wrap = styled.div`
  position:absolute;
  bottom:0;
  width:100%;
  left:0;
  right:0;
  overflow: hidden;
`;

const Container = styled.div`
  position: relative;
  bottom: 0;
  max-width: 100%;
  display: block;
  height: ${WINDOW_HEIGHT}px;
  z-index: 999;
  background-color: ${BACKGROUND_COLOR};
  transition: all 0.5s cubic-bezier(0.47, 1.64, 0.41, 0.8);
  padding: 20px 15px 15px;
  color: ${FONT_COLOR};
  background-size: 100%;
`;
