export type ColorDTO = {
  name: string;
  color: ColorRgbDTO;
  isActive: boolean;
};

export type ColorRgbDTO = {
  red: number;
  green: number;
  blue: number;
};
