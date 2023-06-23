import { SyntheticEvent } from "react";
import { AvatarBaseContainer, AvatarBaseHead, AvatarBaseImg, AvatarBaseName } from "./Avatar.styles"
import { useImageChange } from '../../custom/imageChange'

interface AvatarProps {
  headContent?: string;
  nameContent?: string;
  src?: string | File;
  alt?: string;
  size?: "sm" | "md" | "lr" | "full"
  shape?: "rounded" | "circle";
}

const Avatar = (props: AvatarProps) => {
  const imageFile = useImageChange(props.src);
  const imgSize = {
    "sm": {
      "width": '40px',
      "height": '40px',
    },
    "md": {
      "width": '80px',
      "height": '80px',
    },
    "lr": {
      "width": '120px',
      "height": '120px',
    },
    "full": {
      "width": '200px',
      "height": '200px',
    }
  }

  const handleImgSrcError = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = "/src/assets/svgs/baseavatar.svg";
  }

  return (
    <AvatarBaseContainer>
      {props.headContent ? <AvatarBaseHead>{props.headContent}</AvatarBaseHead> : null}
      {props.src 
      ? <AvatarBaseImg width={imgSize[props.size || "sm"].width} height={imgSize[props.size || "sm"].height} shape={props.shape} src={imageFile} alt={props.alt} onError={handleImgSrcError} />
      : <AvatarBaseImg width={imgSize[props.size || "sm"].width} height={imgSize[props.size || "sm"].height} shape={props.shape} src="/src/assets/svgs/baseavatar.svg" alt={`baseImg-${props.alt}`} />}
      {props.nameContent ? <AvatarBaseName size={props.size} >{props.nameContent}</AvatarBaseName> : null}
    </AvatarBaseContainer>
  )
}

export default Avatar;