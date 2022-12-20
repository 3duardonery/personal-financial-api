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
}
