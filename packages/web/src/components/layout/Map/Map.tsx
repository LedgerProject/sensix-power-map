import React, { useEffect, useMemo } from 'react';
import { MapContainer } from 'react-leaflet';
import Geohash from 'latlon-geohash';

import { useCells, useActiveTheme, useCenter, useZoom } from 'hooks';
import { TileLayer, Cell } from 'components';
export function Map() {
	const [cells, getCells] = useCells();
	const activeTheme = useActiveTheme()[0];
	const zoom = useZoom()[0];
	const center = useCenter()[0];

	useEffect(() => {
		getCells();
		// eslint-disable-next-line
	}, []);

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
					zIndex: 1
				}}
				center={center}
				zoom={zoom}
			>
				<TileLayer />
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
