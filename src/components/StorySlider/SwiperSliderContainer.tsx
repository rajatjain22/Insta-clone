'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export default function SwiperSliderContainer() {
	return (
		<Swiper
			grabCursor={true}
			slidesPerView={6}
			spaceBetween={2}
			freeMode={true}
			breakpoints={{
				280: {
					slidesPerView: 3.5,
					spaceBetween: 0,
				},
				320: {
					slidesPerView: 4,
					spaceBetween: 0,
				},
				375: {
					slidesPerView: 4.5,
					spaceBetween: 0,
				},
				480: {
					slidesPerView: 5.5,
					spaceBetween: 0,
				},
				540: {
					slidesPerView: 6,
					spaceBetween: 0,
				},
				600: {
					slidesPerView: 7,
					spaceBetween: 0,
				},
				768: {
					slidesPerView: 6,
					spaceBetween: 0,
				},
			}}
			modules={[FreeMode, Pagination]}
			className='mySwiper'>
			{new Array(20).fill(0).map((_, index) => (
				<SwiperSlide key={index}>
					<div className='p-2 text-center'>
						<Image
							src={`https://i.pravatar.cc/150?img=${index}`}
							alt='profile image'
							className='w-12 h-12 rounded-full m-auto p-px border-2 border-red-600'
							width={100}
							height={100}
						/>
						<span className='text-xs font-medium'>Rajat Jain</span>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
