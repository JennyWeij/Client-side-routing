import { CSSProperties } from "react";

type ReactRouterLinkProps = {
  isActive: boolean, 
  isPending: boolean,
}

export type ReactRouterCSS = (props: ReactRouterLinkProps) => CSSProperties;