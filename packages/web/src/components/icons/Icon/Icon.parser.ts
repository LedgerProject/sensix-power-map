import { Icons } from 'environment';

export enum IconType {
	Close = 'close',
	Logo = 'logo',
	Checkmark = 'checkmark',
	Search = 'search',
	ChevronDown = 'chevron-down'
}

export function parseIconType(type?: string) {
	switch (type) {
		case IconType.Close:
			return Icons.Close;
		case IconType.Logo:
			return Icons.Logo;
		case IconType.Checkmark:
			return Icons.Checkmark;
		case IconType.Search:
			return Icons.Search;
		case IconType.ChevronDown:
			return Icons.ChevronDown;
	}
}
