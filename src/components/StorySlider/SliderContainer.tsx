'use client';

import Image from 'next/image';
import Slider from 'react-slick';
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';

export default function SliderContainer() {
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					swipeToSlide: true,
				},
			},
			
		],
	};
	return (
		<div className='story-slider block w-full pt-2 mb-2'>
			<Slider {...settings}>
				{new Array(20).fill(0).map((_, index) => (
					<div
						className='p-2'
						key={`slider${index}`}>
						<Image
							src='https://i.pravatar.cc/150?img=3'
							alt='profile image'
							className='w-12 h-12 border rounded-full m-auto p-px border-2 border-red-600'
							width={100}
							height={100}
						/>
						<span className='text-xs font-medium'>Rajat Jain</span>
					</div>
				))}
			</Slider>
		</div>
	);
}
