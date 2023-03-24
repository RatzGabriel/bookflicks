import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	addToFavorites,
	removeFromFavorites,
} from '../../utils/favoritesSlice';
import { PLACEHOLDER_COVER } from '../../utils/constants';
import Modal from './Modal';

const TitleCard = ({ book, test, key }) => {
	const [modal, setModal] = useState(false);
	const [desktopModal, setDesktopModal] = useState(false);
	const dispatch = useDispatch();
	const favorites = useSelector((store) => store.favorites.items);
	const isBookInFavorites = favorites.some((fav) => fav.id === book.id);
	const {
		title,
		authors,
		averageRating,
		imageLinks,
		pageCount,
		publishedDate,
		ratingsCount,
	} = book.volumeInfo;
	const imagesrc = imageLinks?.smallThumbnail || PLACEHOLDER_COVER;
	const addBookHandler = () => {
		if (!isBookInFavorites) {
			dispatch(addToFavorites(book));
			return;
		}
		dispatch(removeFromFavorites(book));
	};

	const setOpen = (openState) => {
		console.log('check');
		setModal(openState);
	};

	const modalStyle = {
		display: modal ? 'none' : 'flex',
	};

	return (
		<div key={book.id} href={book.id} className="group">
			<div
				onClick={() => setOpen(true)}
				className="h-[15rem] aspect-w-1 aspect-h-1  overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
			>
				<img
					src={imagesrc}
					alt={title}
					className="h-full w-full object-cover object-center group-hover:opacity-75"
				/>
			</div>
			{modal && <Modal setModal={setModal} modal={modal} book={book} />}
		</div>
	);
};

export default TitleCard;
