import React, { PropsWithChildren } from 'react';
import * as S from './styles';
import Color from 'color';

interface ButtonProps {
  color?: 'primary' | 'secondary' | string;
  onClick?: () => void;
  fullWidth?: boolean;
  Icon?: React.React.Node;
  textColor?: 'inherit' | string;
}

export const Button = ({
  color = 'primary',
  onClick,
  fullWidth = false,
  children,
  path,
  Icon,
  textColor,
}: PropsWithChildren<ButtonProps>) => {
  if (color === 'primary' || color === 'secondary') {
    return (
      <S.BotaoBase
        textColor={textColor}
        color={color}
        variant="contained"
        fullWidth={fullWidth}
        onClick={onClick}
        href={path}
      >
        {children}
      </S.BotaoBase>
    );
  } else {
    let corTexto = Color(textColor);
    const textoCor = corTexto.hex();
    let corprops = Color(color);
    const hovercolor = corprops.saturate(0.5).hex();
    const clickcolor = corprops.lighten(0.5).hex();

    return (
      <S.BotaoBase
        textColor={textoCor}
        bgColor={color}
        hoverBgColor={hovercolor}
        clickBgColor={clickcolor}
        variant="contained"
        fullWidth={fullWidth}
        onClick={onClick}
        href={path}
        Icon={Icon}
      >
        {children}
      </S.BotaoBase>
    );
  }
};
