import React, { useEffect, useState } from 'react';

import { useThemeContext, usePrevious } from 'hooks';

import { QuantumLoader } from '../QuantumLoader';
import { Container, Content } from './ContentLoader.style';

interface Props {
	children: React.ReactNode;
	condition?: boolean;
	immediate?: boolean;
	loading: boolean;
	size?: number;
}

export function ContentLoader({
	children,
	condition = true,
	immediate = false,
	loading,
	size = 8
}: Props) {
	const [isLoading, setIsLoading] = useState(immediate);
	const theme = useThemeContext();

	const wasLoading = usePrevious(loading);
	useEffect(() => {
		if (isLoading && wasLoading && !loading) {
			setIsLoading(false);
		}

		if (condition && loading && !isLoading) {
			setIsLoading(true);
		}
		// eslint-disable-next-line
	}, [condition, loading]);

	return (
		<>
			{isLoading && (
				<Container>
					<QuantumLoader color={theme.loader.page.color} size={size} />
				</Container>
			)}
			<Content $loading={isLoading}>{children}</Content>
		</>
	);
}
