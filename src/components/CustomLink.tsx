import { MdOpenInNew } from 'react-icons/md';

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  openInNewTab?: boolean;
  className?: string;
  showIcon?: boolean;
}

export default function CustomLink({
  href,
  children,
  openInNewTab = false,
  className = '',
  // Default to true if openInNewTab is true
  showIcon = openInNewTab,
}: CustomLinkProps) {
  const linkProps = openInNewTab
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a href={href} className={className} {...linkProps}>
      {children}
      {/* Conditionally render icon */}
      {openInNewTab && showIcon && <MdOpenInNew className='inline ml-1' />}
    </a>
  );
}
