import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Namespace, Socket } from 'socket.io';
import { Logger } from '@nestjs/common'

@WebSocketGateway({
  namespace: 'auction',
  cors: {
    orgin: ['http://localhost:5173'],
  }
})
export class RoomsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() nsp: Namespace;
  private readonly logger = new Logger(RoomsGateway.name);

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
  handleCreateRoom(socket: Socket, @MessageBody() data:{
    roomNumber: string,
    nick: string
  }){
    socket.join(roomNumber);
    socket.emit('')
  }

  @SubscribeMessage('joinRooms')
  handleCreateRoom(socket: Socket, @MessageBody() data:{
    roomNumber: string,
    nick: string
  }){
    socket.join(roomNumber);
    socket.emit('')
  }
}
