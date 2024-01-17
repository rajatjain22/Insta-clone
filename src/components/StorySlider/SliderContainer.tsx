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
		initialSlide: 0,
	};
	return (
		<div className='story-slider block w-[500px] pt-2'>
			<Slider {...settings}>
				{new Array(20).fill(0).map((_, index) => (
					<div
						className='p-2'
						key={`slider${index}`}>
						<Image
							src='https://i.pravatar.cc/150?img=3'
							alt='profile image'
							className='w-12 h-12 border rounded-full m-auto'
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
