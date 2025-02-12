import { PropsWithChildren } from "react";
import Link from "next/link";

type CustomLinkProps = {
  type?: "external" | "internal";
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function CustomLink({
  type,
  children,
  ...rest
}: PropsWithChildren<CustomLinkProps>) {
  const className = "text-blue-400 underline hover:no-underline";
  if (type === "internal") {
    return (
      <Link className={className} {...rest} href={rest.href as string}>
        {children}
      </Link>
    );
  }

  return (
    <a className={className} {...rest} rel="noopener noreferrer">
      {children}
    </a>
  );
}
