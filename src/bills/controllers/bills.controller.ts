import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { Bill } from '../model/bill.model';
import { BillService } from '../services/bill.service';
import { Response } from 'express';

@Controller('api/bills')
export class BillsController {
  constructor(private readonly _billsService: BillService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async createNewUser(@Body() bill: Bill, @Res() response: Response) {
    const result = await this._billsService.create(bill);
    return response.json(result).send();
  }
}
