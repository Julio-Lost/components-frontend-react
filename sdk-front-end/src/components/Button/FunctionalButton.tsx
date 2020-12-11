import React, { PropsWithChildren } from 'react';
import * as S from './styles';
import { Button } from './Button';

interface Props {
  onClick: () => void;
  children: string;
  color: 'primary' | 'secondary' | string;
  Icon?: React.ReactNode;
}

export const FunctionalButton = ({ children, onClick, color }: PropsWithChildren<Props>) => {
  return (
    <S.FunctionalButton>
      <Button onClick={onClick} color={color}>
        {children}
      </Button>
    </S.FunctionalButton>
  );
};
