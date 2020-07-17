import { Hotel, Room, Order } from "../models";
import { Connection, createConnection } from "typeorm";

export class OrderService {
  private connection: Connection | null = null;

  private async getConnection(): Promise<Connection> {
    if (!this.connection) {
      try {
        this.connection = await createConnection({
          type: "postgres",
          url: process.env.DATABASE_URL,
          ssl: { rejectUnauthorized: false },
          entities: [Hotel, Room, Order],
          synchronize: true,
        });
      } catch (e) {
        throw new Error(`OrderService [Postgre connection failed]: ${e}`);
      }
    }
    return this.connection;
  }

  async createOrder(): Promise<IOrderSummary> {
    try {
      const q = (await this.getConnection()).createQueryRunner();

      return {
        hotel: {
          id: "",
          name: "",
        },
        room: {
          id: "",
          name: "",
          guest: 0,
        },
        customer: {
          name: "",
          email: "",
          phone: "",
        },
        checkIn: "",
        checkOut: "",
        amount: 0,
      };
    } catch (e) {
      throw new Error(`OrderService: ${e}`);
    }
  }
  // deleteOrder(): void {}
  // listOrder(): void {}
}

export interface IOrderSummary {
  hotel: {
    id: string;
    name: string;
  };
  room: {
    id: string;
    name: string;
    guest: number;
  };
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  checkIn: string;
  checkOut: string;
  amount: number;
}
