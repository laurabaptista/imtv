type ButtonProps = {
  children: string;
  variant?: "color1" | "color2";
  onClick?: () => void;
};

function Button(props: ButtonProps) {
  return <button className={props.variant}>{props.children}</button>;
}

export default Button;
