type BadgeProps = {
  children: string;
};

function Badge(props: BadgeProps) {
  return <span className="badge">{props.children}</span>;
}

export default Badge;
