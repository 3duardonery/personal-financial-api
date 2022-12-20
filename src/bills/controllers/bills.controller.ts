import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { Bill } from '../model/bill.model';
import { BillService } from '../services/bill.service';
import { Response } from 'express';

@Controller('api/bills')
export class BillsController {
  constructor(private readonly _billsService: BillService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async createBill(@Body() bill: Bill, @Res() response: Response) {
    const result = await this._billsService.create(bill);
    return response.json(result).send();
  }

  @UseGuards(JwtAuthGuard)
  @Get('list')
  async getBills(
    @Query('type') type: string,
    @Query('description') description: string,
    @Query('startDate') startDate: Date,
    @Query('endDate') endDate: Date,
    @Query('pageSize') pageSize: number,
    @Query('currentPage') currentPage: number,
    @Res() response: Response,
  ) {
    const result = await this._billsService.list(
      description,
      type,
      startDate,
      endDate,
      pageSize,
      currentPage,
    );
    return response.json(result).send();
  }
}
