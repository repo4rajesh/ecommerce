/*
 * spurtcommerce community API
 * Copyright (c) 2022 Piccosoft Software Labs Pvt Ltd
 * Author Piccosoft Software Labs Pvt Ltd <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import 'reflect-metadata';
import {IsNotEmpty, IsEmail} from 'class-validator';

export class UserLogin {

    @IsEmail()
    @IsNotEmpty()
    public username: string;

    @IsNotEmpty({
        message: 'Password is required',
    })
    public password: string;

}
