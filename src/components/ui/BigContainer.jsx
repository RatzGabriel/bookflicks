import React from 'react';
import { LANDINGPAGE_IMAGE } from '../../utils/constants';
import Search from './Search';

const BigContainer = () => {
	return (
		<div className="flex pt-11 md:mt-12 w-full flex-col items-center ">
			<img
				className="w-3/6 hidden md:block "
				data-testid="image"
				src={LANDINGPAGE_IMAGE}
			/>
			<Search />
		</div>
	);
};

export default BigContainer;
