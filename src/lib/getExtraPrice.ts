import { extrasMenu } from "../const/menu";

export const getExtraPrice = (extraName: string): number => {
  const extra = extrasMenu.find((item) => item.name === extraName);
  if (!extra) return 0;
  
  const price = Number.parseFloat(extra.price.replace("S/ ", ""));
  return price;
};
