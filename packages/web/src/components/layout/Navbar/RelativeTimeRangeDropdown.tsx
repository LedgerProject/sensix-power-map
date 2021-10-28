import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { RelativeTimeRange, RELATIVE_TIME_RANGE_OPTIONS } from '@sensix-map/api';
import { Dropdown } from 'components/widgets';
import { useTimeFilters, useNavigation } from 'hooks';
import { QueryParams } from 'helpers';

interface Props {
	width?: number;
}

export function RelativeTimeRangeDropdown({ width = 20 }: Props) {
	const location = useLocation();
	const { replace } = useNavigation();

	const [timeFilters, setTimeFilters] = useTimeFilters();

	function handleSelect(range: RelativeTimeRange) {
		setTimeFilters({ range });
	}

	useEffect(() => {
		const { time } = QueryParams.parse();

		if (time.range === null || time.range === undefined) {
			if (timeFilters.range === null || timeFilters.range === undefined) {
				setTimeFilters({ range: RELATIVE_TIME_RANGE_OPTIONS[0] });
			} else {
				const params = QueryParams.set({ timeFilters });
				replace(location.pathname, params.toString());
			}
		}
	}, [timeFilters.range]);

	return (
		<Dropdown
			defaultSelectedItem={timeFilters.range || RELATIVE_TIME_RANGE_OPTIONS[0]}
			label="Time period select"
			selected={(d) => d === timeFilters.range}
			title={(d) => `Past ${d || RELATIVE_TIME_RANGE_OPTIONS[0]} h`}
			width={width}
			onSelect={handleSelect}
		>
			{RELATIVE_TIME_RANGE_OPTIONS.map((option) => (
				<Dropdown.Item key={`${option}-hour-option`} data={option}>
					{`Past ${option} h`}
				</Dropdown.Item>
			))}
		</Dropdown>
	);
}
