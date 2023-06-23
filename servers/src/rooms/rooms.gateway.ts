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
    this.nsp.adapter.on('create-room', (room) => {
      this.logger.log(`ROOM ${room}이 생성되었습니다.`);
    })
    this.nsp.adapter.on('join-rooms', (roomNumber: string, nick: string) => {
      this.logger.log(`ROOM ${roomNumber}에 ${nick}이 입장하였습니다.`);
    })
    this.nsp.adapter.on('out-rooms', (roomNumber: string, nick: string) => {
      this.logger.log(`ROOM ${roomNumber}에서 ${nick}이 퇴장하였습니다.`);
    })
    this.nsp.adapter.on('delete-rooms', (roomNumber: string, nick: string) => {
      this.logger.log(`ROOM ${roomNumber}에서 ${nick} 호스트가 방에서 나갔습니다.`);
    })

    this.logger.log('웹 소켓 초기화');  
  }

  handleConnection(@ConnectedSocket() socket: Socket) {
    this.logger.log(`${socket.id}에 소켓 연결`);
  }
  handleDisconnect(@ConnectedSocket() socket: Socket) {
    this.logger.log(`${socket.id}에서 소켓 연결 종료`);
  }
  
}
