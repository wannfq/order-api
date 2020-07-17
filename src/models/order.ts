import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Room } from "./";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Room, (room) => room.orders)
  room: Room;

  @Column()
  customer_name: string;

  @Column()
  customer_email: string;

  @Column()
  customer_phone: string;

  @Column()
  amount: number;

  @Column({ type: "timestamptz" })
  check_in_date: Date;

  @Column({ type: "timestamptz" })
  check_out_date: Date;

  @CreateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  updated_at: Date;

  @DeleteDateColumn({ type: "timestamptz" })
  deleted_at: Date;
}
