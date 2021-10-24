import React, { useMemo } from 'react';
import { Rectangle, useMap } from 'react-leaflet';
import { LatLngLiteral } from 'leaflet';
import Geohash from 'latlon-geohash';

import { useActiveCell, useStatusColors } from 'hooks';

interface Props {
	hash: string;
	bounds: Geohash.Bounds;
	coords: LatLngLiteral;
}

export function Cell({ hash, bounds, coords }: Props) {
	const mapStatusToColor = useStatusColors();

	const map = useMap();

	const [, setActiveCell] = useActiveCell();

	function onClickHandler() {
		hash && setActiveCell(hash);
		coords && map.flyTo(coords);
	}

	return useMemo(
		() => (
			<Rectangle
				eventHandlers={{
					click: () => onClickHandler()
				}}
				key={`${coords.lat}-${coords.lng}`}
				pathOptions={{
					fillColor: mapStatusToColor(Math.floor(Math.random() * 4)),
					stroke: false,
					fill: true,
					fillOpacity: 0.7,
					interactive: true
				}}
				bounds={[
					[bounds.sw.lat, bounds.sw.lon],
					[bounds.ne.lat, bounds.ne.lon]
				]}
			/>
		),
		// eslint-disable-next-line
		[hash]
	);
}
