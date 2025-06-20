import { Fonts, FontsWeights } from "./Fonts";

export const typographies = {
  typographics: {
    titre: {
      alternatifs: {
        XL: { 
          font: Fonts.brand,
          weight: FontsWeights.bold,
          size: 80, 
          lineHeight: 88
        },
        LG: {
          font: Fonts.brand,
          weight: FontsWeights.bold,
          size: 72, 
          lineHeight: 80 
        },
        MD: {
          font: Fonts.brand,
          weight: FontsWeights.bold,
          size: 64, 
          lineHeight: 72 
        },
        SM: {
          font: Fonts.brand,
          weight: FontsWeights.bold,
          size: 56, 
          lineHeight: 64 
        },
        XS: {
          font: Fonts.brand,
          weight: FontsWeights.bold,
          size: 48, 
          lineHeight: 56 
        }
      },
      "H1 - XL": {
        font: Fonts.brand,
        weight: FontsWeights.bold,
        size: 40,
        lineHeight: 48
      },
      "H2 - LG": {
        font: Fonts.brand,
        weight: FontsWeights.bold,
        size: 32,
        lineHeight: 40
      },
      "H3 - MD": {
        font: Fonts.brand,
        weight: FontsWeights.bold,
        size: 28,
        lineHeight: 36
      },
      "H4 - SM": {
        font: Fonts.brand,
        weight: FontsWeights.bold,
        size: 24,
        lineHeight: 32
      },
      "H5 - XS": {
        font: Fonts.brand,
        weight: FontsWeights.bold,
        size: 22,
        lineHeight: 28
      },
      "H6 - XXS": {
        font: Fonts.brand,
        weight: FontsWeights.bold,
        size: 20,
        lineHeight: 28
      }
    },
    body: {
      XL: {
        font: Fonts.plain,
        weight: FontsWeights.regular,
        Size: 20,
        LineHeight: 32
      },
      LG: {
        font: Fonts.plain,
        weight: FontsWeights.regular,
        Size: 18,
        LineHeight: 28
      },
      MD: {
        font: Fonts.plain,
        weight: FontsWeights.regular,
        Size: 16,
        LineHeight: 24
      },
      SM: {
        Font: Fonts.plain,
        Weight: FontsWeights.regular,
        Size: 14,
        LineHeight: 24
      },
      XS: {
        Font: Fonts.plain,
        Weight: FontsWeights.regular,
        Size: 12,
        LineHeight: 20
      }
    }
  }
};
