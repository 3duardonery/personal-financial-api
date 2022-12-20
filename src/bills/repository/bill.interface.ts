import { Bill } from '../schemas/bill.schema';

export const BILL_REPOSITORY = 'BILL INTERFACE REPOSITORY';
export interface IBillRepository {
  create(user: Bill): Promise<Bill>;
}
