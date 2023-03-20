import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	addToFavorites,
	removeFromFavorites,
} from '../../utils/favoritesSlice';
import { PLACEHOLDER_COVER } from '../../utils/constants';

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

	const addBookHandler = () => {
		if (!isBookInFavorites) {
			dispatch(addToFavorites(book));
			return;
		}
		dispatch(removeFromFavorites(book));
	};

	const modalStyle = {
		display: modal ? 'none' : 'flex',
	};

	return (
		<div
			key={key}
			onMouseEnter={() => setDesktopModal(true)}
			className="modal ? 'h-40' : ' m-3 "
		>
			{imageLinks?.thumbnail ? (
				imageLinks.thumbnail && (
					<img
						data-testid="imageid"
						onClick={() => setModal(true)}
						className={`h-40 w-36`}
						src={imageLinks.thumbnail}
						alt="image of thumbnail"
						style={modalStyle}
					/>
				)
			) : (
				<>
					<img
						data-testid="imageid"
						onClick={() => setModal(true)}
						className={`h-20 w-36`}
						src={PLACEHOLDER_COVER}
						alt="image of thumbnail"
						style={modalStyle}
					/>
					<p style={modalStyle}>{title}</p>
				</>
			)}

			<div
				onMouseLeave={() => setDesktopModal(false)}
				data-testid="mouseEnter"
				className={` pointer-events-none md:pointer-events-auto  w-auto z-50 absolute -translate-x-16 -translate-y-40 rounded  flex-col p-5 opacity-0 transition-opacity duration-300 hover:opacity-100  h-25 bg-white text-black ${
					desktopModal ? 'flex' : 'hidden '
				}`}
				onAnimationEnd={(e) =>
					e.animationName === 'fadeIn' && (e.target.style.opacity = 1)
				}
				style={{ animation: 'fadeIn 300ms forwards' }}
			>
				{
					<img
						className={`h-40 w-36 ${modal ? 'hidden  ' : 'flex '} `}
						src={
							imageLinks?.thumbnail ? imageLinks.thumbnail : PLACEHOLDER_COVER
						}
					/>
				}
				<div>
					<p className="font-bold w-32 text-red-300">
						{title.length > 30 ? `${title.slice(0, 20)}...` : title}
					</p>
					<p>By: {authors && <span>{authors[0]}</span>}</p>
					{averageRating && <p>Rating: {averageRating}</p>}
					{pageCount && <p>Pages: {pageCount}</p>}
					{publishedDate && <p>publishedDate: {publishedDate}</p>}
					{ratingsCount && <p>ratingsCount: {ratingsCount}</p>}
					<button
						type="button"
						className={`${isBookInFavorites ? 'bg-red-500' : 'bg-white my-5'}
							  hover:${
									isBookInFavorites ? 'bg-red-500' : 'bg-green-300'
								} text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow`}
						onClick={() => addBookHandler()}
					>
						{isBookInFavorites ? `Remove from Favorites` : 'Add to Favorites'}
					</button>
				</div>
			</div>

			<div
				onClick={() => setModal(false)}
				className={`h-40 w-36  ${
					modal
						? `flex flex-col items-center justify-around border border-white `
						: 'hidden border '
				} `}
			>
				<button
					onClick={() => addBookHandler(book)}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
				>
					{isBookInFavorites ? 'Remove from Favorites' : 'Add to Favorites'}
				</button>
			</div>
		</div>
	);
};

const Image = ({ imageLinks }) => {
	return (
		<>
			{imageLinks?.thumbnail ? (
				imageLinks.thumbnail && (
					<img
						data-testid="imageid"
						onClick={() => setModal(true)}
						className={`h-40 w-36 mx-10 `}
						src={imageLinks.thumbnail}
						alt="image of thumbnail"
						style={modalStyle}
					/>
				)
			) : (
				<>
					<img
						data-testid="imageid"
						onClick={() => setModal(true)}
						className={`h-20 w-36 mx-10 `}
						src={PLACEHOLDER_COVER}
						alt="image of thumbnail"
						style={modalStyle}
					/>
					<p style={modalStyle}>{title}</p>
				</>
			)}
		</>
	);
};

export default TitleCard;
