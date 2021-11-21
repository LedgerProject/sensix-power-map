import styled from 'styled-components/macro';
import { Icon as BaseIcon } from 'components/icons';
import { TextInput } from 'components/inputs';

export const Container = styled.div`
	position: relative;
`;

export const SearchInput = styled(TextInput)`
	input {
		border: none;
		border-bottom: 2px solid gray;
		border-radius: 0;
		margin: 0 1.2rem;
		margin-bottom: 1rem;
		padding: 0;
		padding-left: 3.2rem;
		width: auto;
	}
`;

export const Icon = styled(BaseIcon)`
	position: absolute;
	left: 1.6rem;
	top: 1.2rem;

	svg {
		path {
			fill: transparent;
		}
	}
`;
