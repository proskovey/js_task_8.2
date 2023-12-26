export default class ErrorRepository {
  constructor() {
    this.erorrs = new Map([
      [200, 'Успешно'],
      [404, 'Не найдено'],
      [503, 'Сервис недоступен'],
    ]);
  }

  translate(code) {
    const foundCode = (this.erorrs.get(code)) ? this.erorrs.get(code) : 'Unknown error';
    return foundCode;
  }
}
