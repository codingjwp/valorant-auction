
export interface BaseData {
  roomNumber: string,
  nick: string
}

export interface RoomsData {
  roomNum: string,
  admin: string,
  directors?: {
    name: string,
    point?: number,
    imgUrl?: string,
    member?: {
      name: string,
      point: number,
      grop: string,
      imgUrl: string,
    }[]
  }[],
  member?: {
    name: string,
    group: string,
    imgUrl: string,
  }[]
}