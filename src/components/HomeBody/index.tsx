import * as colorsService from "../../services/colors";
import "./styles.css";
import Color from "../Color";
import { useState } from "react";

export default function HomeBody() {
  const [colors, setColors] = useState(colorsService.getColors());

  function handleColorClick(index: number) {
    const copyColors = [...colors];

    for (let i = 0; i < copyColors.length; i++) {
      const data = copyColors[i];

      if (i != index) {
        data.isActive = false;
      } else {
        data.isActive = true;
      }
    }

    setColors(copyColors);
  }

  return (
    <>
      <main className="cs-center-container">
        <div className="cs-card-container">
          <h1>Led RGB color</h1>

          <div className="cs-section-top mtp-20">
            <p>Cores padronizadas:</p>
            <div className="cs-color-container">
              {colors.map((data, index) => (
                <Color
                  data={data}
                  index={index}
                  onClick={handleColorClick}
                  isLast={index == colors.length - 1 ? true : false}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
