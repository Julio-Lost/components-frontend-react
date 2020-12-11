import { Button } from '@material-ui/core';
import styled from 'styled-components';

type BotaoBaseProps = {
  bgColor?: string;
  hoverBgColor?: string;
  clickBgColor?: string;
  textColor?: string;
};

export const BotaoBase = styled(Button)<BotaoBaseProps>`
  min-width: 200px;

  &.MuiButton-contained {
    ${({ bgColor: bgColor }) => `background-color: ${bgColor}`};

    :hover {
      ${({ hoverBgColor: hoverBgColor }) =>
        `background-color: ${hoverBgColor}`};
    }

    :active {
      ${({ clickBgColor: clickBgColor }) => `background-color: ${clickBgColor}`}
    }
  }

  &.MuiButton-root {
    padding: 0 32px;
    width: 100%;
  }

  &.MuiButton-root.MuiButton-contained {
    ${({ textColor: textColor }) => `color: ${textColor}`};
  }

  &.MuiButton-root.MuiButton-contained {
    border-radius: 8px;
  }

  height: 72px;
`;

export const NavigateButton = styled.div`
  width: 100%;
  background-color: ${({ color }) => color};
  color: ${({ color }) => color};
`;

export const FunctionalButton = styled.div`
  color: ${({ color }) => color};
`;
