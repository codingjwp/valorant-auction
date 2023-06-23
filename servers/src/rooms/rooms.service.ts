import { Injectable } from '@nestjs/common';
import { RoomsData } from './rooms.model'

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
