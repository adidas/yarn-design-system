import { style } from '~/services/style';

let mobileBreakpoint = 0;

if (process.browser) {
  mobileBreakpoint = parseInt(style.variables['screen-xs-max'], 10);
}

export function isMobile() {
  let mobile = false;

  if (process.browser) {
    const { clientWidth } = window.document.body;
    const fontSize = parseInt(window.getComputedStyle(document.body).getPropertyValue('font-size'), 10);

    mobile = clientWidth <= fontSize * mobileBreakpoint;
  }

  return mobile;
}
