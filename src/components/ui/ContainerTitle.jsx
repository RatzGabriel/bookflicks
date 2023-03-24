import React from 'react';
import Slider from 'react-slick';
import { uid } from 'uid';
import { titleClass } from '../../assets/tailwindStyles';
import { searchSlide, settingsSlide } from '../../utils/constants';
import TitleCard from './TitleCard';
import TopBookContainer from './TopBookContainer';

const ContainerTitle = ({ books, title, isSearchResult, row }) => {
	let topBooks;
	if (row == '1') {
		topBooks = { books: books.slice(0, 5), title: 'Top 10 Austria' };
	} else if (row == '2') {
		topBooks = { books: books.slice(5, 10), title: 'Top 10 USA' };
	}

	if (top && topBooks != undefined) {
		return <TopBookContainer topBooks={topBooks} />;
	} else {
		return (
			<div className="max-h-50 pt-24 md:" data-testid="container-title">
				<div className="md:hidden">
					<h1 className={titleClass}>
						{isSearchResult ? 'SearchResults' : title}
					</h1>
					<Slider
						className={` max-h-60 md:hidden ${isSearchResult && 'w-72'}  `}
						{...(isSearchResult ? searchSlide : settingsSlide)}
					>
						{books &&
							books.map((book) => {
								return <TitleCard key={book.id} book={book} />;
							})}
					</Slider>
				</div>

				<div className="hidden md:flex">
					<div className="mx-auto  py-4 w-full">
						<h2 className="text-2xl font-bold tracking-tight text-white-900">
							{title}
						</h2>
						<div className="mt-1 grid grid-cols-1 gap-y-5 gap-x-6 sm:grid-cols-2 lg:grid-cols-9 xl:gap-x-8">
							{books &&
								books.map((book, index) => {
									if (index < 16)
										return <TitleCard key={book.id} book={book} />;
								})}
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default ContainerTitle;
