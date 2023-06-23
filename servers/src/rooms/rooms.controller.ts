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
      const roomNumber = await this.roomsService.createRoomsData(nick);
      res.status(HttpStatus.CREATED).json({ roomNumber: roomNumber });
    } catch (err: any) {
      res.status(HttpStatus.BAD_REQUEST).send({ message: err.message });
    }
  }

  @Patch()
  async joinRoomsData(@Body() body: BaseData, @Res() res: Response) {
    try {
      await this.roomsService.joinRoomsData(body.roomNumber, body.nick);
      res.status(HttpStatus.OK).send({message: true});
    } catch (err: any) {
      res.status(HttpStatus.BAD_REQUEST).send({ message: err.message });
    }
  }

  @Delete()
  async removeRoomsData(@Body() body: BaseData, @Res() res: Response) {
    try {
      const adminResult = await this.roomsService.getMemberAdmin(body.roomNumber, body.nick);
      adminResult ? await this.roomsService.removeRoomData(body.roomNumber)
      : await this.roomsService.leaveRoomData(body.roomNumber, body.nick)
      res.status(HttpStatus.OK).send({message: true});
    } catch (err: any) {
      res.status(HttpStatus.BAD_REQUEST).send({ message: err.message});
    }
  }
}
