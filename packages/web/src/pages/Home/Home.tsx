import React from 'react';
import { Legend } from 'components/layout/Legend/Legend';
import { Map } from 'components/layout/Map/Map';
import { Overlay } from 'components/layout/Overlay/Overlay';

export function Home() {
	return (
		<div>
			<Map />
			<Overlay />
			<Legend />
		</div>
	);
}
