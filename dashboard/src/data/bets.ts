

export class Bet {
  title: string;
  body: string;
  amount: number;
  expectedIrr: number;
  imageUrl: string;
  taken: boolean;
  constructor(title: string, body: string, amount: number, expectedIrr: number, imageUrl: string, taken: boolean) {
    this.title = title
    this.body = body
    this.amount = amount
    this.expectedIrr = expectedIrr
    this.imageUrl = imageUrl;
    this.taken = taken;
  }
}
