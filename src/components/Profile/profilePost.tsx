import { FaTableCells } from 'react-icons/fa6';
import saveIcon from '../../../public/save_icon.png';
import Image from 'next/image';
import { CgProfile, CgStories } from 'react-icons/cg';

export default function ProfilePost() {
	return (
		<div className=''>
			<div className='border-t border-b border-gray-500'>
				<div className='flex justify-evenly items-center p-2'>
					<div className='flex items-center text-xs gap-1'>
						<FaTableCells className='' />
						<span className='font-medium'>POST</span>
					</div>
					<div className='flex items-center text-xs gap-1'>
						<CgStories className='text-xs transform rotate-90' />
						<span className='font-medium'>FEED</span>
					</div>
					<div className='flex items-center text-xs'>
						<Image
							src={saveIcon}
							alt='save'
							className='w-8'
						/>
						<span className='font-medium'>SAVED</span>
					</div>
					<div className='flex items-center text-xs gap-1'>
						<CgProfile className='text-xs' />
						<span className='font-medium'>TAGGED</span>
					</div>
				</div>
			</div>

			<div>
				<div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
					{new Array(20).fill(0).map((imageVal, imageIndex) => (
						<div className='relative' key={imageIndex}>
							<Image
								className='h-auto max-w-full rounded-lg object-cover'
								src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${imageIndex + 1}.jpg`}
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
