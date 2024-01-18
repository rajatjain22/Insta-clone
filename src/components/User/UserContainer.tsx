import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function UserContainer() {
	return (
		<div className='h-16 w-full flex items-center p-2'>
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
					<span className='text-xs text-gray-400'>Rajat Jain</span>
				</div>
			</div>
			<Link
				href='#'
				className='text-follow-blue font-semibold text-xs'>
				Switch
			</Link>
		</div>
	);
}

export default UserContainer;
