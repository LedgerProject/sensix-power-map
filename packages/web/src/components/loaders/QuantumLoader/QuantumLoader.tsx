import React from 'react';

import { Loader, LoaderProps } from './QuantumLoader.style';

export const QuantumLoader = React.forwardRef<HTMLDivElement, LoaderProps>(function(props, ref) {
	return <Loader {...props} ref={ref} />;
});
