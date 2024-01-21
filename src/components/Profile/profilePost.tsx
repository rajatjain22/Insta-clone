import { FaTableCells } from 'react-icons/fa6';
import saveIcon from '../../../public/save_icon.png';
import Image from 'next/image';
import { CgProfile, CgStories } from 'react-icons/cg';

export default function ProfilePost() {
	return (
		<div>
			<div className='border-t border-b border-gray-hover-200'>
				<div className='grid grid-cols-3 border-b border-gray-hover-200 py-2'>
					<div className='flex flex-col items-center justify-center text-xs gap-1'>
						<span className='font-bold'>21</span>
						<span className='text-gray-500 font-normal'>POST</span>
					</div>
					<div className='flex flex-col items-center justify-center text-xs gap-1'>
						<span className='font-bold'>640</span>
						<span className='text-gray-500 font-normal'>FOLLOWERS</span>
					</div>
					<div className='flex flex-col items-center justify-center text-xs gap-1'>
						<span className='font-bold'>293</span>
						<span className='text-gray-500 font-normal'>FOLLWOING</span>
					</div>
				</div>

				<div className='flex justify-around md:justify-evenly items-center p-2'>
					<div className='flex items-center text-lg md:text-xs gap-1'>
						<FaTableCells />
						<span className='hidden md:block font-medium'>POST</span>
					</div>
					<div className='flex items-center text-lg md:text-xs gap-1'>
						<CgStories className='transform rotate-90' />
						<span className='hidden md:block font-medium'>FEED</span>
					</div>
					<div className='flex items-center text-lg md:text-xs'>
						<Image
							src={saveIcon}
							alt='save'
							className='w-8'
						/>
						<span className='hidden md:block font-medium'>SAVED</span>
					</div>
					<div className='flex items-center text-lg md:text-xs gap-1'>
						<CgProfile />
						<span className='hidden md:block font-medium'>TAGGED</span>
					</div>
				</div>
			</div>

			<div>
				<div className='grid grid-cols-3 md:grid-cols-3 gap-4'>
					{new Array(11).fill(0).map((imageVal, imageIndex) => (
						<div
							className='relative'
							key={imageIndex}>
							<Image
								className='h-auto max-w-full rounded-lg object-cover'
								src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${
									imageIndex + 1
								}.jpg`}
								// src={`https://imgs.search.brave.com/TUzmYj39pDYJfnHNOKLB-xgLEw5oy9ALY1oAvek7ubQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c2VlZHByb2QuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzA0L3ByZXZpZXct/bGFuZGluZy1wYWdl/LWhpZGUtaW1hZ2Ut/aW4tbW9iaWxlLXZp/ZXcuanBn`}
								alt={`Imag`}
								width={500} // Set the width based on your design
								height={400}
								layout='responsive' // Set the height based on your design
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
