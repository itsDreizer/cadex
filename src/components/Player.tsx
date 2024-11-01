"use client";

import { shouldNotForwardPropsWithKeys } from "@/utils";
import dynamic from "next/dynamic";
import { YouTubePlayerProps } from "react-player/youtube";
import styled from "styled-components";

interface IPlayerProps extends YouTubePlayerProps {
  minHeight?: string;
  maxHeight?: string;
  minWidth?: string;
  maxWidth?: string;
  aspectRatio?: number;
}

const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false });

const StyledPlayer = styled(ReactPlayer).withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys<IPlayerProps>([
    "minHeight",
    "maxHeight",
    "minWidth",
    "maxWidth",
    "aspectRatio",
  ]),
})<IPlayerProps>`
  min-height: ${({ minHeight }) => minHeight};
  min-width: ${({ minHeight }) => minHeight};
  max-height: ${({ maxHeight }) => maxHeight};
  max-width: ${({ maxWidth }) => maxWidth};
  aspect-ratio: ${({ aspectRatio }) => aspectRatio};
`;

const Player: React.FC<IPlayerProps> = (props) => {
  return <StyledPlayer {...props} />;
};

export default Player;
