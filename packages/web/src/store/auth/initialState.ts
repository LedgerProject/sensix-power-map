import { setApiDomain } from '@sensix-map/api';

const domain = localStorage.getItem('sensix-map-domain') || process.env.REACT_APP_DOMAIN;
setApiDomain(domain);

const initialState = {
	session: {
		domain
	}
};

export default initialState;
