export enum NAME {
  CURTIS = "curtis",
  CITRUS = "citrus",
  RUSTIC = "rustic",
}

export const nameEmojis: {
  [key in NAME]: { title: string; colourDot: string };
} = {
  [NAME.CURTIS]: { title: "🐋", colourDot: "🔵" },
  [NAME.CITRUS]: { title: "🍊", colourDot: "🟠" },
  [NAME.RUSTIC]: { title: "🪵", colourDot: "🟤" },
};
