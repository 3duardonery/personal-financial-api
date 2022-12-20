import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Bill } from '../model/bill.model';
import { BILL_REPOSITORY, IBillRepository } from '../repository/bill.interface';

@Injectable()
export class BillService {
  constructor(
    @Inject(BILL_REPOSITORY)
    private _billRepository: IBillRepository,
  ) {}

  async create(bill: Bill): Promise<Bill | undefined> {
    return await this._billRepository.create({
      ...bill,
    });
  }

  async list(
    description: string,
    type: string,
    startDate: Date,
    endDate: Date,
    pageSize: number,
    currentPage: number,
  ): Promise<Bill[] | undefined> {
    return await this._billRepository.list(
      this.getFilter(description, type, startDate, endDate),
      pageSize,
      currentPage,
    );
  }

  private getFilter(
    description: string,
    type: string,
    startDate: Date,
    endDate: Date,
  ): any {
    return {
      createdAt:
        startDate && endDate
          ? { $gte: startDate, $lte: endDate }
          : { $ne: null },
      type: type != undefined && type != '' ? type : { $ne: null },
      description:
        description != undefined
          ? { $regex: description, $options: 'i' }
          : { $ne: null },
    };
  }
}
