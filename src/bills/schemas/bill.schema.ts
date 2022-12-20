import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type BillDocument = Bill & Document;

@Schema()
export class Bill {
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  value: number;
  @Prop()
  valueString: string;
  @Prop({ default: new Date() })
  createdAt?: Date;
  paidAt?: Date;
  @Prop({ required: true })
  type: string;
}

export const BillSchema = SchemaFactory.createForClass(Bill);
