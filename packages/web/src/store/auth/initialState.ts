import { setApiDomain } from '@sensix-map/api';

const domain = localStorage.getItem('sensix-map-domain') || process.env.REACT_APP_HOSTNAME;
setApiDomain(domain);

const initialState = {
	session: {
		domain
	}
};

export default initialState;
