import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useBooks } from '../../utils/useBooks';
import TitleCard from './TitleCard';
import ContainerTitle from './ContainerTitle';
import { titleClass } from '../../assets/tailwindStyles';
import { settingsSlide } from '../../utils/constants';
import Slider from 'react-slick/lib/slider';
import ResultContainer from './ResultContainer';

const CategoryPage = ({ categorie }) => {
  const { load } = useBooks();

  const fantasy = useSelector((store) => store.books.allBooks.fantasy);
  const comedy = useSelector((store) => store.books.allBooks.comedy);
  const crime = useSelector((store) => store.books.allBooks.crime);
  const loading = useSelector((store) => store.books.loading);
  const [selectedBooks, setSelectedBooks] = useState([]);

  useEffect(() => {
    console.log(loading);
    if (!loading) {
      setSelectedBooks(categorie === 'fantasy' ? fantasy : categorie === 'comedy' ? comedy : crime);
    }
    if (fantasy.length == 0) {
      load();
    }
  }, [categorie, loading, fantasy, comedy, crime, setSelectedBooks]);

  return (
    <div className="max-h-50 pt-24 md: min-h-screen" data-testid="categorie-title">
      <ResultContainer />
      <div className="md:hidden min-h-screen">
        <h1 className={titleClass}>{categorie}</h1>
        <Slider className={` max-h-60 md:hidden w-72 `} {...settingsSlide}>
          {selectedBooks && selectedBooks.map((book) => <TitleCard key={book.id} book={book} />)}
        </Slider>
      </div>

      <div className="hidden md:flex">
        <div className="mx-auto  py-4 w-full">
          <h2 className="text-2xl font-bold tracking-tight text-white-900">{categorie}</h2>
          <div className="mt-1 grid grid-cols-1 gap-y-5 gap-x-6 sm:grid-cols-2 lg:grid-cols-9 xl:gap-x-8">
            {selectedBooks &&
              selectedBooks.map((book) => {
                return <TitleCard key={book.id} book={book} />;
              })}
          </div>
          <div>{selectedBooks.length == 0 && 'No books in this categorie'}</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
