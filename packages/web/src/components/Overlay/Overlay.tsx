import React, { useEffect, useState } from 'react';
import { useSpring } from 'react-spring';

import { Colors } from 'environment';
import { Link } from 'components';
import { useActiveCell, useCell, useStatusColors } from 'hooks';
import {
	Container,
	CloseButton,
	H6,
	ChartRow,
	P,
	H7,
	Row,
	BreakLine,
	Span,
	Button,
	ChartsWrapper,
	Column,
	Content
} from './Overlay.style';
import { TrendChart, BarChart } from 'components/Charts';

export function Overlay(): JSX.Element | null {
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
		if (!overlay) {
			const t = setTimeout(() => {
				setActiveCellId(null);
			}, 250);
			return () => clearTimeout(t);
		}
	}, [overlay, setActiveCellId]);

	useEffect(() => {
		if (activeCellId) {
			getCell(activeCellId);
		}
		// eslint-disable-next-line
	}, [activeCellId]);

	useEffect(() => {
		cell && setOverlay(true);
	}, [cell]);

	if (!cell) return null;

	return (
		<Container
			style={{
				...fadeStyles,
				visibility: fadeStyles.opacity.to((o) => (o !== 0 ? 'visible' : 'hidden'))
			}}
			color={mapStatusToColors(Math.floor(Math.random() * 4))}
		>
			<Content>
				{/** absolutely pos */}
				<CloseButton onClick={() => setOverlay(false)} />
				<H6>Harmonic Distortions chart</H6>
				<ChartsWrapper>
					{Object.keys(cell.data.metrics).map((o, i) => {
						const key = o as 'THI' | 'THV';
						return (
							<ChartRow key={`trendchart-row-${cell.h}-${i}`} margin="2rem 0 0 0">
								<TrendChart
									color={Colors.orange}
									data={cell.data.metrics[key].values}
								/>
								<Column margin="0 0 0 2rem">
									<P>{cell.metadata[key].short_name}</P>
									<H6>{`${cell.data.metrics[key].value} ${cell.metadata[o].units_abbrev}`}</H6>
								</Column>
							</ChartRow>
						);
					})}
					<ChartRow style={{ flex: 2 }}>
						<BarChart colors={[Colors.orange, Colors.alto]} data={cell.data.HDs} />
					</ChartRow>
				</ChartsWrapper>
				<Row margin="2rem 0 0 0">
					<P>Country</P>
					<H7>Romania</H7>
				</Row>
				<Row>
					<P>Area</P>
					<H7>Timis (county)</H7>
				</Row>
				{/* <Row>
					<P>Total aggregated devices</P>
					<H7>118</H7>
				</Row> */}
				<Row>
					<P>Time interval</P>
					<H7>past 48h</H7>
				</Row>
				<BreakLine />
				<Row margin={'0 0 0.8rem 0'} justifyContent="flex-start">
					<H6>Medium Risk</H6>
					<H7 margin="0 0 0 1.5rem">(Average quality)</H7>
				</Row>
				<Span>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</Span>
				<Link to="#">Read more</Link>
				<Row margin="auto 0 0 0">
					<Button>SHARE</Button>
				</Row>
			</Content>
		</Container>
	);
}
