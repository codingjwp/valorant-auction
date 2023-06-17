import { atom } from 'recoil';

interface memberProps {
  idx: string,
  name: string,
  rating: string,
  imgSrc: File,
  guideUrl?: string,
}

interface directorProps {
  idx: string,
  name: string,
  point?: number,
  imgSrc?: File,
  member?: memberProps[]
}

export const roomNumberStates = atom<string>({
  key: 'roomNumberState',
  default: ""
})

export const directorStates = atom<directorProps[]>({
  key: 'directorState',
  default: []
})

export const memberStates = atom<memberProps[]>({
  key: 'memberState',
  default: []
})