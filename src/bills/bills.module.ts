import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BillsController } from './controllers/bills.controller';
import { BillRepository } from './data/bill.repository';
import { BILL_REPOSITORY } from './repository/bill.interface';
import { Bill, BillSchema } from './schemas/bill.schema';
import { BillService } from './services/bill.service';

@Module({
  controllers: [BillsController],
  providers: [
    {
      useClass: BillRepository,
      provide: BILL_REPOSITORY,
    },
    BillService,
  ],
  imports: [
    MongooseModule.forFeature([{ name: Bill.name, schema: BillSchema }]),
  ],
})
export class BillsModule {}
