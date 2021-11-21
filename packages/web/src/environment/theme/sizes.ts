export const Sizes = {
	sm: 768,
	md: 1092,
	hd: 1416,
	xl: 1656,
	fhd: 1920,
	qhd: 3840
};

export const MediaQueries = {
	app: `only screen and (max-width: ${Sizes.md - 1}px)`,
	phone: `only screen and (min-width: ${Sizes.sm}px) and (max-width: ${Sizes.md - 1}px)`,
	tablet: `only screen and (min-width: ${Sizes.md}px) and (max-width: ${Sizes.hd - 1}px)`,
	desktop: `only screen and (min-width: ${Sizes.hd}px)`,
	fhd: `only screen and (min-width: ${Sizes.fhd}px)`,
	qhd: `only screen and (min-width: ${Sizes.qhd}px)`
};
