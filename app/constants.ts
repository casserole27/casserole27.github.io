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

export const InternalRoutes = {
  [ControlTypes.PORTFOLIO]:  'portfolio',
  [ControlTypes.LEWISLABS]:  'lewislabs',
  [ControlTypes.ABOUT_ME]:  'about-me',
  [ControlTypes.HOME]:  '',
} as const;

export type InternalRoutesInput = keyof typeof InternalRoutes;

export const ExternalLinks = {
  [ControlTypes.RESUME]:  '/assets/clewis-software-engineering-resume.pdf',
  [ControlTypes.GITHUB]:  'https://github.com/casserole27',
  [ControlTypes.LINKEDIN]:  'https://www.linkedin.com/in/clewisdev/',
}

export type ExternalLinksInput = keyof typeof ExternalLinks;