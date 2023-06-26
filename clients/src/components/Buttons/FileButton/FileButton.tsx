import { useRef } from 'react';
import Button from "../Button";
import { useRecoilState } from 'recoil'
import { directorStates } from '../../../states/roomState'

interface FileBtnProps {
  idx: string,
  size?: "sm" | "md" | "lr" | "half" | "full";
  multiple?: boolean;
  name: string;
}

const FileButton = (props: FileBtnProps) => {
  const [directors, setDirectors] = useRecoilState(directorStates);
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleBtnClick = () => {
    inputRef.current?.click();
  }

  const fileBase64Change = async (file: File): Promise<string> => {
    return await new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result as string);
      fileReader.onerror = reject;
      fileReader.readAsDataURL(file);
    })
  }

  const base64ToBlob = (fileBase64: string, fileType = "") => {
    const header = fileBase64.split(',')[1];
    const binaryData = atob(header);
    const arrays = new Uint8Array(binaryData.length);
    for (let i = 0; i < binaryData.length; i++) {
      arrays[i] = binaryData.charCodeAt(i);
    }
    const blobs = new Blob([arrays], {type: fileType});
    return blobs;
  }

  const handleChangeFile = async () => {
    const files = inputRef.current?.files;
    if (files) {
      const fileBase64 = await fileBase64Change(files[files.length - 1]);
      const fileBlob = base64ToBlob(fileBase64, files[files.length - 1].type);
      const result = directors.find((item) => item.idx === props.idx);
      if (result) {
        setDirectors([
          ...(directors.filter((item) => item.idx !== props.idx)), {
            idx: result.idx,
            nick: result.nick,
            point: 0,
            imgSrc: fileBlob,
            member: []
          }])
      }
    }
  }

  return (
    <div>
      <Button 
        type="button"
        name={`${props.name}-btn`}
        size="sm"
        decor="variant-red"
        color="#f5f5f5"
        onClick={handleBtnClick}>이미지 등록</Button>
      <input 
        ref={inputRef} 
        type="file" 
        title={`${props.name}-title`}
        name={`${props.name}-name`}
        id={`${props.name}-id`}
        hidden 
        multiple 
        accept='image/*' 
        onChange={handleChangeFile} />
    </div>
  )
}

export default FileButton;