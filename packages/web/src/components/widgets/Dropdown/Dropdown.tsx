import React, { useState } from 'react';

import { useCallbackOnce } from 'hooks';
import { Nullable } from 'types';

import { BaseDropdown, BaseDropdownProps, CommonDropdownProps } from './BaseDropdown';
import { DropdownItem } from './DropdownItem';
import { DropdownToggle } from './DropdownToggle';

import { useDropdown } from './useDropdown';
import { Section } from './style';

interface Props<T> extends BaseDropdownProps<T>, CommonDropdownProps {
	defaultSelectedItem?: Nullable<T>;
	minimal?: boolean;
	title: (data: Nullable<T>) => string;
}

export function Dropdown<T>({
	defaultSelectedItem = null,
	disabled = false,
	margin,
	minimal,
	open = false,
	title,
	width,
	onSelect,
	...props
}: Props<T>) {
	const { bounds, isOpen, ref, handleOpenChange, handleToggle } = useDropdown({ disabled, open });
	const [selectedItem, setSelectedItem] = useState(defaultSelectedItem);

	const handleSelect = useCallbackOnce((data: T) => {
		setSelectedItem(data);
		onSelect?.(data);
	});

	return (
		<BaseDropdown
			{...props}
			bounds={bounds}
			margin={margin}
			open={isOpen}
			toggleComponent={
				<DropdownToggle
					disabled={disabled}
					focused={isOpen}
					margin={margin}
					minimal={minimal}
					open={isOpen}
					ref={ref}
					title={title?.(selectedItem)}
					width={width}
					onToggle={handleToggle}
				/>
			}
			toggleRef={ref}
			width={width}
			onOpenChange={handleOpenChange}
			onSelect={handleSelect}
		/>
	);
}

Dropdown.Item = DropdownItem;
Dropdown.Section = Section;
