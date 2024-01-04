/**
 * The volume dimension
 */

import { Dimension } from '../index';

const imperial = {
  tsp: {
    to_base: 1 / 6,
  },
  Tbs: {
    to_base: 1 / 2,
  },
  in3: {
    to_base: 0.55411,
  },
  'fl-oz': {
    to_base: 1,
  },
  cup: {
    to_base: 8,
  },
  pnt: {
    to_base: 16,
  },
  qt: {
    to_base: 32,
  },
  gal: {
    to_base: 128,
  },
  ft3: {
    to_base: 957.506,
  },
  yd3: {
    to_base: 25852.7,
  },
};

const metric = {
  mm3: {
    to_base: 1 / 1000000,
  },
  cm3: {
    to_base: 1 / 1000,
  },
  ml: {
    to_base: 1 / 1000,
  },
  cl: {
    to_base: 1 / 100,
  },
  dl: {
    to_base: 1 / 10,
  },
  l: {
    to_base: 1,
  },
  kl: {
    to_base: 1000,
  },
  Ml: {
    to_base: 1000000,
  },
  Gl: {
    to_base: 1000000000,
  },
  m3: {
    to_base: 1000,
  },
  km3: {
    to_base: 1000000000000,
  },
};

const dimension: Dimension = {
  systems: { imperial, metric },
  bases: {
    metric: {
      imperial: {
        ratio: 33.8140226,
      },
    },
    imperial: {
      metric: {
        ratio: 1 / 33.8140226,
      },
    },
  },
};

export default dimension;
