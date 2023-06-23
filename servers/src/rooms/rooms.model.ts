
export interface BaseData {
  roomNumber: string,
  nick: string
}

export interface RoomsData {
  roomNumber: string,
  members: {
    nick: string,
    pointer: number,
    imageFile: string,
    admin: boolean
  }[]
};

export interface AuctionMemberData {
  nick: string,
  group: string,
  point: number,
  iamgeFile: string,
}