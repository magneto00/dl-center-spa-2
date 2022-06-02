import React from 'react';

type Props = {
  content: string;
  tag?: keyof React.ReactHTML;
  className?: string;
};

export function Html({ content, tag = 'div', className }: Props) {
  return React.createElement(tag, {
    dangerouslySetInnerHTML: { __html: content },
    className,
  });
}
