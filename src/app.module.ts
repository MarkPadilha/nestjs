import { Module } from '@nestjs/common'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PedidoController } from './pedido/pedido.controller';
import { PedidoService } from './pedido/pedido.service';
import { PedidoModule } from './pedido/pedido.modules';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [PedidoModule,
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'restaurante',
    entities: [],
    synchronize: true
  })],
  controllers: [AppController, PedidoController],
  providers: [AppService, PedidoService],
})
export class AppModule {}
