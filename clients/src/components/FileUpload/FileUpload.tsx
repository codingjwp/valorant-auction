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
    const rating =  props.data as string;
    let fileData = [...members];

    if (files) {
      for (let i = 0; i < files.length; i++) {

        if (fileData.filter((item) => item.rating === rating).length === 5) {
          const rankData = fileData.filter((item) => item.rating === rating);
          fileData = [...fileData.filter((item) => item.idx !== rankData[0].idx)];
        }
        const fileBase64 = await fileBase64Change(files[i]);
        const fileBlob = base64ToBlob(fileBase64, files[i].type);
        const randomNum = Math.random().toString().split('.')[1];

        fileData.push({
          idx: `file-${rating}-${randomNum}`,
          name: files[i].name.split('.')[0],
          rating: rating,
          imgSrc: fileBlob
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
      <input ref={inputRef} type="file" id="file-upload" title="file-upload" name="file-upload" hidden multiple accept='image/*' onChange={handleChangeFile}/>
    </div>
  )
}

export default FileUpload;