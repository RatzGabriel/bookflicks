import { Fragment, useEffect, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { uid } from 'uid';
import { PLACEHOLDER_COVER } from '../../utils/constants';
import { addToFavorites, removeFromFavorites } from '../../utils/favoritesSlice';
import { log } from 'console';

export default function Modal({ modal, setModal, book }) {
  const [animate, setAnimate] = useState(false);
  const cancelButtonRef = useRef(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const imagesrc = book.volumeInfo.imageLinks?.smallThumbnail || PLACEHOLDER_COVER;

  const shortenText = book?.volumeInfo?.description?.slice(0, 400);
  const favorites = useSelector((store) => store.favorites.items);

  useEffect(() => {
    let favoriteFound = false;
    Object.values(favorites).forEach((fav) => {
      console.log(fav);
      if (fav.id === book.id) {
        console.log(fav.id === book.id);
        setIsFavorite(true);
        favoriteFound = true;
      }
    });
    if (!favoriteFound) {
      setIsFavorite(false);
    }
  }, [book.id, favorites, setIsFavorite]);

  const dispatch = useDispatch();

  const addBookHandler = () => {
    if (!isFavorite) {
      dispatch(addToFavorites(book));
      return;
    }
    dispatch(removeFromFavorites(book));
  };

  return (
    <Transition.Root show={modal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => setModal(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <img src={imagesrc} />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        {book?.volumeInfo?.title}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p>{book?.volumeInfo?.authors?.length > 1 ? 'Authors' : 'Author'}:</p>
                      </div>
                      <div className="mt-2">
                        {book?.volumeInfo?.authors?.map((author) => (
                          <p className="text-sm text-gray-500" key={uid()}>
                            {author}
                          </p>
                        ))}
                      </div>
                      <div className="mt-2">
                        <p>
                          {book?.volumeInfo?.categories?.length > 1 ? 'Categories' : 'Category'}:
                        </p>
                        {book.volumeInfo?.categories?.map((categories) => (
                          <p className="text-sm text-gray-500" key={uid()}>
                            {categories}
                          </p>
                        ))}
                      </div>
                      <div className="mt-2">
                        <p> Pages:</p>
                        <p className="text-sm text-gray-500">{book?.volumeInfo?.pageCount}</p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">{book?.volumeInfo?.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className={`${
                      isFavorite ? 'bg-red-600' : ' bg-green-600'
                    } transition-all duration-500 ${
                      animate ? 'animate-pulse' : ''
                    } inline-flex w-full justify-center rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto`}
                    onClick={() => addBookHandler()}
                  >
                    {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setModal(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
