import styled, { css } from "styled-components";

export const AvatarBaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const AvatarBaseHead = styled.div`
  width: 100%;
  padding: 5px 0;
  color: white;
`;

interface AvatarImgProps {
  size?: "sm" | "md" | "lr"
  shape?: "rounded" | "circle";
}

export const AvatarBaseImg = styled.img<AvatarImgProps>`
  ${props => props.shape === "rounded" && css`
    border-radius: 15px;
  `}
  ${props => props.shape === "circle" && css`
    border-radius: 50%;
  `}
  padding: 10px;
  object-fit: fill;
`;

export const AvatarBaseName = styled.div<{size?: string}>`
  width: 100%;
  padding: 5px 0;
  color: white;
  text-align: center;
  font-size: ${props => props.size === 'full' && '3rem'};
`;