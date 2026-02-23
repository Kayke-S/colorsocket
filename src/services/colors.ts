import type { ColorDTO, ColorRgbDTO } from "../model/color";
import * as webSocketService from "../services/websocket";
import { MESSAGE } from "./system";

const BASE_COLORS: ColorDTO[] = [
  {
    name: "RED",
    color: {
      red: 255,
      green: 0,
      blue: 0,
    },
    isActive: false,
  },
  {
    name: "GREEN",
    color: {
      red: 0,
      green: 255,
      blue: 0,
    },
    isActive: false,
  },
  {
    name: "BLUE",
    color: {
      red: 0,
      green: 0,
      blue: 255,
    },
    isActive: false,
  },
];

const COLOR_OFF: ColorRgbDTO = {
  red: 0,
  green: 0,
  blue: 0,
};

export function getColors() {
  return BASE_COLORS.map((color) => ({ ...color }));
}

export function setOffColors() {
  return emitColor(COLOR_OFF);
}

export function emitColor(color: ColorRgbDTO) {
  webSocketService.sendMessage(color, MESSAGE);
}
