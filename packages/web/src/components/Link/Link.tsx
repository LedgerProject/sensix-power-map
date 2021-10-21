import { Link as StyledLink } from "./Link.style";

interface Props {
  to: string;
  children: React.ReactNode;
}

export function Link({ to, children }: Props) {
  return <StyledLink to={to}>{children}</StyledLink>;
}
