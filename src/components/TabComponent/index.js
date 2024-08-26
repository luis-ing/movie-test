import React from "react";
import styled from "styled-components";

const PrettyTab = styled.button`
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 100%;
  padding: 10px 15px;
  position: relative;
  background: white;
  cursor: pointer;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  min-width: 0;
  position: relative;
  user-select: none;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: ${(props) => (props?.isSelected ? "1px solid #eeeeee" : "0px solid #eeeeee")};
  background: ${(props) => (props?.isSelected ? "rgba(255, 255, 2555, 0.1)" : "rgba(255, 255, 2555, 0.05)")};
`;

const TabComponent = ({ children, onClick, isSelected = false }) => {
  return <PrettyTab onClick={onClick} isSelected={isSelected}>{children}</PrettyTab>;
};

export default TabComponent;
