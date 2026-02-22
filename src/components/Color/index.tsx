/* eslint-disable @typescript-eslint/no-explicit-any */
import "./styles.css";

type Props = {
  data: any;
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
        background: !data.isActive ? data.color : "#bebebe",
        marginRight: isLast ? 0 : 8,
      }}
    />
  );
}
