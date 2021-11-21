import { useLayoutEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

interface Options {
	wait?: number;
	on?: boolean;
}

export function useMeasure<T extends HTMLElement>({ on = true }: Options = {}): [
	React.RefObject<T>,
	ClientRect
] {
	const ref = useRef<T>(null);
	const [bounds, setBounds] = useState({
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		width: 0,
		height: 0
	});

	const [ro] = useState(
		() => new ResizeObserver(([entry]: ResizeObserverEntry[]) => setBounds(entry.contentRect))
	);

	useLayoutEffect(() => {
		if (on && ref.current) {
			ro.observe(ref.current);
		}

		return () => ro.disconnect();
	}, [on, ro]);

	//@ts-ignore
	return [ref, bounds];
}
