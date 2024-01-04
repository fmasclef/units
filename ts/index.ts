import length from './dimensions/length';
import volume from './dimensions/volume';

/**
 * Types
 */

export type TUnit = string;

export interface Unit {
  to_base: number;
}

export type TSystem = string;

export interface System {
  [key: TUnit]: Unit;
}

export type TDimension = string;

export interface Dimension {
  systems: {
    [key: TSystem]: System;
  };
  bases: {
    [key: TSystem]: {
      [key: TSystem]: {
        ratio: number;
      };
    };
  };
}

/**
 * Handler
 */

const dimensions: { [key: TDimension]: Dimension } = {
  length,
  volume,
};

const findUnit = (unit: TUnit) => {
  for (const d of Object.keys(dimensions) as unknown as TDimension) {
    const dim: Dimension = dimensions[d];
    for (const s of Object.keys(dim.systems) as unknown as TSystem) {
      const system: System = dim.systems[s];
      const found = Object.keys(system).find((u) => u == unit);
      if (found) {
        return {
          dimension: d,
          system: s,
          unit: unit,
          [unit]: system[found],
        };
      }
    }
  }
  return undefined;
};

const findCrossSystemRatio = (
  dimension: TDimension,
  source: TSystem,
  destination: TSystem
) => {
  return dimensions[dimension].bases[source][destination].ratio;
};

const convert = (value: number, from: TUnit, to: TUnit) => {
  const sourceUnit = findUnit(from);
  const destinationUnit = findUnit(to);
  if (!sourceUnit || !destinationUnit)
    throw new Error(`unknown source or destination unit`);
  if (sourceUnit.dimension !== destinationUnit.dimension)
    throw new Error(
      `cannot convert from ${sourceUnit.dimension} to ${destinationUnit.dimension}`
    );
  const crossSystemRatio =
    sourceUnit.system == destinationUnit.system
      ? 1
      : findCrossSystemRatio(
          sourceUnit.dimension,
          sourceUnit.system,
          destinationUnit.system
        );
  const ret =
    (value * (sourceUnit[from] as Unit).to_base * crossSystemRatio) /
    (destinationUnit[to] as Unit).to_base;
  return ret;
};

export { convert };
