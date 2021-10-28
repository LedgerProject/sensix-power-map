import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';
import Geohash from 'latlon-geohash';

import { Icon } from 'components/icons';
import { useCells, useActiveTheme, useCenter, useZoom, useGridContext } from 'hooks';
import { TileLayer, Cell } from 'components';
import { TextInput } from 'components/inputs';

interface OffsetProps {
	offset: number;
}

const SearchContainer = styled.div<OffsetProps>`
	position: absolute;
	top: 4.2rem;
	left: ${({ offset }) => `${offset}px`};
`;

export function Map() {
	const [locationValue, setLocationValue] = useState('');
	const { offset } = useGridContext();

	const [cells, getCells] = useCells();
	const activeTheme = useActiveTheme()[0];
	const zoom = useZoom()[0];
	const center = useCenter()[0];

	useEffect(() => {
		getCells();
		// eslint-disable-next-line
	}, []);

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setLocationValue(e.target.value);
	}

	function handleKeyPress(e: React.KeyboardEvent) {
		if (e.key === 'Enter') {
			console.log('submitted');
		}
	}

	return useMemo(
		() => (
			<MapContainer
				zoomControl={true}
				key={`map-${activeTheme}`}
				style={{
					position: 'absolute',
					left: 0,
					right: 0,
					bottom: 0,
					top: '5.4rem',
					zIndex: 998
				}}
				center={center}
				zoom={zoom}
			>
				<TileLayer />
				<SearchContainer offset={offset}>
					<TextInput
						autoComplete="off"
						icon={<Icon size={2.4} type={(t) => t.Search} />}
						width={30}
						placeholder="Insert location..."
						name="location"
						type="text"
						value={locationValue}
						onChange={handleChange}
						onKeyDown={handleKeyPress}
					/>
				</SearchContainer>
				{cells.map((cell) => (
					<Cell
						key={`cell-${cell.h}`}
						hash={cell.h}
						bounds={Geohash.bounds(cell.h)}
						coords={{
							lat: Geohash.decode(cell.h).lat,
							lng: Geohash.decode(cell.h).lon
						}}
					/>
				))}
			</MapContainer>
		),
		// eslint-disable-next-line
		[activeTheme, cells]
	);
}
