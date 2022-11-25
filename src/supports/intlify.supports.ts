import { Ref } from 'vue'

export enum EISOCodes {
  ENGLISH = 'en',
  POLISH = 'pl',
}

export enum ELocalesNames {
  ENGLISH = 'english',
  POLISH = 'polish',
}

export type TISOCodes = EISOCodes.ENGLISH | EISOCodes.POLISH

export type TLocalesNames = ELocalesNames.ENGLISH | ELocalesNames.POLISH

export interface IAvailableLocales {
  [key: string]: {
    name: TLocalesNames
    iso: TISOCodes
  }
}

export interface ILanguageManager {
  localeSetting: Ref<string>
  init: () => void
}
