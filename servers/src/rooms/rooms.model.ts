
export interface BaseData {
  roomNumber: string,
  nick: string
}


export interface AuctionMemberData {
  idx: string,
  nick: string,
  rating: string,
  point: number,
  iamgeFile: Buffer[],
}

export interface RoomsData {
  roomNumber: string;
  members: {
    nick: string,
    pointer: number,
    imageFile: string,
    admin: boolean
  }[];
  auction: AuctionMemberData[];
};