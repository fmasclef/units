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

describe(`length conversion`, () => {
  it(`unknown unit`, async () => {
    expect(() => {
      convert(1, 'no_exisintg', 'mm');
    }).toThrow();
  });
  it(`inconsistent dimensions`, async () => {
    expect(() => {
      convert(1, 'l', 'm');
    }).toThrow();
  });

  it(`convert 'mm' to 'km'`, async () => {
    expect(convert(1, 'mm', 'km')).toEqual(1e-6);
  });
  it(`convert 'km' to 'mm'`, async () => {
    expect(convert(1, 'km', 'mm')).toEqual(1e6);
  });
  it(`convert 'mm' to 'pt'`, async () => {
    expect(convert(210, 'mm', 'pt')).toEqual(595.2756095999999);
  });
  it(`convert 'pt' to 'mm'`, async () => {
    expect(convert(1, 'pt', 'mm')).toEqual(0.35277776648888926);
  });
  it(`convert 'in' to 'pt'`, async () => {
    expect(convert(1, 'in', 'pt')).toEqual(72);
  });
});
