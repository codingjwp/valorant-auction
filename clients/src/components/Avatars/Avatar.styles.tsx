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
  size?: "sm" | "md" | "lr" | 'full';
  shape?: "rounded" | "circle";
  type?: string;
}

export const AvatarBaseImg = styled.img<AvatarImgProps>`
  ${props => props.shape === "rounded" && css`
    border-radius: 15px;
  `}
  ${props => props.shape === "circle" && css`
    border-radius: 50%;
  `}
  margin: ${props => props.type === 'auction' && '10px'};
  object-fit: fill;
`;

export const AvatarNotImg = styled.div<AvatarImgProps>`
  border-radius: ${props => props.shape === 'rounded' ? '15px' : '50%'};
  border: 1px solid #008CBA;
  background-color: #5d5d5e;
  margin: ${props => props.type === 'auction' && '10px'};
  ${props => props.size === 'sm' && css`
    width: 40px;
    height: 40px;
  `}
  ${props => props.size === 'md' && css`
    width: 80px;
    height: 80px;
  `}
  ${props => props.size === 'lr' && css`
    width: 120px;
    height: 120px;
  `}
  ${props => props.size === 'full' && css`
    width: 200px;
    height: 200px;
  `}
`

export const AvatarBaseName = styled.div<{size?: string}>`
  width: 100%;
  color: white;
  text-align: center;
  padding: 5px 0;
  ${props => props.size === 'sm' && css` font-size: 0.6rem`}
  ${props => props.size === 'md' && css` font-size: 1rem`}
  ${props => props.size === 'lr' && css` font-size: 1.2rem`}
  ${props => props.size === 'full' && css` font-size: 2.5rem; `}
`;