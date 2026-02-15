export enum Title {
  CURTIS = "curtis",
  CITRUS = "citrus",
  RUSTIC = "rustic",
}

export const titleEmojis: { [key in Title]: string } = {
  [Title.CURTIS]: "🐋",
  [Title.CITRUS]: "🍊",
  [Title.RUSTIC]: "🪵",
};
