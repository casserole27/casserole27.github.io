export const ControlTypes = {
  PORTFOLIO: 'PORTFOLIO',
  LEWISLABS: 'LEWISLABS',
  GITHUB: 'GITHUB',
  ABOUT_ME: 'ABOUT_ME',
  RESUME: 'RESUME',
  LINKEDIN: 'LINKEDIN',
  HOME: 'HOME'
} as const;

export type ControlTypesInput = keyof typeof ControlTypes;

export const ControlTypesDisplay = {
  [ControlTypes.PORTFOLIO]:  'portfolio',
  [ControlTypes.LEWISLABS]:  'lewislabs',
  [ControlTypes.GITHUB]:  'github',
  [ControlTypes.ABOUT_ME]:  'about me',
  [ControlTypes.RESUME]:  'resume',
  [ControlTypes.LINKEDIN]:  'linkedIn',
  [ControlTypes.HOME]:  'software engineer',
}