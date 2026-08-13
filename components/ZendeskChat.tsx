'use client';

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    $zopim: any;
    setButtonURL: () => void;
    toggleChat: () => void;
  }
}

export default function ZendeskChat() {
  useEffect(() => {
    // Define helper functions on the window object
    window.setButtonURL = function () {
      if (window.$zopim?.livechat?.window) {
        window.$zopim.livechat.window.show();
      }
    };

    window.toggleChat = function () {
      if (window.$zopim?.livechat?.window) {
        window.$zopim.livechat.window.toggle();
      }
    };

    // Use event delegation to handle click events on any dynamic or static elements with class 'chat'
    const handleChatClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('.chat');
      if (target) {
        e.preventDefault();
        window.toggleChat();
      }
    };

    document.addEventListener('click', handleChatClick);

    return () => {
      document.removeEventListener('click', handleChatClick);
    };
  }, []);

  return (
    <>
      <Script
        id="ze-snippet"
        src="https://static.zdassets.com/ekr/snippet.js?key=239dfa05-01f6-4362-bfb9-4f75a7455e10"
        strategy="lazyOnload"
      />
      <Script id="zopim-init" strategy="lazyOnload">
        {`
          window.$zopim || (function (d, s) {
            var z = window.$zopim = function (c) {
              z._.push(c)
            }, $ = z.s = d.createElement(s), e = d.getElementsByTagName(s)[0];
            z.set = function (o) {
              z.set._.push(o)
            };
            z._ = [];
            z.set._ = [];
            $.async = true;
            $.setAttribute("charset", "utf-8");
            $.src = "https://v2.zopim.com/?239dfa05-01f6-4362-bfb9-4f75a7455e10";
            z.t = +new Date;
            $.type = "text/javascript";
            e.parentNode.insertBefore($, e);
          })(document, "script");

          $zopim(function () {
            function a(val) {
              if (val >= 1 && window.$zopim?.livechat?.window) {
                window.$zopim.livechat.window.show();
              }
            }
            if (window.$zopim?.livechat) {
              window.$zopim.livechat.setOnUnreadMsgs(a);
            }
          });
        `}
      </Script>
    </>
  );
}
