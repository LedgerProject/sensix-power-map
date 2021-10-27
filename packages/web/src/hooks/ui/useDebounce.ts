import debounce from 'lodash/debounce';
import { useRef } from 'react';

import { DEFAULT_DEBOUNCE_TIME } from 'consts';

export function useDebounce<I = void>(callback: (input?: I) => void, wait = DEFAULT_DEBOUNCE_TIME) {
	return useRef(debounce(callback, wait)).current;
}
