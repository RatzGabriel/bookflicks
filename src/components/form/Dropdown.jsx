import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';

const Dropdown = ({ color }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="relative">
			<button onClick={handleToggle}>
				<span className="text-3xl font-bold" data-testid="modaltext">
					{isOpen ? 'Close' : 'Menu'}
				</span>
			</button>
			{isOpen && (
				<div
					className={`text-black w-36 absolute inset-x-0 top-full bg-white shadow-lg rounded-lg py-2 mt-1 `}
				>
					<div className="flex flex-col   justify-around w-4/5 mx-auto h-full">
						{links.map((link, index) => (
							<Link key={index} to={link.path}>
								{link.name}
							</Link>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
