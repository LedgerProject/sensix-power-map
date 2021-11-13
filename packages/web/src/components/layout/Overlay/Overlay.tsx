import React, { useEffect, useState } from 'react';
import { useSpring } from 'react-spring';

import { Colors } from 'environment';
import { Link } from 'components';
import { useActiveCell, useCell, useStatusColors, useTimeFilters, useCellFilters } from 'hooks';
import {
	ListItem,
	Container,
	CloseButton,
	H6,
	ChartRow,
	P,
	H7,
	Row,
	BreakLine,
	Span,
	ChartsWrapper,
	Column,
	Content
} from './Overlay.style';
import { TrendChart, BarChart } from 'components/charts';

const colors = [Colors.orange, Colors.alto];

const CHART_DATA_LIMIT = 12; //TODO: handle this in the reducer

export function Overlay(): JSX.Element | null {
	const timeFilters = useTimeFilters()[0];
	const [cellFilters, setCellFilters] = useCellFilters();

	const mapStatusToColors = useStatusColors();

	const [activeCellId, setActiveCellId] = useActiveCell();

	const [cell, getCell] = useCell(activeCellId ?? undefined);

	const [overlay, setOverlay] = useState<boolean>(false);

	const fadeStyles = useSpring({
		from: { opacity: 0 },
		to: {
			opacity: overlay ? 1 : 0
		}
	});

	useEffect(() => {
		cellFilters?.id && setActiveCellId(cellFilters.id);
		// eslint-disable-next-line
	}, [cellFilters.id]);

	useEffect(() => {
		if (activeCellId && timeFilters.range) {
			getCell({
				id: activeCellId,
				timeRange: timeFilters.range
			});
			setCellFilters({ id: activeCellId });
		}
		// eslint-disable-next-line
	}, [activeCellId, timeFilters.range]);

	useEffect(() => {
		cell && setOverlay(true);
	}, [cell]);

	function handleCloseOverlay() {
		setCellFilters({ id: undefined });
		setOverlay(false);
	}

	if (!cell) return null;

	return (
		<Container
			style={{
				...fadeStyles,
				visibility: fadeStyles.opacity.to((o) => (o !== 0 ? 'visible' : 'hidden'))
			}}
			color={mapStatusToColors(cell.sid)}
		>
			<Content>
				{/** absolutely pos */}
				<CloseButton type={(t) => t.Close} onClick={handleCloseOverlay} />
				<H6>Harmonic Distortions chart</H6>
				<ChartsWrapper>
					{cell.data.order.map((o, i) => {
						const key = o as 'THI' | 'THV';
						return (
							<ChartRow key={`trendchart-row-${cell.h}-${i}`} margin="2rem 0 0 0">
								<TrendChart
									color={colors[i]}
									data={cell.data.metrics[key].values}
								/>
								<Column>
									<P>{cell.metadata[key].name}</P>
									<H6>{`${cell.data.metrics[key].value} ${cell.metadata[o].units}`}</H6>
								</Column>
							</ChartRow>
						);
					})}
					<ChartRow style={{ flex: 2 }}>
						<BarChart colors={colors} data={cell.data.HDs.slice(0, CHART_DATA_LIMIT)} />
					</ChartRow>
				</ChartsWrapper>
				<Row margin="2rem 0 0 0">
					<P>Country</P>
					<H7>Romania</H7>
				</Row>
				<BreakLine />
				<Row margin={'0 0 0.8rem 0'} justifyContent="flex-start">
					<H6>{cell.text}</H6>
				</Row>
				{cell.data.labels.map((t) => (
					<ListItem>
						<Span>{t}</Span>
					</ListItem>
				))}

				<Link to="#">Read more</Link>
			</Content>
		</Container>
	);
}
