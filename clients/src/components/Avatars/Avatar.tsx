import { SyntheticEvent } from "react";
import { AvatarBaseContainer, AvatarBaseHead, AvatarBaseImg, AvatarBaseName } from "./Avatar.styles"

interface AvatarProps {
  headContent?: string;
  nameContent?: string;
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lr"
  shape?: "rounded" | "circle";
}

export default function Avatar(props: AvatarProps) {
  const handleImgSrcError = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = "/src/assets/svgs/baseavatar.svg";
  }

  return (
    <AvatarBaseContainer>
      {props.headContent ? <AvatarBaseHead>{props.headContent}</AvatarBaseHead> : null}
      {props.src 
      ? <AvatarBaseImg size={props.size || "sm"} shape={props.shape} src={props.src} alt={props.src} onError={handleImgSrcError} />
      : <AvatarBaseImg size={props.size || "sm"} shape={props.shape} src="/src/assets/svgs/baseavatar.svg" alt={`baseImg-${props.src}`} />}
      {props.nameContent ? <AvatarBaseName>{props.nameContent}</AvatarBaseName> : null}
    </AvatarBaseContainer>
  )
}