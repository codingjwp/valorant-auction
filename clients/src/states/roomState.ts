import { atom } from 'recoil';

interface personsProps {
  idx: string,
  nick: string,
  rating: string,
  imgSrc: string,
}

export const roomNumberStates = atom<string>({
  key: 'roomNumberState',
  default: ""
})

export const directorStates = atom<personsProps[]>({
  key: 'directorState',
  default: []
})

export const memberStates = atom<personsProps[]>({
  key: 'memberState',
  default: []
})