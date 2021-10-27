import React, { useEffect, useRef } from 'react';

import { InputType } from 'types';

import { DropdownInjectedProps } from '../BaseDropdown';
import { Container, Icon, SearchInput } from './DropdownSearchInput.style';

interface Props<T> extends DropdownInjectedProps<T> {
	name: string;
	placeholder: string;
	type: InputType;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	autocomplete?: 'on' | 'off';
}

export function DropdownSearchInput<T>({
	focused,
	name,
	placeholder,
	type,
	value,
	onChange,
	autocomplete = 'off'
}: Props<T>) {
	const ref = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (focused && ref.current) {
			ref.current.focus();
		}
	}, [focused]);

	return (
		<Container>
			<Icon size={2.4} type={t => t.Search} />
			<SearchInput
				autoComplete={autocomplete}
				autoFocus
				name={name}
				placeholder={placeholder}
				ref={ref}
				type={type}
				value={value}
				onChange={onChange}
			/>
		</Container>
	);
}
