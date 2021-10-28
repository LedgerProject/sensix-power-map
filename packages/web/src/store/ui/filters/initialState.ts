import { QueryParams } from 'helpers';
import { State } from './types';

const { time } = QueryParams.parse();

const initialState: State = {
	time
};

export default initialState;
