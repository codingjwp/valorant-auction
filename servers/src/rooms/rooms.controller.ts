import { Body, Controller, HttpStatus, Delete, Patch, Post, Query, Res, Req } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { BaseData } from './rooms.model';
import { Response } from 'express';


@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post()
  async createRoomsNumber(@Body('nick') nick: string, @Res() res: Response){
    try{
      const roomsNumber = await this.roomsService.createRoomData(nick);
      res.status(HttpStatus.CREATED).json({ roomsNumber: roomsNumber });
    } catch (err: any) {
      res.status(HttpStatus.BAD_REQUEST).send({ message: err.message });
    }
  }

  @Patch()
  async joinRoomsData(@Body() body: BaseData, @Res() res: Response) {
    try {
      const result = await this.roomsService.joinRoomDatas(body.roomNumber, body.nick);
      res.status(HttpStatus.OK).send({message: true});
    } catch (err: any) {
      res.status(HttpStatus.BAD_REQUEST).send({ message: err.message });
    }
  }

  @Delete()
  async removeRoomsData(@Query() query: BaseData) {
    const result = await this.roomsService.removeRoomDatas(query.roomNumber, query.nick);
  }
}
