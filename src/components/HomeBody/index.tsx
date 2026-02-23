import * as colorsService from "../../services/colors";
import "./styles.css";
import Color from "../Color";
import { useState } from "react";
import Button from "../Button";
import type { ColorDTO, ColorRgbDTO } from "../../model/color";

export default function HomeBody() {
  const [colors, setColors] = useState<ColorDTO[]>(colorsService.getColors());

  const [color, setColor] = useState<ColorRgbDTO>();

  function handleClickColor(index: number) {
    const copyColors = [...colors];

    for (let i = 0; i < copyColors.length; i++) {
      const data = copyColors[i];

      if (i != index) {
        data.isActive = false;
      } else {
        data.isActive = true;
      }
    }

    const color = copyColors[index].color;

    setColor(color);
    setColors(copyColors);

    colorsService.emitColor(color);
  }

  function handleClickButton() {
    setColor(undefined);
    setColors(colorsService.getColors());

    colorsService.setOffColors();
  }

  return (
    <>
      <main className="cs-center-container">
        <div
          className="cs-card-container"
          style={{
            transition: "0.4s",
            boxShadow: color
              ? `0 0 20px 12px rgb(${color.red},${color.green}, ${color.blue} )`
              : "",
          }}
        >
          <h1>Led RGB color</h1>

          <div className="cs-section-top mtp-20">
            <p>Cores padronizadas:</p>
            <div className="cs-color-container">
              {colors.map((data, index) => (
                <Color
                  key={index}
                  data={data}
                  index={index}
                  onClick={handleClickColor}
                  isLast={index == colors.length - 1 ? true : false}
                />
              ))}
            </div>
          </div>

          <Button label="Desligar" onClick={handleClickButton} />
        </div>
      </main>
    </>
  );
}
