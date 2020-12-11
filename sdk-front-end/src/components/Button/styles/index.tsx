/* eslint-disable no-useless-rename */
import { Button } from '@material-ui/core';
import styled from 'styled-components';

type BaseButtonProps = {
  bgColor?: string;
  hoverBgColor?: string;
  clickBgColor?: string;
  textColor?: string;
};

export const BaseButton = styled(Button)<BaseButtonProps>`
  min-width: 200px;

  &.MuiButton-contained {
    ${({ bgColor: bgColor }) => `background-color: ${bgColor}`};

    :hover {
      ${({ hoverBgColor: hoverBgColor }) => `background-color: ${hoverBgColor}`};
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
    ${({ textColor }) => `color: ${textColor}`};
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
