import React from 'react';
import ContainerTitle from './ContainerTitle';

const SearchResultContainer = ({ books }) => {
	return <ContainerTitle books={books} title={'Search Results'} />;
};

export default SearchResultContainer;
