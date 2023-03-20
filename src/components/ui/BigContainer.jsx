import React from 'react';
import { LANDINGPAGE_IMAGE } from '../../utils/constants';
import Search from './Search';

const BigContainer = () => {
	return (
		<div className="flex py-11 md:my-12 w-full flex-col items-center">
			<img className="w-3/6 hidden md:block " src={LANDINGPAGE_IMAGE} />
			<Search />
		</div>
	);
};

export default BigContainer;
