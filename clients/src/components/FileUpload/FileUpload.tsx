import { useEffect, useRef, useState } from 'react';
import { FileUploadBase, FileUploadProps, FileImgBase, FileImgSvgs } from './FileUpload.styles';
import { useRecoilState } from 'recoil';
import { memberStates } from '../../states/roomState';


export const FileUpload = (props: FileUploadProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [members, setMembers] = useRecoilState(memberStates);
  const [fileContent, setFileContent] = useState("The image file does not exist.");

  const handleBaseClick = () => {
    inputRef.current?.click();
  }

  const handleChangeFIle = () => {
    const files = inputRef.current?.files;
    const rating =  props.data as string;
    let fileData = [...members];
    if (files) {

      for (let i = 0; i < files.length; i++) {

        if (fileData.filter((item) => item.rating === rating).length === 5) {
          const rankData = fileData.filter((item) => item.rating === rating);
          fileData = [...fileData.filter((item) => item.idx !== rankData[0].idx)];
        }
        const randomNum = Math.random().toString().split('.')[1];
        fileData.push({
          idx: `file-${rating}-${randomNum}`,
          name: files[i].name.split('.')[0],
          rating: rating,
          imgSrc: files[i],
        })

      }
      setMembers(fileData);
      setFileContent(`${rating} Group image download`);
    }
  }

  useEffect(() => {
    let times: number | undefined  = undefined;
    if (fileContent !== "The image file does not exist.") {
       times = setTimeout(() => {
        setFileContent("The image file does not exist.")
      }, 5000);
    }
    return () => {
      clearTimeout(times as number);
    }
  }, [fileContent])

  return (
    <div>
      <FileUploadBase onClick={handleBaseClick}>
        {props.baseContnet}
      </FileUploadBase>
      <FileImgBase load={fileContent.slice(0,1)}>
        <FileImgSvgs />
        {fileContent}
        <span></span>
      </FileImgBase>
      <input ref={inputRef} type="file" id="file-upload" title="file-upload" name="file-upload" hidden multiple accept='image/*' onChange={handleChangeFIle}/>
    </div>
  )
}

export default FileUpload;