"use client";
import { shouldNotForwardPropsWithKeys } from "@/utils";
import { PropsWithChildren } from "react";
import styled from "styled-components";

interface ITitleProps extends PropsWithChildren {
  level: number;
  centered?: boolean;
}

const StyledTitle = styled(({ level, children, ...props }: ITitleProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag {...props}>{children}</Tag>;
}).withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<ITitleProps>(["centered"]),
})`
  text-align: ${({ centered }) => (centered ? "center" : "left")};
  font-size: ${({ level }) => (level === 1 ? "3rem" : level === 2 ? "2.5rem" : level === 3 ? "2rem" : "1.5rem")};
  font-weight: ${({ level }) => (level === 1 ? "bold" : level === 2 ? "600" : "500")};
`;

const Title: React.FC<ITitleProps> = ({ children, ...otherProps }) => {
  return <StyledTitle {...otherProps}>{children}</StyledTitle>;
};

export default Title;
