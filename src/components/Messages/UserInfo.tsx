'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BsDot } from 'react-icons/bs';

interface PropData {
	userData: number;
}

function UserInfo({ userData }: PropData) {
	return (
		<Link href={`/messages/${userData}`}>
		<div
			className='h-16 w-full flex items-center p-2 cursor-pointer'>
			<div className='flex items-center w-60'>
				<Image
					src='https://i.pravatar.cc/150?img=3'
					alt='profile image'
					className='w-12 h-12 border rounded-full'
					width={100}
					height={100}
				/>
				<div className='flex flex-col p-3'>
					<span className='text-xs font-semibold'>rajat_j_a_i_n_</span>
					<div className='flex'>
						<span className='text-[10px] text-gray-400'>
							Rajat Jain testing message
						</span>
						<span className='flex text-center items-center text-xs text-gray-500'>
							<BsDot />
							<span className='text-[8px]'>4 h</span>
						</span>
					</div>
				</div>
			</div>
			<div className='text-follow-blue font-semibold text-lg'>
				<BsDot />
			</div>
		</div>
		</Link>
	);
}

export default UserInfo;
