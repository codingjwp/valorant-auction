import { Module } from '@nestjs/common';
import { RoomsController } from './rooms/rooms.controller';
import { RoomsService } from './rooms/rooms.service';
import { RoomsGateway } from './rooms/rooms.gateway';

@Module({
  imports: [],
  controllers: [RoomsController],
  providers: [RoomsService, RoomsGateway],
})
export class AppModule {}
