import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Namespace, Socket } from 'socket.io';
import { Logger } from '@nestjs/common'
import { RoomsService } from './rooms.service';

@WebSocketGateway({
  namespace: 'auction',
  cors: {
    origin: ['http://localhost:5173'],
  }
})
export class RoomsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() nsp: Namespace;
  private readonly logger = new Logger(RoomsGateway.name);

  constructor(private roomsService: RoomsService) {}

  afterInit() {
    this.logger.log('웹 소켓 초기화');  
  }

  handleConnection(@ConnectedSocket() socket: Socket) {
    this.logger.log(`${socket.id}에 소켓 연결`); 
  }
  handleDisconnect(@ConnectedSocket() socket: Socket) {
    this.logger.log(`${socket.id}에서 소켓 연결 종료`);
  }

  @SubscribeMessage('createRooms')
  handleCreateRoom(@ConnectedSocket() socket: Socket, @MessageBody() data:{
    roomNumber: string,
    nick: string
  }){
    if (!socket) return;
    socket.join(data.roomNumber);
  }

  @SubscribeMessage('joinRooms')
  handleJoinRoom(@ConnectedSocket() socket: Socket, @MessageBody() data:{
    roomNumber: string,
    nick: string
  }){
    if (!socket) return;
    socket.join(data.roomNumber);
  }
}
