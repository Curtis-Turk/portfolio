export enum NAME {
  CITRUS = "citrus",
  CURTIS = "curtis",
  RUSTIC = "rustic",
}

export const nameEmojis: {
  [key in NAME]: { title: string; colourDot: string };
} = {
  [NAME.CITRUS]: { title: "🍊", colourDot: "🟠" },
  [NAME.CURTIS]: { title: "🐋", colourDot: "🔵" },
  [NAME.RUSTIC]: { title: "🪵", colourDot: "🟤" },
};
