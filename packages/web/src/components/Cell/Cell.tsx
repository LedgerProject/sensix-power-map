import React, { useEffect, useState } from 'react';
import { Rectangle, useMap } from 'react-leaflet';
import { LatLngLiteral } from 'leaflet';
import Geohash from 'latlon-geohash';
import { CellOverviewData } from '@sensix-map/api';

import { Colors } from 'environment';
import { useActiveCell, useStatusColors } from 'hooks';

export function Cell({ h }: CellOverviewData) {
	const mapStatusToColor = useStatusColors();

	const [, setActiveCell] = useActiveCell();

	const map = useMap();

	const [bounds, setBounds] = useState<Geohash.Bounds>();
	const [coords, setCoords] = useState<LatLngLiteral>();

	useEffect(() => {
		if (h) {
			setBounds(Geohash.bounds(h));
			const latLng = Geohash.decode(h);
			setCoords({ lat: latLng.lat, lng: latLng.lon });
		}
	}, [h]);

	function onClickHandler() {
		if (h) {
			setActiveCell(h);
			coords && map.setView(coords);
		}
	}

	if (!coords || !bounds) return <></>;

	return (
		<div style={{ zIndex: 99999999 }}>
			<Rectangle
				eventHandlers={{
					click: () => onClickHandler()
				}}
				key={`${coords.lat}-${coords.lng}`}
				pathOptions={{
					fillColor: mapStatusToColor(Math.floor(Math.random() * 4)) || Colors.alto,
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
		</div>
	);
}
