import { Body, Controller, Delete, Get, Patch, Post, Put, Query } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { BaseData } from './rooms.model';


@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post()
  async createRoomsNumber(@Body('nick') nick: string): Promise<string> {
    const roomsNumber = await this.roomsService.createRoomData(nick);
    return roomsNumber;
  }

  @Patch()
  async joinRoomsData(@Body() body: BaseData): Promise<boolean> {
    const result = await this.roomsService.joinRoomDatas(body.roomNumber, body.nick);
    return result;
  }

  @Delete()
  async removeRoomsData(@Query() query: BaseData) {
    const result = await this.roomsService.removeRoomDatas(query.roomNumber, query.nick);
  }
}
