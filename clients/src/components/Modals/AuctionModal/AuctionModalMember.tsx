import { ChangeEvent, RefObject, useState } from 'react';
import FileUpload from '../../FileUpload/FileUpload'
import Select from '../../Selects/Select';
import { AuctionGroupUl } from './AuctionModal.styles'
import { useRecoilValue } from 'recoil';
import { memberStates } from '../../../states/roomState';

const AuctionModalMember = ({selectRef} : {selectRef: RefObject<HTMLSelectElement>}) => {
  const members = useRecoilValue(memberStates);
  const [groupId, setGroupId] = useState<string>('A');
  const gropList = [
    {
      idx: 'group-a',
      value: 'A',
      label: 'A Group'},
    {
      idx: 'group-b',
      value: 'B',
      label: 'B Group'},
    {
      idx: 'group-c',
      value: 'C',
      label: 'C Group'},
    {
      idx: 'group-d',
      value: 'D',
      label: 'D Group'},
    {
      idx: 'group-E',
      value: 'E',
      label: 'E Group'}];

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setGroupId(e.target.value);
  }

  return (
    <div>
      <AuctionGroupUl>
        <li>A Group: {members.filter((item) => item.rating ==='A').length || 0}</li>
        <li>B Group: {members.filter((item) => item.rating === 'B').length || 0}</li>
        <li>C Group: {members.filter((item) => item.rating === 'C').length || 0}</li>
        <li>D Group: {members.filter((item) => item.rating === 'D').length || 0}</li>
        <li>E Group: {members.filter((item) => item.rating === 'E').length || 0}</li>
      </AuctionGroupUl>
      <Select ref={selectRef} seletId={groupId} title="select-group" sizes="full" optionlist={gropList} onChange={handleSelectChange}/>
      <FileUpload baseContnet='Member Avatar Image Upload Click Here!' data={groupId} />
    </div>)
}

export default AuctionModalMember;