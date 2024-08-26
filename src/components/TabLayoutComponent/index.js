import React from "react";
import styled from "styled-components";

const PrettyTabLayout = styled.div`
  display: flex;
  width: 100%;
  background: rgba(255, 255, 2555, 0.05);
  padding: 5px 5px 0;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  height: 40px;
`;

const TabLayoutComponent = ({ children }) => {
  return <PrettyTabLayout>{children}</PrettyTabLayout>;
};

export default TabLayoutComponent;
