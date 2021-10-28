import { QueryParams } from 'helpers';
import { State } from './types';

const { time, cell } = QueryParams.parse();

const initialState: State = {
	time,
	cell
};

export default initialState;
