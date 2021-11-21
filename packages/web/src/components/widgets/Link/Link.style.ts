import styled from 'styled-components';
import { Colors } from 'environment';
import { Link as link } from 'react-router-dom';

export const Link = styled(link)`
	color: ${Colors.green};
	line-height: 1.5rem;
	font-size: 1.6rem;
	font-weight: bold;
`;
