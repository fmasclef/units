# Units converter

Convert units with ease using this lib. The following dimensions are available:

- length
- volume

![compliance](https://github.com/fmasclef/units/actions/workflows/compliance.yml/badge.svg?event=push)
[![codecov](https://codecov.io/gh/fmasclef/units/branch/main/graph/badge.svg?token=IBJWCN2U1X)](https://codecov.io/gh/fmasclef/units)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

# Usage

Method signature is `convert(value: number, from: TUnit, to: TUnit)`. For instance, to convert 1 meter in inches, do the folowing:

**ESM**

    import { convert } from "@fmasclef/units";
    const value = convert(1, 'm', 'in');

**CJS**

    const units = require("@fmasclef/units");
    const value = units.convert(1, 'm', 'in');

# Dimensions

## length

| system   | unit   | name           |
| -------- | ------ | -------------- |
| metric   | Qm     | Quettameter    |
|          | Rm     | Ronnameter     |
|          | Ym     | Yottameter     |
|          | Zm     | Zettameter     |
|          | Em     | Exameter       |
|          | Pm     | Petameter      |
|          | Tm     | Terameter      |
|          | Gm     | Gigameter      |
|          | Mm     | Megameter      |
|          | km     | Kilometer      |
|          | hm     | Hectometer     |
|          | dam    | Decameter      |
|          | m      | _Meter_        |
|          | dm     | Decimeter      |
|          | cm     | Centimeter     |
|          | mm     | Millimeter     |
|          | µm     | Micrometer     |
|          | nm     | Nanometer      |
|          | pm     | Picometer      |
|          | fm     | Femtometer     |
|          | am     | Attometer      |
|          | zm     | Zeptometer     |
|          | ym     | Yoctometer     |
|          | rm     | Rontometer     |
|          | qm     | Quectometer    |
| imperial | mil    | Mil            |
|          | in     | Inch           |
|          | yd     | Yard           |
|          | ft-us  | US Survey Foot |
|          | ft     | _Foot_         |
|          | fathom | Fathom         |
|          | mi     | Mile           |
|          | nMi    | Nautical Mile  |
| printing | pt     | _Point_        |

## volumes

| system   | unit  | name             |
| -------- | ----- | ---------------- |
| metric   | mm3   | Cubic Millimeter |
|          | cm3   | Cubic Centimeter |
|          | ml    | Millilitre       |
|          | cl    | Centilitre       |
|          | dl    | Decilitre        |
|          | l     | _Litre_          |
|          | kl    | Kilolitre        |
|          | Ml    | Megalitre        |
|          | Gl    | Gigalitre        |
|          | m3    | Cubic meter      |
|          | km3   | Cubic kilometer  |
| imperial | tsp   | Teaspoon         |
|          | Tbs   | Tablespoon       |
|          | in3   | Cubic inch       |
|          | fl-oz | Fluid Ounce      |
|          | cup   | Cup              |
|          | pnt   | Pint             |
|          | qt    | Quart            |
|          | gal   | Gallon           |
|          | ft3   | _Cubic foot_     |
|          | yd3   | Cubic yard       |

Made & maintained with ❤️ in Lille. Freely inspired by [convert-units](https://github.com/convert-units/convert-units).

![CC-BY-SA 4.0](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)
