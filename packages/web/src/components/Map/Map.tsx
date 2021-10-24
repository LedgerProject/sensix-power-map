import React, { useEffect, useMemo } from 'react';
import { MapContainer } from 'react-leaflet';
import { LatLngLiteral } from 'leaflet';
import Geohash from 'latlon-geohash';

import { useCells, useActiveTheme } from 'hooks';
import { TileLayer, Cell } from 'components';

const defaultMapCenter: LatLngLiteral = {
	lat: 46.6427,
	lng: 25.5887
};

export function Map() {
	console.log('rerender map');

	const [cells, getCells] = useCells();
	const activeTheme = useActiveTheme()[0];

	useEffect(() => {
		getCells();
		// eslint-disable-next-line
	}, []);

	return useMemo(
		() => (
			<MapContainer
				key={`map-${activeTheme}`}
				style={{
					position: 'absolute',
					left: 0,
					right: 0,
					bottom: 0,
					top: '6rem',
					zIndex: 998
				}}
				center={defaultMapCenter}
				zoom={8}
				maxZoom={18}
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
		[activeTheme, cells]
	);
}
