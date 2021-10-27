/**
 * An accessible text input component.
 */

import React from 'react';

import { InputType } from 'types';
import { Container, Error, Input, Label, Floating, StyleProps } from './style';

interface Props extends React.InputHTMLAttributes<HTMLInputElement>, StyleProps {
	name: string;
	type: InputType;
	value: string | number;
	icon?: React.ReactNode;
	label?: string;
	placeholder?: string;
	error?: string;
	invalid?: boolean;
	disabled?: boolean;
	className?: string;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const TextInput = React.forwardRef<HTMLInputElement, Props>(function(
	{
		type,
		value,
		className,
		icon,
		label,
		placeholder,
		name,
		error,
		min,
		max,
		readOnly,
		disabled = false,
		invalid,
		margin,
		width,
		onChange,
		onFocus,
		onBlur,
		onSubmit,
		...props
	},
	ref
) {
	function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
		if (type === 'number') {
			if (e.target.value && min !== undefined && Number(e.target.value) < Number(min)) {
				onChange &&
					onChange({ ...e, target: { ...e.target, name, value: min.toString() } });
			}

			if (e.target.value && max !== undefined && Number(e.target.value) > Number(max)) {
				onChange &&
					onChange({ ...e, target: { ...e.target, name, value: max.toString() } });
			}
		}

		onBlur && onBlur(e);
	}

	return (
		<Container className={className} margin={margin} width={width}>
			{label && <Label htmlFor={name}>{label}</Label>}
			<Input
				{...props}
				ref={ref}
				type={type}
				id={name}
				invalid={!!error || invalid}
				name={name}
				min={min}
				max={max}
				placeholder={placeholder}
				disabled={disabled}
				aria-label={label}
				aria-disabled={disabled}
				aria-readonly={readOnly}
				readOnly={readOnly}
				value={value}
				onChange={onChange}
				onBlur={handleBlur}
				onFocus={onFocus}
			/>
			{!!error && <Error>{error}</Error>}
			{icon && <Floating>{icon}</Floating>}
		</Container>
	);
});
