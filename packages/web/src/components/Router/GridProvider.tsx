import { GridContext } from 'hooks/context';
import { Container } from './style';
import { useWindowSize } from 'hooks';
import { Memoize } from 'components/widgets';

interface Props {
	children: React.ReactNode;
}

export function GridProvider({ children }: Props) {
	const { width, resizing } = useWindowSize();

	const gutter = (2.4 / 100) * width;
	const offset = (10.6 / 100) * width;

	return (
		<Container>
			<GridContext.Provider value={{ columnsPerRow: 12, gutter, offset, resizing }}>
				<Memoize>{children}</Memoize>
			</GridContext.Provider>
		</Container>
	);
}
