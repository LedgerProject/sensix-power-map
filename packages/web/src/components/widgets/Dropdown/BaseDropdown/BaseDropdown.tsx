/**
 * An accessible listbox component.
 *
 * @see WAI-ARIA https://www.w3.org/TR/wai-aria-practices-1.2/#Listbox
 */

import React, { useRef, useState, useEffect } from 'react';

import { isElement } from 'helpers';
import { useCallbackOnce, useEffectOnce } from 'hooks';
import { PlacementProps, LayoutStyleProps, Position } from 'types';

import { DropdownItem } from '../DropdownItem';
import { DropdownMenu } from '../DropdownMenu';
import { DropdownSearchInput } from '../DropdownSearchInput';

import { Container, Error } from './BaseDropdown.style';

function getInitialFocus(searchComponent: React.ReactNode) {
	if (isElement(searchComponent, DropdownSearchInput.name)) return 0;
	return -1;
}

export interface DropdownInjectedProps<T> {
	focused?: boolean;
	selected?: (data: T) => boolean;
	onClose?: () => void;
	onSelect?: (data: T) => void;
}

export interface BaseDropdownProps<T> extends LayoutStyleProps {
	children?: React.ReactNode;
	className?: string;
	flex?: number;
	label?: string;
	error?: string;
	menuPosition?: Position;
	offset?: PlacementProps;
	open?: boolean;
	outsideDeps?: React.DependencyList;
	position?: React.CSSProperties['position'];
	selected?: (data: T) => boolean;
	onClose?: () => void;
	onOutsideClick?: () => void;
	onSelect?: (data: T, type?: T) => void;
}

export interface CommonDropdownProps {
	disabled?: boolean;
}

interface Props<T> extends BaseDropdownProps<T> {
	bounds: ClientRect;
	open: boolean;
	searchComponent?: React.ReactElement;
	toggleRef: React.RefObject<HTMLDivElement>;
	toggleComponent?: React.ReactElement;
	onOpenChange: (value: boolean) => void;
}

export function BaseDropdown<T>({
	children,
	className,
	flex,
	menuPosition,
	open,
	error,
	outsideDeps,
	position,
	searchComponent,
	selected,
	toggleComponent,
	toggleRef,
	onClose,
	onOpenChange,
	onOutsideClick,
	onSelect,
	...props
}: Props<T>) {
	const itemsCount = useRef(0);
	const menuRef = useRef<HTMLDivElement>(null);
	const [focused, setFocused] = useState(getInitialFocus(searchComponent));

	useEffectOnce(() => {
		function callback(e: KeyboardEvent) {
			if (e.key === 'Tab') {
				setFocused(0);
			}
		}

		document.addEventListener('keydown', callback);
		return () => document.removeEventListener('keydown', callback);
	});

	useEffect(() => {
		function callback(e: Event) {
			if (
				menuRef.current &&
				!menuRef.current.contains(e.target as Node) &&
				toggleRef.current &&
				!toggleRef.current.contains(e.target as Node)
			) {
				onOutsideClick?.();
				handleClose();
			}
		}

		document.addEventListener('mousedown', callback);
		return () => document.removeEventListener('mousedown', callback);
		// eslint-disable-next-line
	}, outsideDeps);

	useEffect(() => {
		if (!open) {
			setFocused(getInitialFocus(searchComponent));
			onClose?.();
		}
		// eslint-disable-next-line
	}, [open]);

	function enhanceChildren(children: React.ReactNode): React.ReactNode {
		itemsCount.current = 0;

		if (isElement(searchComponent, DropdownSearchInput.name)) {
			itemsCount.current++;
		}

		return React.Children.map(children, (child) => {
			if (!React.isValidElement(child) || typeof child.type === 'string') return child;

			if (child.type.name !== DropdownItem.name) {
				if (!child.props.children) return child;

				return React.cloneElement(child, {
					children: enhanceChildren(child.props.children)
				});
			}

			itemsCount.current++;
			return React.cloneElement<DropdownInjectedProps<T>>(child, {
				focused: focused === itemsCount.current - 1,
				selected,
				onClose: handleClose,
				onSelect
			});
		});
	}

	function enhanceMenuHeader(
		element?: React.ReactElement<DropdownInjectedProps<T>>
	): React.ReactNode {
		if (!element) return null;

		if (React.isValidElement(element) && typeof element.type !== 'string') {
			if (element.type.name === DropdownSearchInput.name) {
				return React.cloneElement<DropdownInjectedProps<T>>(element, {
					focused: focused === 0
				});
			}
		}

		return element;
	}

	const handleClose = useCallbackOnce(() => {
		setFocused(-1);
		onOpenChange(false);
		onClose?.();
	});

	function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
		const count = itemsCount.current;

		if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter') {
			e.preventDefault();

			if (!open) onOpenChange(true);
			else {
				if (e.key === 'ArrowDown') setFocused((i) => (i + 1 + count) % count);
				if (e.key === 'ArrowUp') setFocused((i) => (i - 1 + count) % count);
			}
		}

		if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
			if (focused !== 0) {
				toggleRef.current?.focus();
				setFocused(-1);
			}
		}

		if (e.key === 'Tab') {
			if (open) handleClose();
		}
	}

	return (
		<Container className={className} flex={flex} position={position} onKeyDown={handleKeyDown}>
			{toggleComponent}
			{open && (
				<DropdownMenu
					{...props}
					headerComponent={enhanceMenuHeader(searchComponent)}
					position={menuPosition}
					ref={menuRef}
				>
					{enhanceChildren(children)}
				</DropdownMenu>
			)}
			{!!error && <Error>{error}</Error>}
		</Container>
	);
}
