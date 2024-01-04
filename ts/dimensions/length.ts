/**
 * The length dimension
 */

import { Dimension } from '../index';

const imperial = {
  mil: { to_base: 1 / 12000 },
  in: { to_base: 1 / 12 },
  yd: { to_base: 3 },
  'ft-us': { to_base: 1.000002 },
  ft: { to_base: 1 },
  fathom: { to_base: 6 },
  mi: { to_base: 5280 },
  nMi: { to_base: 6076.12 },
};

const metric = {
  Qm: { to_base: 1e30 },
  Rm: { to_base: 1e27 },
  Ym: { to_base: 1e24 },
  Zm: { to_base: 1e21 },
  Em: { to_base: 1e18 },
  Pm: { to_base: 1e15 },
  Tm: { to_base: 1e12 },
  Gm: { to_base: 1e9 },
  Mm: { to_base: 1e6 },
  km: { to_base: 1e3 },
  hm: { to_base: 1e2 },
  dam: { to_base: 1e1 },
  m: { to_base: 1 },
  dm: { to_base: 1e-1 },
  cm: { to_base: 1e-2 },
  mm: { to_base: 1e-3 },
  µm: { to_base: 1e-6 },
  nm: { to_base: 1e-9 },
  pm: { to_base: 1e-12 },
  fm: { to_base: 1e-15 },
  am: { to_base: 1e-18 },
  zm: { to_base: 1e-21 },
  ym: { to_base: 1e-24 },
  rm: { to_base: 1e-27 },
  qm: { to_base: 1e-30 },
};

const printing = {
  pt: {
    to_base: 1,
  },
};

const dimension: Dimension = {
  systems: { imperial, metric, printing },
  bases: {
    metric: {
      imperial: {
        ratio: 3.28084,
      },
      printing: {
        ratio: 2834.64576,
      },
    },
    imperial: {
      metric: {
        ratio: 1 / 3.28084,
      },
      printing: {
        ratio: 864,
      },
    },
    printing: {
      imperial: {
        ratio: 1 / 864,
      },
      metric: {
        ratio: 1 / 2834.64576,
      },
    },
  },
};

export default dimension;
