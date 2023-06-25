import { Injectable } from '@nestjs/common';
import { RoomsData, AuctionMemberData } from './rooms.model'

@Injectable()
export class RoomsService {
  private roomsData: RoomsData[] = [];
  private RANDOMCHAR: string[] = 'ABCDEFGHIJKLNMOPQRSTUVWXZabcdefghijklnmopqrstuvwxz0123456789'.split('');
  private MAX_RECURSION = 3;


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

    this.roomsData.push(...(this.roomsData || []), {
      roomNumber: roomNumber,
      members: [{
        nick: nick,
        pointer: 0,
        imageFile: '',
        admin: true,
      }],
      auction: []
    });
    return roomNumber;
  }

  async joinRoomsData(roomNumber: string, nick: string): Promise<boolean> {
    const number = await this.getRoomNumber(roomNumber);
    if (!number) throw new Error("Failed to not create room number");

    this.roomsData.forEach((room) => {
      if (room.roomNumber === roomNumber) {
        room.members.push({
          nick: nick,
          pointer: 0,
          imageFile: '',
          admin: false,
      })}
    });
    return true;
  }

  async getMemberAdmin(roomNumber: string, nick: string): Promise<boolean> {
    const number = await this.getRoomNumber(roomNumber);
    if (!number) throw new Error("Failed to not find room number");
    const room = this.roomsData.find((room) => room.roomNumber === roomNumber);
    const result = room.members.find((member) => member.nick === nick).admin;
    return result;
  }

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
    console.log(this.roomsData.find((item) => item.roomNumber === roomNumber));
    return true;
  }

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
