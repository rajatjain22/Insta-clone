'use client';

import { FaRegEdit } from 'react-icons/fa';
import UserInfo from './UserInfo';
import useResponsive from '@/hooks/useResponsive';
import { FaArrowLeftLong } from 'react-icons/fa6';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function UsersBar() {
	const { isMobile, isTablet } = useResponsive();
	const pathName = usePathname();
	return (
		<div
			className={`${
				isMobile || isTablet
					? pathName === '/messages'
						? 'block'
						: 'hidden'
					: 'block'
			} h-screen w-full md:w-80 p-5 border border-r-1`}>
			<div className='flex flex-col h-full'>
				<div className='flex justify-between items-center pt-3 pb-2 px-1'>
					<Link
						href='/'
						className='md:hidden'>
						<FaArrowLeftLong />
					</Link>
					<span className='text-base font-bold'>rajat_j_a_i_n_</span>
					<FaRegEdit className='text-xl' />
				</div>
				<div className='flex justify-between items-center py-4 px-1'>
					<span className='text-sm font-bold'>Messages</span>
					<span className='text-xs text-gray-500'>Requests</span>
				</div>
				<div className='overflow-y-scroll'>
					{new Array(20).fill(0).map((_, index) => (
						<UserInfo
							key={index}
							userData={index}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
