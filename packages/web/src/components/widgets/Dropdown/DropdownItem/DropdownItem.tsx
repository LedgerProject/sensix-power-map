import React, { useEffect, useRef, useState } from 'react';

import { QuantumLoader } from 'components/loaders';
import { MediaQueries } from 'environment';
import { useMediaQuery, usePrevious } from 'hooks';
import { Nullable } from 'types';
import { Icon } from 'components/icons';

import { DropdownInjectedProps } from '../BaseDropdown';
import { Option } from './DropdownItem.style';

interface Props<T> extends DropdownInjectedProps<T> {
	active?: boolean;
	async?: boolean;
	children: React.ReactNode;
	danger?: boolean;
	data?: Nullable<T>;
	disabled?: boolean;
	interactive?: boolean;
	loading?: boolean;
	style?: React.CSSProperties;
	onClose?: () => void;
	onClick?: () => void;
}

export function DropdownItem<T>({
	active = false,
	async = false,
	children,
	danger = false,
	data,
	disabled = false,
	focused = false,
	interactive = true,
	loading = false,
	selected,
	style,
	onClick,
	onClose,
	onSelect
}: Props<T>) {
	const isPhone = useMediaQuery(MediaQueries.phone);
	const ref = useRef<HTMLDivElement>(null);
	const [shouldClose, setShouldClose] = useState(false);

	useEffect(() => {
		if (focused && ref.current) {
			ref.current.focus();
		}
	}, [focused]);

	const prevLoading = usePrevious(loading);
	useEffect(() => {
		if (shouldClose && prevLoading && !loading && onClose) {
			onClose();
		}
		// eslint-disable-next-line
	}, [loading, prevLoading, shouldClose]);

	function handleClick(e?: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		if (e) {
			e.preventDefault();
			e.stopPropagation();
		}

		if (!disabled && interactive) {
			onClick?.();
			if (data !== null && data !== undefined) {
				onSelect?.(data);
			}
		}

		if (!async) {
			if (!disabled && interactive) onClose?.();
		} else {
			setShouldClose(true);
		}
	}

	function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
		if (e.key === 'Enter' && focused) {
			e.preventDefault();
			e.stopPropagation();
			handleClick();
		}
	}

	let isSelected = active;
	if (data && selected) isSelected = selected(data);

	return (
		<Option
			aria-disabled={disabled}
			aria-selected={isSelected}
			danger={danger}
			disabled={disabled}
			interactive={interactive}
			ref={ref}
			role="option"
			selected={isSelected}
			style={style}
			tabIndex={0}
			onClick={handleClick}
			onKeyDown={handleKeyDown}
		>
			{isPhone ? <span>{children}</span> : children}
			{isSelected && <Icon size={2.4} type={(t) => t.Checkmark} />}
			{loading && <QuantumLoader size={2.4} />}
		</Option>
	);
}
