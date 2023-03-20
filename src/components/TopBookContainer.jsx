import React from 'react';
import Slider from 'react-slick';
import { titleClass } from '../tailwindStyles';
import {
	settingsSlide,
	RANK_ONE,
	RANK_TWO,
	RANK_THREE,
	RANK_FOUR,
	RANK_FIVE,
	topSlider,
} from '../utils/constants';
import TitleCard from './TitleCard';

const TopBookContainer = ({ topBooks }) => {
	if (!topBooks.books) return <Shimmer />;
	return (
		<div className="pt-24 max-h-50">
			<h1 className={titleClass}>{topBooks.title}</h1>
			<div className=" md:hidden">
				<Slider {...topSlider} className=" md:hidden">
					{topBooks.books.map((book, index) => {
						return (
							<div className=" flex mx-1">
								<div className="w-[8.5rem] h-40 md:w-20 ">{getRank(index)}</div>
								<TitleCard book={book} test={'test'} />
							</div>
						);
					})}
				</Slider>
			</div>
			<div className="flex-wrap justify-between hidden md:flex ">
				{topBooks.books.map((book, index) => {
					return (
						<div key={book.id + index} className="flex max-h-40">
							<div className="w-[4.5rem] h-40 md:w-20">{getRank(index)}</div>
							<TitleCard book={book} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TopBookContainer;

const getRank = (index) => {
	if (index == 0) return RANK_ONE;
	if (index == 1) return RANK_TWO;
	if (index == 2) return RANK_THREE;
	if (index == 3) return RANK_FOUR;
	if (index == 4) return RANK_FIVE;
};
