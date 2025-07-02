interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  openInNewTab?: boolean;
  className?: string;
}

export default function CustomLink({
  href,
  children,
  openInNewTab = false,
  className = '',
}: CustomLinkProps) {
  const linkProps = openInNewTab
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a href={href} className={className} {...linkProps}>
      {children}
    </a>
  );
}
