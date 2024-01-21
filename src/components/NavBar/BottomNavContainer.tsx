'use client';

import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';
import { GoHomeFill } from 'react-icons/go';
import { IoIosSearch } from 'react-icons/io';
import {
	MdAddCircleOutline,
	MdOutlineSlowMotionVideo,
	MdOutlineLogout,
} from 'react-icons/md';
import {
	useParams,
	usePathname,
	useSearchParams,
	useSelectedLayoutSegment,
	useSelectedLayoutSegments,
	useRouter
} from 'next/navigation';

export default function BottomNavContainer() {
	const pathName = usePathname();
	const params = useParams();
	const Router = useRouter();
	return (
		<div
			className={`${
				pathName === '/messages' || params?.messageID ? 'hidden' : 'block'
			} md:hidden flex justify-between items-center h-14 p-3 bg-white border-t border-solid border-gray-300 fixed bottom-0 w-full z-10 text-2xl`}>
			<Link href={'/'}>
				<GoHomeFill className='m-2' />
			</Link>
			<Link href={'#'}>
				<IoIosSearch className='m-2' />
			</Link>
			<Link href={'#'}>
				<MdAddCircleOutline className='m-2' />
			</Link>
			<Link href={'#'}>
				<MdOutlineSlowMotionVideo className='m-2' />
			</Link>
			<Link href={'/profile'}>
				<CgProfile className='m-2' />
			</Link>
			<div
				className='cursor-pointor'
				onClick={() => {
					window.localStorage.clear();
					Router.push('/login')
				}}>
				<MdOutlineLogout className='m-2' />
			</div>
		</div>
	);
}
