import * as S from './Button.styled';

type Props = {
  type?: 'submit' | 'reset' | 'button';
  label: string;
  btnTheme: string;
  href?: string;
  openInNewTab?: boolean;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export function Button({
  type,
  label,
  href,
  btnTheme,
  handleClick,
  className,
  openInNewTab,
}: Props) {
  const linkTarget = openInNewTab
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {
        target: '_self',
      };

  return href ? (
    <S.Link
      href={href}
      btnTheme={btnTheme}
      className={className}
      {...linkTarget}
    >
      {label}
    </S.Link>
  ) : (
    <S.Button
      type={type}
      onClick={handleClick}
      btnTheme={btnTheme}
      className={className}
    >
      {label}
    </S.Button>
  );
}
