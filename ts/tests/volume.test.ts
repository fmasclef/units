/* eslint-disable @typescript-eslint/no-unused-vars */

import { convert } from '../index';

beforeAll(() => {
  jest
    .spyOn(process.stdout, 'write')
    .mockImplementation(
      (
        str: string | Uint8Array,
        encoding?: BufferEncoding | undefined,
        cb?: ((err?: Error | undefined) => void) | undefined
      ): boolean => {
        return true;
      }
    );
});

describe(`volume conversion`, () => {
  it(`unknown unit`, async () => {
    expect(() => {
      convert(1, 'no_exisintg', 'ml');
    }).toThrow();
  });
  it(`inconsistent dimensions`, async () => {
    expect(() => {
      convert(1, 'l', 'm');
    }).toThrow();
  });

  it(`convert 'l' to 'ml'`, async () => {
    expect(convert(1, 'l', 'ml')).toEqual(1e3);
  });
  it(`convert 'ml' to 'l'`, async () => {
    expect(convert(1, 'ml', 'l')).toEqual(1e-3);
  });
  it(`convert 'l' to 'in3'`, async () => {
    expect(convert(1, 'l', 'in3')).toEqual(61.024025193553626);
  });
  it(`convert 'm3' to 'in3'`, async () => {
    expect(convert(1, 'm3', 'in3')).toEqual(61024.025193553636);
  });
  it(`convert 'in3' to 'm3'`, async () => {
    expect(convert(1, 'in3', 'm3')).toEqual(0.00001638698851523214);
  });
  it(`convert 'pnt' to 'fl-oz'`, async () => {
    expect(convert(1, 'pnt', 'fl-oz')).toEqual(16);
  });
});
