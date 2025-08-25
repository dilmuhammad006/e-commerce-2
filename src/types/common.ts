import type { ReactNode } from 'react';

export interface ReactNodeChildrenProps {
  children: ReactNode;
}

export enum Languages {
  uz = 'uz',
  ru = 'ru',
  eng = 'eng',
}
export interface AcceptLanguage {
  language: Languages;
}
