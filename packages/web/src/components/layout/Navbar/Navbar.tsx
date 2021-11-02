import React from 'react';
import { FiMoon } from 'react-icons/fi';
import { FiSun } from 'react-icons/fi';

import { useActiveTheme } from 'hooks';
import { Colors } from 'environment';
import { RelativeTimeRangeDropdown } from './RelativeTimeRangeDropdown';
import { Container, Right, Link, H7, Logo, Row, Title } from './Navbar.style';

export function Navbar() {
	const [theme, toggleTheme] = useActiveTheme();

	return (
		<Container>
			<Logo type={(t) => t.Logo} color={Colors.white} />
			<Title>Power Map</Title>
			<div style={{ marginLeft: 'auto' }}>
				<RelativeTimeRangeDropdown width={13.4} />
			</div>
			<Right>
				{theme === 'light' ? (
					<Row onClick={toggleTheme}>
						<FiMoon size={22} stroke={Colors.bluishGrey} />
						<H7>DARK MODE</H7>
					</Row>
				) : (
					<Row onClick={toggleTheme}>
						<FiSun stroke={Colors.paleAqua} size={22} />
						<H7>LIGHT MODE</H7>
					</Row>
				)}

				<Link active href="#">
					SIGN UP
				</Link>
				<Link href="#">LOGIN</Link>
			</Right>
		</Container>
	);
}
