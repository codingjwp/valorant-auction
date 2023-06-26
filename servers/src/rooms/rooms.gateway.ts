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
  async handleCreateRoom(@ConnectedSocket() socket: Socket, @MessageBody() data:{
    roomNumber: string,
    nick: string
  }){
    if (!socket) return;
    const rooms = await this.roomsService.getRoomNumber(data.roomNumber);
    if (!rooms) throw new Error("Failed to create room number.");
    const admin = await this.roomsService.getMemberAdmin(data.roomNumber, data.nick)
    if (!admin) throw new Error(`${data.nick} do not have permission`);
    socket.join(data.roomNumber);
  }

  @SubscribeMessage('joinRooms')
  async handleJoinRoom(@ConnectedSocket() socket: Socket, @MessageBody() data:{
    roomNumber: string,
    nick: string
  }){
    if (!socket) return;
    const rooms = await this.roomsService.getRoomNumber(data.roomNumber);
    if (!rooms) throw new Error("Failed to create room number.");
    const member = await this.roomsService.getMemberCount(data.roomNumber, data.nick);
    if (!member) throw new Error(`Failed to not found member: ${data.nick} in roomNumber : ${data.roomNumber}`);
    socket.join(data.roomNumber);
  }

  @SubscribeMessage('randomImageEmit')
  async handleRandomImgEmit(@ConnectedSocket() socket: Socket, @MessageBody() data: {
    roomNumber: string,
    nick: string
  }){
    if (!socket) return;
    const rooms = await this.roomsService.getRoomNumber(data.roomNumber);
    if (!rooms) throw new Error("Failed to create room number.");
    const admin = await this.roomsService.getMemberAdmin(data.roomNumber, data.nick)
    if (!admin) throw new Error(`${data.nick} do not have permission`);
    const randoms = await this.roomsService.randomAuctionImg(data.roomNumber, data.nick);
    socket.to(data.roomNumber).emit('image-send', randoms);
  }

  @SubscribeMessage('director-list')
  async handleDiretorsEmit(@ConnectedSocket() socket: Socket, @MessageBody() data: {
    roomNumber: string,
    nick: string
  }) {
    if (!socket) return;
    const rooms = await this.roomsService.getRoomNumber(data.roomNumber);
    if (!rooms) throw new Error("Failed to create room number.");
    const admin = await this.roomsService.getMemberAdmin(data.roomNumber, data.nick)
    if (!admin) return;
    const director = await this.roomsService.getMemberData(data.roomNumber);
    socket.emit('director-list', director);
  }
}
