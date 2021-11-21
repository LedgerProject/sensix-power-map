import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';

import { ApplicationState } from 'store';
import { ThunkDispatch } from 'store/types';

export function useCallbackOnce<T extends (...args: never[]) => unknown>(callback: T) {
	// eslint-disable-next-line
	return useCallback(callback, []);
}

export function useEffectOnce(effect: React.EffectCallback) {
	// eslint-disable-next-line
	useEffect(effect, []);
}

export function useMemoOnce<T>(factory: () => T): T {
	// eslint-disable-next-line
	return useMemo<T>(factory, []);
}

export const usePrevious = <T>(value: T): T | undefined => {
	const ref = useRef<T>();

	useEffect(() => void (ref.current = value), [value]);

	return ref.current;
};

export function useSelector<T>(selector: (state: ApplicationState) => T) {
	return useReduxSelector((state: ApplicationState) => selector(state));
}

export function useDispatch() {
	return useReduxDispatch<ThunkDispatch>();
}
