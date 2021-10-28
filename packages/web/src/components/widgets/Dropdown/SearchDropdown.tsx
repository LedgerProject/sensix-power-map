import React, { useEffect, useState, useCallback } from 'react';
import { Suggestion } from '@sensix-map/api';

import { Nullable } from 'types';

import { BaseDropdown, BaseDropdownProps, CommonDropdownProps } from './BaseDropdown';
import { DropdownEmpty } from './DropdownEmpty';
import { DropdownItem } from './DropdownItem';
import { DropdownSearchInput } from './DropdownSearchInput';
import { DropdownToggle } from './DropdownToggle';

import { useDropdown } from './useDropdown';
import { Section } from './style';

type SearchSuggestion = Suggestion<string | number>;

interface Props<T> extends BaseDropdownProps<T>, CommonDropdownProps {
	defaultSelectedItem?: Nullable<T>;
	minimal?: boolean;
	suggestions: SearchSuggestion[];
	title: (data: Nullable<T>) => string;
	value: string;
	invalid?: boolean;
	error?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onOpen?: () => void;
	placeholder: string;
	selectDeps?: React.DependencyList;
}

export function SearchDropdown<T>({
	defaultSelectedItem = null,
	disabled = false,
	margin,
	minimal,
	open = false,
	suggestions,
	title,
	value,
	invalid,
	error,
	width,
	onChange,
	onSelect,
	onOpen,
	placeholder,
	selectDeps = [],
	...props
}: Props<T>) {
	const { bounds, isOpen, ref, handleOpenChange, handleToggle } = useDropdown({ disabled, open });
	const [items, setItems] = useState(suggestions);
	const [selectedItem, setSelectedItem] = useState(defaultSelectedItem);

	useEffect(() => {
		setItems(suggestions.filter((d) => d.name.toLowerCase().includes(value.toLowerCase())));
	}, [suggestions, value]);

	const handleSelect = useCallback((data: T) => {
		setSelectedItem(data);
		onSelect?.(data);
	}, selectDeps);

	useEffect(() => {
		if (isOpen) onOpen && onOpen();
	}, [isOpen]);

	return (
		<BaseDropdown
			{...props}
			error={error}
			bounds={bounds}
			margin={margin}
			open={isOpen}
			searchComponent={
				<DropdownSearchInput
					name="search"
					placeholder={placeholder}
					type="text"
					value={value}
					onChange={onChange}
				/>
			}
			toggleComponent={
				<DropdownToggle
					invalid={!!error || invalid}
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
		>
			{items.length === 0 ? (
				<DropdownEmpty />
			) : (
				items.map((suggestion) => (
					<DropdownItem data={suggestion} key={`${suggestion.name}-${suggestion.id}`}>
						{suggestion.name}
					</DropdownItem>
				))
			)}
		</BaseDropdown>
	);
}

SearchDropdown.Empty = DropdownEmpty;
SearchDropdown.Item = DropdownItem;
SearchDropdown.Section = Section;
