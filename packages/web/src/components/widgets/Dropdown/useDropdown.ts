import { useCallback, useEffect, useState } from 'react';
import { useCallbackOnce, useMeasure } from 'hooks';

interface Props {
	disabled: boolean;
	open: boolean;
}

export function useDropdown({ disabled, open }: Props) {
	const [ref, bounds] = useMeasure<HTMLDivElement>();
	const [isOpen, setIsOpen] = useState(open);

	useEffect(() => {
		if (open !== isOpen) setIsOpen(open);
	}, [open]);

	const handleOpenChange = useCallbackOnce((value: boolean) => {
		setIsOpen(value);
	});

	const handleToggle = useCallback(() => {
		if (!disabled) setIsOpen(s => !s);
	}, [disabled]);

	return {
		bounds,
		isOpen,
		ref,
		handleOpenChange,
		handleToggle
	};
}
