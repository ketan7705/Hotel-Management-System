import { Wallet } from './wallet.class';

describe('Wallet', () => {
  it('should create an instance', () => {
    expect(new Wallet()).toBeTruthy();
  });
});
