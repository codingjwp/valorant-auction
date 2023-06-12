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

const imgSize = {
  "sm" : css`
    width: 40px;
    height: 40px;
  `,
  "md" : css`
    width: 80px;
    height: 80px;
  `,
  "lr" : css`
    width: 120px;
    height: 120px;
  `,
}

export const AvatarBaseImg = styled.img<AvatarImgProps>`
  ${props => props.size && imgSize[props.size]}
  ${props => props.shape === "rounded" && css`
    border-radius: 5px;
  `}
  ${props => props.shape === "circle" && css`
    border-radius: 50%;
  `}
  object-fit: fill;
`;

export const AvatarBaseName = styled.div`
  width: 100%;
  padding: 5px 0;
  color: white;
`;