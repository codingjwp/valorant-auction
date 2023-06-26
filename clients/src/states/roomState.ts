import { atom } from 'recoil';

export interface MemberProps {
  idx: string,
  name: string,
  rating: string,
  imgSrc: Blob,
}

export interface RoomDataProps {
  roomNumber: string,
  nick: string,
}

export interface DirectorProps {
  idx: string,
  nick: string,
  point?: number,
  imgSrc?: Blob,
  member?: MemberProps[]
}

export const roomStates = atom<RoomDataProps | undefined>({
  key: 'roomState',
  default: undefined
})

export const directorStates = atom<DirectorProps[]>({
  key: 'directorState',
  default: []
})

export const memberStates = atom<MemberProps[]>({
  key: 'memberState',
  default: []
})