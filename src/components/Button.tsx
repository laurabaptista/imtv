import "./Button.css";

type ButtonProps = {
  children: string;
  variant?: "color1" | "color2";
  onClick?: () => void;
};

function Button(props: ButtonProps) {
  return (
    <button
      className={`button ${props.variant || "color1"}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
