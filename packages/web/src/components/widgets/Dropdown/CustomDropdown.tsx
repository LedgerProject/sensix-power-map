import React from 'react';

import { BaseDropdown, BaseDropdownProps, CommonDropdownProps } from './BaseDropdown';
import { DropdownEmpty } from './DropdownEmpty';
import { DropdownItem } from './DropdownItem';

import { useDropdown } from './useDropdown';
import { Section } from './style';

interface Props<T> extends BaseDropdownProps<T>, CommonDropdownProps {
	toggleComponent: (props: {
		ref: React.RefObject<HTMLDivElement>;
		open: boolean;
		onToggle: (state?: boolean) => void;
	}) => React.ReactElement;
}

export function CustomDropdown<T>({
	disabled = false,
	open = false,
	toggleComponent,
	onSelect,
	...props
}: Props<T>) {
	const { bounds, isOpen, ref, handleOpenChange, handleToggle } = useDropdown({ disabled, open });

	return (
		<BaseDropdown
			{...props}
			bounds={bounds}
			open={isOpen}
			toggleComponent={toggleComponent({ ref, open: isOpen, onToggle: handleToggle })}
			toggleRef={ref}
			onOpenChange={handleOpenChange}
			onSelect={onSelect}
		/>
	);
}

CustomDropdown.Empty = DropdownEmpty;
CustomDropdown.Item = DropdownItem;
CustomDropdown.Section = Section;
