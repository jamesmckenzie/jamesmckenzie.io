import { css, CSSObject } from "styled-components";

interface MediaSize {
  desktop: number;
  tablet: number;
  phone: number;
}

const sizes: MediaSize = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

export const media = Object.keys(sizes).reduce(
  (acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${(css as any)(...args)};
      }
    `;

    return acc;
  },
  {} as { [k in keyof MediaSize]: any }
);
