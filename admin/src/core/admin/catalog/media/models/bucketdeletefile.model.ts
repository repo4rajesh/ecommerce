/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 Piccosoft Software Labs Pvt Ltd
 * Author Piccosoft Software Labs Pvt Ltd <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

export class BucketdeletefileForm {
  public fileName: string;

  constructor(bucketdeletefileForm: any) {
    this.fileName = bucketdeletefileForm.fileName || '';
  }
}
