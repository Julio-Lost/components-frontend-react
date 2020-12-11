import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from './Button';
import * as S from './styles';

interface Props {
  path: string;
  children: string;
}

export const NavigateButton = ({ children, path }: Props) => {
  const history = useHistory();

  function clickHandler() {
    history.push(path);
  }

  return (
    <S.NavigateButton>
      <Button onClick={clickHandler} path={path}>
        {children}
      </Button>
    </S.NavigateButton>
  );
};
