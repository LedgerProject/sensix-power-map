import React, { useEffect, useRef } from 'react';
import { MapContainer } from 'react-leaflet';
import { LatLngLiteral, LatLngBoundsLiteral } from 'leaflet';

import { Cell } from 'components';
import { useActiveTheme, useCells, useZoom, useCenter } from 'hooks';
import { TileLayer } from 'components';

const defaultCenter: LatLngLiteral = {
	lat: 46.6427,
	lng: 25.5887
};

const bounds: LatLngBoundsLiteral = [
	[-90, -90],
	[90, 90]
];

export function Map() {
	const hasFetchedData = useRef<boolean>(false);
	const [theme] = useActiveTheme();

	const zoom = useZoom()[0];
	const center = useCenter()[0];

	const [cells, getCells] = useCells();

	useEffect(() => {
		if (!hasFetchedData.current) {
			hasFetchedData.current = true;
			getCells();
		}
	}, [getCells]);

	return (
		<MapContainer
			key={`map-${theme}-theme`}
			style={{
				position: 'absolute',
				left: 0,
				right: 0,
				bottom: 0,
				top: '6rem',
				zIndex: 998
			}}
			center={center ?? defaultCenter}
			zoom={zoom ?? 8}
			maxZoom={18}
			bounds={bounds}
		>
			<TileLayer /> {/**The actual map that is rendered */}
			{/** Needs to be inside MapContainer !! */}
			{cells.map((cell) => (
				<Cell key={`cell-${cell.h}`} r={cell.r} cid={cell.cid} sid={cell.sid} h={cell.h} />
			))}
		</MapContainer>
	);
}
