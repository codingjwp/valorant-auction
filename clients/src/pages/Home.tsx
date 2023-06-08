import { useState } from 'react';
import { LayoutCenter, AnimationBulleHoleOne, AnimationBulleHoleTwo, AnimationBulleHoleThree, AnimationTitle, AnimationSubHead } from '../css/Home.styles';
import RoomModal from '../components/Modals/RoomModal';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMoveClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <LayoutCenter direction="column" width='100vw' height='100vh' overflow='hidden'>
      <LayoutCenter direction="column" position="relative" width='680px' height='260px' cursor='pointer' onClick={handleMoveClick}>
        <AnimationTitle scale={3} margin='0 0 3rem 0' zindex={1} />
        <AnimationSubHead scale={3} margin='3rem 0 0 0' zindex={1} />
        <AnimationBulleHoleOne scale={1.8} top='0' left='0' zindex={1} delay='0.6s'/>
        <AnimationBulleHoleTwo scale={0.8} top='10rem' left='8rem' zindex={1} delay='1.2s' />
        <AnimationBulleHoleThree scale={1.4} top='2rem' left='15rem' zindex={0} delay='1.8s' />
        <AnimationBulleHoleOne scale={2.4} top='-3.2rem' right='1rem' zindex={1} delay='2.4s' />
        <AnimationBulleHoleThree scale={1.9} top='6.5rem' right='11rem' zindex={0} delay='3s' />
        <AnimationBulleHoleTwo scale={1.1} top='8rem' right='1rem' zindex={1} delay='3.6s' />
      </LayoutCenter>
      <RoomModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </LayoutCenter>
  )
}