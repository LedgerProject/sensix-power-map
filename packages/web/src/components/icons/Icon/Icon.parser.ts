import { Icons } from 'environment';

export enum IconType {
	Close = 'close',
	Logo = 'logo',
	Checkmark = 'checkmark'
}

export function parseIconType(type?: string) {
	switch (type) {
		case IconType.Close:
			return Icons.Close;
		case IconType.Logo:
			return Icons.Logo;
		case IconType.Checkmark:
			return Icons.Checkmark;
	}
}
