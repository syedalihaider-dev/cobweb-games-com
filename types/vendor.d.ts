declare module 'slick-carousel';
declare module '@fancyapps/fancybox';

interface Window {
  $?: JQueryStatic;
  jQuery?: JQueryStatic;
}

interface JQuery {
  slick(settings?: unknown | string, ...args: unknown[]): JQuery;
  fancybox(settings?: unknown): JQuery;
}

declare module 'wowjs' {
  export class WOW {
    constructor(options?: { mobile?: boolean; live?: boolean });
    init(): void;
  }
}
