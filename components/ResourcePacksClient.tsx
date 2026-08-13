'use client';

import { useEffect } from 'react';

export default function ResourcePacksClient() {
  useEffect(() => {
    // Basic implementation of load-more logic since the DOM elements are rendered by Server Components
    const loadServices = document.querySelectorAll('.loadservice') as NodeListOf<HTMLElement>;
    const loadMoreBtn = document.querySelector('.load-more') as HTMLElement;
    
    if (loadServices.length === 0) return;

    // Initially hide all but first 6
    loadServices.forEach((el, index) => {
      if (index >= 6) {
        el.style.display = 'none';
      }
    });

    const handleLoadMore = (e: MouseEvent) => {
      e.preventDefault();
      const hiddenServices = Array.from(document.querySelectorAll('.loadservice')).filter(
        el => (el as HTMLElement).style.display === 'none'
      ) as HTMLElement[];
      
      const toShow = hiddenServices.slice(0, 3);
      toShow.forEach(el => {
        el.style.display = 'block';
      });

      if (hiddenServices.length <= 3 && loadMoreBtn) {
        loadMoreBtn.style.visibility = 'hidden';
      }
    };

    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', handleLoadMore);
    }

    return () => {
      if (loadMoreBtn) {
        loadMoreBtn.removeEventListener('click', handleLoadMore);
      }
    };
  }, []);

  return null;
}
