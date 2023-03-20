import React from 'react';
import Slider from 'react-slick';
import { uid } from 'uid';
import { titleClass } from '../tailwindStyles';
import { searchSlide, settingsSlide } from '../utils/constants';
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
			<div className="max-h-50 pt-24">
				<h1 className={titleClass}>
					{isSearchResult ? 'SearchResults' : title}
				</h1>
				<div className="md:hidden">
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

				<div
					className={` ${
						title == 'Favorites' ? '' : 'justify-between'
					}  hidden md:flex ${isSearchResult && 'flex-wrap'} `}
				>
					{books &&
						books.map((book, index) => {
							if (index < 10) return <TitleCard key={book.id} book={book} />;
						})}
				</div>
			</div>
		);
	}
};

export default ContainerTitle;
