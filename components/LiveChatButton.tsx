'use client';

import type { ButtonHTMLAttributes, ReactNode } from 'react';

type LiveChatButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'> & {
  children: ReactNode;
};

export default function LiveChatButton({ children, className = '', ...props }: LiveChatButtonProps) {
  const openChat = () => {
    const chatWindow = window as typeof window & {
      Tawk_API?: { maximize?: () => void };
      Intercom?: (action: string) => void;
      $zopim?: { livechat?: { window?: { show?: () => void } } };
      zE?: any;
    };

    if (typeof chatWindow.Tawk_API?.maximize === 'function') {
      chatWindow.Tawk_API.maximize();
      return;
    }

    if (typeof chatWindow.zE === 'function') {
      try {
        chatWindow.zE('webWidget', 'open');
        return;
      } catch (e) {}
      try {
        chatWindow.zE('messenger', 'open');
        return;
      } catch (e) {}
    }

    if (typeof chatWindow.$zopim?.livechat?.window?.show === 'function') {
      chatWindow.$zopim.livechat.window.show();
      return;
    }

    if (typeof chatWindow.Intercom === 'function') {
      chatWindow.Intercom('show');
      return;
    }

    window.dispatchEvent(new CustomEvent('open-live-chat'));
  };

  return (
    <button
      {...props}
      type="button"
      className={`chat-button-reset ${className}`.trim()}
      onClick={openChat}
    >
      {children}
    </button>
  );
}
