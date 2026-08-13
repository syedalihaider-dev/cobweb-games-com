interface SlickInstance {
  currentSlide?: number;
  slideCount?: number;
}

export interface SlickNavHighlightBinding {
  refresh: () => void;
  destroy: () => void;
}

const EVENT_NAMESPACE = '.cobwebNavHighlight';

/** Keeps a Slick navigation list highlighted from the content slider's index. */
export function bindSlickNavHighlight(
  $: JQueryStatic,
  contentSelector: string,
  navigationSelector: string,
  activeClass = 'is-slick-highlighted',
): SlickNavHighlightBinding {
  const $content = $(contentSelector);

  const update = (requestedIndex = 0, suppliedSlideCount?: number) => {
    const $navigationSlides = $(navigationSelector).find('.slick-slide');
    const fallbackCount = $(contentSelector).children().length;
    const slideCount = suppliedSlideCount || fallbackCount;

    if (!slideCount) return;

    const activeIndex = ((requestedIndex % slideCount) + slideCount) % slideCount;
    $navigationSlides.removeClass(activeClass);

    $navigationSlides.each((_position, element) => {
      const rawIndex = Number($(element).attr('data-slick-index'));
      if (!Number.isFinite(rawIndex)) return;

      const normalizedIndex = ((rawIndex % slideCount) + slideCount) % slideCount;
      if (normalizedIndex === activeIndex) {
        $(element).addClass(activeClass);
      }
    });
  };

  const refresh = () => {
    if (!$content.hasClass('slick-initialized')) return;

    const slick = $content.slick('getSlick') as unknown as SlickInstance;
    update(slick.currentSlide || 0, slick.slideCount);
  };

  $content
    .off(EVENT_NAMESPACE)
    .on(
      `init${EVENT_NAMESPACE} reInit${EVENT_NAMESPACE} afterChange${EVENT_NAMESPACE}`,
      (_event, slick: SlickInstance, currentSlide?: number) => {
        update(currentSlide ?? slick.currentSlide ?? 0, slick.slideCount);
      },
    );

  return {
    refresh,
    destroy: () => {
      $content.off(EVENT_NAMESPACE);
      $(navigationSelector).find('.slick-slide').removeClass(activeClass);
    },
  };
}
