import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreatePedidoDto } from 'src/pedido/dto/create-pedido.dto';
import { PedidoService } from './pedido.service';
import { Pedido } from './interfaces/pedido.interface';


@Controller('pedido')
export class PedidoController {

  constructor(private pedidoService : PedidoService ){}

  @Post()
  create(@Body() createPedidoDto: CreatePedidoDto) {
    return 'Pedido criado com sucesso!';
  }

  @Get()
  async findAll(): Promise<Pedido[]>{
    return this.pedidoService.findAll();
  }
}
