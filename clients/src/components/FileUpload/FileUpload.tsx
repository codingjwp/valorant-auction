import { useRef, useState } from 'react';
import { FileUploadBase, FileUploadProps } from './FileUpload.styles';
import { useRecoilState } from 'recoil';
import { memberStates } from '../../states/roomState';
import Select from '../Selects/Select';


export const FileUpload = (props: FileUploadProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const selectRef = useRef<HTMLSelectElement | null>(null)
  const [members, setMembers] = useRecoilState(memberStates);
  const [groipID, setGroupID] = useState<string | null>(null);
  const gropList = [
    {
      idx: 'grop-a',
      value: 'A',
      label: 'A Group'},
    {
      idx: 'grop-b',
      value: 'B',
      label: 'B Group'},
    {
      idx: 'grop-c',
      value: 'C',
      label: 'C Group'},
    {
      idx: 'grop-d',
      value: 'D',
      label: 'D Group'},
    {
      idx: 'grop-E',
      value: 'E',
      label: 'E Group'}];

  const handleBaseClick = () => {
    inputRef.current?.click();
    setGroupID('A');
  }

  const handleChangeFIle = () => {
    const files = inputRef.current?.files;
    const rating =  (selectRef.current as HTMLSelectElement).value
    let fileData = [...members];
    if (files) {

      for (let i = 0; i < files.length; i++) {

        if (fileData.filter((item) => item.rating === rating).length === 5) {
          const rankData = fileData.filter((item) => item.rating === rating);
          fileData = [...fileData.filter((item) => item.idx !== rankData[0].idx)];
          console.log("test", fileData);
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
    }
  }

  return (
    <div>
      <Select ref={selectRef} seletId={groipID} title="select-group" sizes="full" optionlist={gropList}/>
      <FileUploadBase onClick={handleBaseClick}>
        {props.baseContnet}
      </FileUploadBase>
      <input ref={inputRef} type="file" id="file-upload" title="file-upload" name="file-upload" hidden multiple accept='image/*' onChange={handleChangeFIle}/>
    </div>
  )
}

export default FileUpload;