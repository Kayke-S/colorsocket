import "./styles.css";

type Props = {
  label: string;
  onClick: () => void;
};

export default function Button({ label, onClick }: Props) {
  return (
    <div className="cs-button" onClick={() => onClick()}>
      {label}
    </div>
  );
}
