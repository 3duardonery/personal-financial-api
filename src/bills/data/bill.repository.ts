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
  async list(filter: any, pageSize: number, currentPage: number): Promise<any> {
    const bills = await this._userRepository
      .find(filter)
      .limit(pageSize)
      .skip(pageSize * currentPage)
      .sort({
        createdAt: -1,
      })
      .exec();

    const length = await this._userRepository.find(filter).exec();

    console.log(currentPage);

    return {
      length: length.length,
      data: bills,
      pagination: {
        current: Number(currentPage),
        pages: Math.ceil(length.length / pageSize),
      },
    };
  }

  async create(user: Bill): Promise<Bill> {
    return await new this._userRepository({
      ...user,
    }).save();
  }
}
