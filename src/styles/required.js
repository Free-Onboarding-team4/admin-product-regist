import { css } from 'styled-components';

export const REQ_ICON = css`
  span {
    position: relative;

    &::after {
      ${({ required }) =>
        required &&
        css`
          content: '*';
          position: absolute;
          margin-left: 4px;
        `};
    }
  }
`;
