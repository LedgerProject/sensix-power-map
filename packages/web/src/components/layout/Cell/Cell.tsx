import React, { useMemo } from 'react';
import { Rectangle, useMap } from 'react-leaflet';
import { LatLngLiteral } from 'leaflet';
import Geohash from 'latlon-geohash';

import { Colors } from 'environment';
import { useActiveCell, useStatusColors } from 'hooks';
import { CellStatus } from '@sensix-map/api';

interface Props {
	sid: CellStatus;
	hash: string;
	bounds: Geohash.Bounds;
	coords: LatLngLiteral;
}

export function Cell({ hash, bounds, coords, sid }: Props) {
	const mapStatusToColor = useStatusColors();

	const map = useMap();

	const [activeCell, setActiveCell] = useActiveCell();

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
					fillColor: mapStatusToColor(sid),
					stroke: hash === activeCell ? true : false,
					color: Colors.white,
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
		[hash, hash === activeCell] // this will rerender just when hash / activeCell relation changes!
	);
}
