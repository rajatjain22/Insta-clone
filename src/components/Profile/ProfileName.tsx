import Image from 'next/image';
import Link from 'next/link';
import { IoSettingsSharp } from 'react-icons/io5';

export default function ProfileName() {
	return (
		<div className=' flex justify-evenly md:justify-center'>
			<div className='md:w-1/3 text-center'>
				<Image
					src='https://i.pravatar.cc/150?img=7'
					alt='profile image'
					className='md:w-5/12 h-auto rounded-full m-auto p-px border-2 border-red-600'
					width={100}
					height={100}
				/>
				<span className='md:hidden'>Rajat Jain😎😎</span>
			</div>
			<div className='w-8/12 flex flex-col items-start justify-evenly'>
				<div className='flex flex-col gap-2  md:flex-row md:justify-evenly md:gap-8 mb-2'>
					<Link
						href='#'
						className='font-semibold'>
						rajat_j_a_i_n_
					</Link>
					<div className='flex gap-3'>
						<button className='bg-gray-hover p-1 px-2 rounded-md text-sm font-medium'>
							Edit profile
						</button>
						<button className='bg-gray-hover p-1 px-2 rounded-md text-sm font-medium'>
							View archive
						</button>
					</div>
					<IoSettingsSharp className='hidden md:block text-2xl' />
				</div>
				<ul className='hidden md:flex justify-evenly text-base'>
					<li className='mr-8 '>
						<span className='font-medium'>21</span> posts
					</li>
					<li className='mr-8 '>
						<span className='font-medium'>640</span> followers
					</li>
					<li className='mr-8 '>
						<span className='font-medium'>293</span> following
					</li>
				</ul>
				<div className='hidden md:block text-sm font-semibold'>
					<span>Rajat Jain</span>
				</div>
			</div>
		</div>
	);
}
