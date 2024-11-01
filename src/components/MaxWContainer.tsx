"use client";
import { shouldNotForwardPropsWithKeys } from "@/utils";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";

interface IMaxWContainerProps extends PropsWithChildren {
  isFlex?: boolean;
  justifyContent?: string;
  alignItems?: string;
  paddingBlock?: string;
  paddingInline?: string;
  gap?: string;
  wrap?: boolean;
}

const StyledMaxWContainer = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<IMaxWContainerProps>([
    "alignItems",
    "justifyContent",
    "paddingBlock",
    "isFlex",
    "paddingInline",
    "gap",
    "wrap",
  ]),
})<IMaxWContainerProps>`
  display: ${({ isFlex }) => (isFlex ? "flex" : "block")};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};
  max-width: 1280px;
  margin: 0 auto;
  padding: 0px 1rem;
  padding-block: ${({ paddingBlock }) => paddingBlock && paddingBlock};
  padding-inline: ${({ paddingInline }) => paddingInline && paddingInline};
`;

const MaxWContainer: React.FC<IMaxWContainerProps> = ({ children, ...otherProps }) => {
  return <StyledMaxWContainer {...otherProps}>{children}</StyledMaxWContainer>;
};

export default MaxWContainer;
