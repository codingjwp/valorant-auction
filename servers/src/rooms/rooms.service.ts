import { Injectable } from '@nestjs/common';
import { RoomsData, AuctionMemberData, MemberDataProps } from './rooms.model'

@Injectable()
export class RoomsService {
  private roomsData: RoomsData[] = [];
  private RANDOMCHAR: string[] = 'ABCDEFGHIJKLNMOPQRSTUVWXZabcdefghijklnmopqrstuvwxz0123456789'.split('');
  private MAX_RECURSION = 3;

  // roomNumber 생성 및 데이터 관리 --
  async getRandomRoomNumber(): Promise<string> {
    let roomNum = '';
    for (let i = 0; i < 8; i++) {
       roomNum += this.RANDOMCHAR[Math.floor(Math.random() * this.RANDOMCHAR.length)];
    }
    return roomNum
  }
  
  async getRoomNumber(roomNumber: string): Promise<boolean> {
    const number = this.roomsData.filter((room) => room.roomNumber === roomNumber);
    return number.length === 1 ? true : false;
  }

  async createRoomsData(nick: string, count = 0): Promise<string> {
    if (count > this.MAX_RECURSION) throw new Error("Failed to create room number.");
    const roomNumber = await this.getRandomRoomNumber();
    const number = await this.getRoomNumber(roomNumber);
    if (number) return this.createRoomsData(nick, count + 1);
    const randomNum = Math.random().toString().split('.')[1];
    
    this.roomsData.push(...(this.roomsData || []), {
      roomNumber: roomNumber,
      members: [{
        idx: `member-${randomNum}`,
        nick: nick,
        point: 0,
        imageFile: [],
        admin: true,
        auction: [],
      }],
      auction: []
    });
    return roomNumber;
  }

  async joinRoomsData(roomNumber: string, nick: string): Promise<boolean> {
    const number = await this.getRoomNumber(roomNumber);
    if (!number) throw new Error("Failed to not create room number");
    const length = this.roomsData.find((room) => room.roomNumber === roomNumber).members.length;
    if (length === 5) throw new Error("The room is full of people.");
    const randomNum = Math.random().toString().split('.')[1];

    this.roomsData.forEach((room) => {
      if (room.roomNumber === roomNumber) {
        room.members.push({
          idx: `member-${randomNum}`,
          nick: nick,
          point: 0,
          imageFile: [],
          admin: false,
          auction: [],
      })}
    });
    return true;
  }

  // 해당 room에 있는 멤버 및 권환 확인 부분 ---
  async getMemberData(roomNumber: string): Promise<MemberDataProps[]> {
    const room = this.roomsData.find((room) => room.roomNumber === roomNumber);
    const result = room.members.filter((item) => item.admin === false);
    return result;
  }

  async getMemberCount(roomNumber: string, nick: string): Promise<boolean> {
    const number = await this.getRoomNumber(roomNumber);
    if (!number) throw new Error("Failed to not find room number");
    const room = this.roomsData.find((room) => room.roomNumber === roomNumber);
    const result = room.members.filter((member) => member.nick === nick);
    return result.length === 0 ? false : true; 
  }

  async getMemberAdmin(roomNumber: string, nick: string): Promise<boolean> {
    const number = await this.getRoomNumber(roomNumber);
    if (!number) throw new Error("Failed to not find room number");
    const room = this.roomsData.find((room) => room.roomNumber === roomNumber);
    const result = room.members.find((member) => member.nick === nick).admin;
    return result;
  }

  // 옥션에 참여하는 맴버 이미지 저장 
  async updateAuctionImg(roomNumber: string, nick: string, files: AuctionMemberData): Promise<boolean> {
    const number = await this.getRoomNumber(roomNumber);
    if (!number) throw new Error("Failed to not create room number");
    const admin = await this.getMemberAdmin(roomNumber, nick);
    if (!admin) throw new Error(`${nick} do not have permission`);
    const pushData = this.roomsData.find((room) => room.roomNumber === roomNumber);
    pushData.auction.push({
      idx: files.idx,
      nick: files.nick,
      rating: files.rating,
      point: files.point,
      iamgeFile: files.iamgeFile,
    })
    return true;
  }
  // 랜덤 이미지 배열 정렬
  async randomAuctionImg(roomNumber: string, nick: string): Promise<AuctionMemberData[]> {
    const number = await this.getRoomNumber(roomNumber);
    if (!number) throw new Error("Failed to not create room number");
    const admin = await this.getMemberAdmin(roomNumber, nick);
    if (!admin) throw new Error(`${nick} do not have permission`);
    let randoms = this.roomsData.find((room) => room.roomNumber === roomNumber).auction;
    let imgLength = randoms.length;
    let randomIndex = 0;
    while (imgLength != 0) {
      randomIndex = Math.floor(Math.random() * imgLength);
      imgLength--;
      [randoms[imgLength], randoms[randomIndex]] = [randoms[randomIndex], randoms[imgLength]];
    }
    return randoms;
  }

  // roomData 삭제및 관리 부분
  async removeRoomData(roomNumber: string): Promise<boolean> {
    const number = await this.getRoomNumber(roomNumber);
    if (!number) throw new Error("Failed to not find room number");
    this.roomsData = this.roomsData.filter((room) => room.roomNumber != roomNumber);
    return true;
  }

  async leaveRoomData(roomNumber: string, nick: string): Promise<boolean> {
    const number = await this.getRoomNumber(roomNumber);
    if (!number) throw new Error("Failed to not find room number");

    this.roomsData.forEach((room) => {
      if (room.roomNumber === roomNumber) 
        room.members = room.members.filter((member) => member.nick !== nick);
    })
    return true;
  }
}
