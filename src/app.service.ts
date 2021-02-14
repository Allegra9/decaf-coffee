import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Decaf ☕️ with almond rice milk!';
  }
}
