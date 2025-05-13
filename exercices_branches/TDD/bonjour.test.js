import { expect, it, describe } from 'vitest';
import { sayHello, esTuMajeur } from '../TDD/bonjour';

describe('sayHello', () => {
  it('devrait dire bonjour à un nom normal', () => {
    expect(sayHello('Alice')).toBe('Bonjour, Alice !');
  });

  it('devrait dire bonjour à une chaîne très longue', () => {
    const longName = 'a'.repeat(1000);
    expect(sayHello(longName)).toBe(`Bonjour, ${longName} !`);
  });

  it('devrait dire bonjour à null', () => {
    expect(sayHello(null)).toBe('Bonjour, inconnu !');
  });
});

describe('esTuMajeur', () => {
  it('devrait retourner false si age < 18', () => {
    expect(esTuMajeur(42)).toBe(true);
  });

  it('devrait retourner true si age > 18', () => {
    expect(esTuMajeur(25)).toBe(true);
  });
});

