import { Search } from 'history';
import { useHistory } from 'react-router';

export function useNavigation() {
	const history = useHistory();

	const routes = {
		root: '/'
	};

	function navigate(pathname: string, search?: Search) {
		history.push({ pathname, search: search ?? history.location.search });
	}

	function replace(pathname: string, search?: Search) {
		history.replace({ pathname, search: search ?? history.location.search });
	}

	function goBack() {
		history.goBack();
	}

	return {
		routes,
		navigate,
		replace,
		goBack
	};
}
