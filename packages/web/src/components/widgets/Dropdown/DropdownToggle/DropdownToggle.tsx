import React from 'react';

import { Icon } from 'components/icons';
import { LayoutStyleProps } from 'types';

import { Toggle } from './DropdownToggle.style';

interface Props extends LayoutStyleProps {
	disabled?: boolean;
	focused: boolean;
	minimal?: boolean;
	invalid?: boolean;
	open: boolean;
	title?: string;
	onToggle: () => void;
}

export const DropdownToggle = React.forwardRef<HTMLDivElement, Props>(function(
	{
		invalid = false,
		disabled = false,
		focused,
		margin,
		minimal = false,
		open,
		title,
		width,
		onToggle
	},
	ref
) {
	return (
		<Toggle
			ref={ref}
			$invalid={invalid}
			$disabled={disabled}
			$focused={focused}
			margin={margin}
			$minimal={minimal}
			$open={open}
			tabIndex={0}
			width={width}
			onClick={onToggle}
		>
			{title}
			<Icon size={minimal ? 3.2 : 4} type={t => t.ChevronDown} />
		</Toggle>
	);
});
