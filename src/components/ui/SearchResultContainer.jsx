import React from 'react';
import ContainerTitle from './ContainerTitle';
import LoadingSpiner from './LoadingSpiner';


function SearchResultContainer({ books }) {
  const loading = useSelector((store) => store.books.loading);
  if (loading) return <LoadingSpiner />;
  return <ContainerTitle books={books} title="Search Results" />;
}

export default SearchResultContainer;
