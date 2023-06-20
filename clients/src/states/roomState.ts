import { atom } from 'recoil';

interface MemberProps {
  idx: string,
  name: string,
  rating: string,
  imgSrc: File,
  guideUrl?: string,
}

interface DirectorProps {
  idx: string,
  name: string,
  point?: number,
  imgSrc?: File,
  member?: MemberProps[]
}

export const roomNumberStates = atom<string>({
  key: 'roomNumberState',
  default: ""
})

export const directorStates = atom<DirectorProps[]>({
  key: 'directorState',
  default: []
})

export const memberStates = atom<MemberProps[]>({
  key: 'memberState',
  default: []
})