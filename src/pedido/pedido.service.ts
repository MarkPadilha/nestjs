import { Injectable } from '@nestjs/common';
import { Pedido } from './interfaces/pedido.interface';

@Injectable()
export class PedidoService {
  private readonly pedido: Pedido[] = [];

  create(pedido: Pedido){
    this.pedido.push(pedido);
  }
  
  findAll(): Pedido[]{
    return this.pedido;
  }

}

