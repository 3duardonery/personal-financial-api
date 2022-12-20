import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IBillRepository } from '../repository/bill.interface';
import { Bill, BillDocument } from '../schemas/bill.schema';

@Injectable()
export class BillRepository implements IBillRepository {
  constructor(
    @InjectModel(Bill.name)
    private readonly _userRepository: Model<BillDocument>,
  ) {}

  async create(user: Bill): Promise<Bill> {
    return await new this._userRepository({
      ...user,
    }).save();
  }
}
