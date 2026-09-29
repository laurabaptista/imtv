type ButtonProps = {
  children: string;
  variant?: "color1" | "color2";
  onClick?: () => void;
};

function Button(_props: ButtonProps) {
  return <button></button>;
}

export default Button;
