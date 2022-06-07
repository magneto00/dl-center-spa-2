type Props = {
  href: string;
  children: React.ReactNode;
  openInNewTab: boolean;
  className?: string;
};

export function Link({ href, openInNewTab, className, children }: Props) {
  const linkTarget = openInNewTab
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {
        target: '_self',
      };

  return (
    <a href={href} className={className} {...linkTarget}>
      {children}
    </a>
  );
}
