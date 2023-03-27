import React, { useState } from 'react';
import { PLACEHOLDER_COVER } from '../../utils/constants';
import Modal from './Modal';

function TitleCard({ book }) {
  const [modal, setModal] = useState(false);
  const { title, imageLinks } = book.volumeInfo;
  const imagesrc = imageLinks?.smallThumbnail || PLACEHOLDER_COVER;

  const setOpen = (openState) => {
    setModal(openState);
  };

  return (
    <div key={book.id} href={book.id} className="group w-11/12 md:w-full">
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
}

export default TitleCard;
