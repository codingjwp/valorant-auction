
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

export interface MemberDataProps {
  idx: string,
  nick: string,
  point: number,
  imageFile: Buffer[],
  admin: boolean
  auction: AuctionMemberData[];
}

export interface RoomsData {
  roomNumber: string;
  members: MemberDataProps[];
  auction: AuctionMemberData[];
};