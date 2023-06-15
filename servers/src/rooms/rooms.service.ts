import { Injectable } from '@nestjs/common';
import { RoomsData } from './rooms.model'

@Injectable()
export class RoomsService {
  private roomData: RoomsData[] = [];
  private RANDOMCHAR: string[] = 'ABCDEFGHIJKLNMOPQRSTUVWXZabcdefghijklnmopqrstuvwxz0123456789'.split('');
  private MAX_RECURSION = 3;


  private getRandomRoomNumber(): string {
    let roomNum = '';
    for (let i = 0; i < 8; i++) {
       roomNum += this.RANDOMCHAR[Math.floor(Math.random() * this.RANDOMCHAR.length)];
    }
    return roomNum
  }

  private getRoomAdmin(nick: string) {
    const result  = this.roomData.findIndex((room) => room.admin === nick);
    return (result < 0 || result === undefined) ? false : true 
  }

  private getRoomDirectors(roomNumber: string, nick: string) {
    const index = this.roomData.findIndex((room) => room.roomNum === roomNumber);
    const result = this.roomData[index].directors.findIndex((director) => director.name === nick);
    return (result < 0 || result === undefined) ? false : true;
  }

  async getRoomNumber(roomNumber: string): Promise<boolean> {
    const roomNum = this.roomData?.filter((room) => room.roomNum === roomNumber);
    return roomNum.length === 0 ? false : true ;
  }

  async createRoomData(nick: string, count = 0): Promise<string> {
    if (count > this.MAX_RECURSION) {
      throw new Error('Failed to create room number.');
    }
    const roomsNumber = this.getRandomRoomNumber();
    const exists = await this.getRoomNumber(roomsNumber);

    if (exists) return this.createRoomData(nick, count + 1);
    this.roomData.push({
      roomNum: roomsNumber,
      admin: nick,
      directors: undefined,
      member: undefined});

    return roomsNumber;
  }

  async joinRoomDatas(roomNumber: string, nick: string): Promise<boolean> {
    const checkNum = await this.getRoomNumber(roomNumber);
    if (!checkNum) throw new Error("Failed to not found room number.");

    this.roomData.forEach((room) => {
      if (room.roomNum === roomNumber) {
        room.directors = [...(room.directors || []), {
          name: nick,
          point: undefined,
          imgUrl: undefined,
          member: undefined,
        }]}
    });
    return true;
  }

  async removeRoomDatas(roomNumber: string, nick: string) {
    const admin = this.getRoomAdmin(nick);
    const directors = this.getRoomDirectors(roomNumber, nick);
    if (admin) {
      this.roomData = this.roomData.filter((room) => room.roomNum !== roomNumber);
    } else if (directors) {
      this.roomData.forEach((room) => {
        if (room.roomNum === roomNumber) {
          room.directors = room.directors.filter((director) => director.name !== nick);
        }
      })
    }
    return true;
  }

  deleteDirectors(rooNumber: string, nick: string) {
    return true;
  }

  updateMemberDatas(roomNumber: string) {
    return true;
  }
}
