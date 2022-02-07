/*
 * spurtcommerce community API
 * Copyright (c) 2022 Piccosoft Software Labs Pvt Ltd
 * Author Piccosoft Software Labs Pvt Ltd <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import { EntityRepository, Repository } from 'typeorm';
import { StockStatus } from '../models/stockStatus';

@EntityRepository(StockStatus)
export class StockStatusRepository extends Repository<StockStatus>  {

}
