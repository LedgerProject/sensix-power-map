import React from 'react';

import { DropdownItem } from './DropdownItem';

interface Props {
	searching?: boolean;
}

export function DropdownEmpty({ searching = false }: Props) {
	return (
		<DropdownItem
			interactive={false}
			loading={searching}
			style={{ justifyContent: 'space-between' }}
		>
			{searching ? 'Searching' : 'No results'}
		</DropdownItem>
	);
}
