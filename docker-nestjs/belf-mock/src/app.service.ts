import { Get, Injectable } from '@nestjs/common';
import { randomInt } from 'node:crypto';

@Injectable()
export class AppService {
  /**
   * 잔디 데이터를 리턴합니다.
   * @param id 유저 아이디
   * @returns 잔디 데이터
   */
  getPlantingGlass(id: string): Glass[] {
    var result: Glass[] = [];
    let now = new Date();
    for (let index = 0; index < 24 * 7 - (7 - now.getDay() - 1); index++) {
      let date = new Date();
      let g: Glass = {
        date: new Date(date.setDate(now.getDate() - index)).getTime(),
        count: Math.floor(Math.random() * 10)
      }
      result.push(g);
    }

    return result.reverse();
  }

  /**
   * 유저 데이터를 리턴합니다.
   * @param id 유저 아이디
   * @returns 
   */
  getMyData(id: string) {
    return `getMyData = ${id}`;
  }
}
