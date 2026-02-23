import type { ColorDTO } from "../../model/color";
import "./styles.css";

type Props = {
  data: ColorDTO;
  isLast: boolean;
  index: number;
  onClick: (index: number) => void;
};

export default function Color({ data, onClick, index, isLast }: Props) {
  return (
    <div
      onClick={() => onClick(index)}
      className="cs-color-card"
      style={{
        background: !data.isActive
          ? `rgb(${data.color.red},${data.color.green}, ${data.color.blue} )`
          : "#bebebe",
        marginRight: isLast ? 0 : 8,
        transition: "0.4s",
      }}
    />
  );
}
