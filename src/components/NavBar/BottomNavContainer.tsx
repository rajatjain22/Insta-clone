import { CgProfile } from 'react-icons/cg';
import { GoHomeFill } from 'react-icons/go';
import { IoIosSearch } from 'react-icons/io';
import { MdAddCircleOutline, MdOutlineSlowMotionVideo } from 'react-icons/md';

export default function BottomNavContainer() {
	return (
		<div className='md:hidden flex justify-between items-center h-14 p-3 bg-white border-t border-solid border-gray-300 sticky bottom-0 w-full z-10 text-2xl'>
			<GoHomeFill className='m-2' />
			<IoIosSearch className='m-2' />
			<MdAddCircleOutline className='m-2' />
			<MdOutlineSlowMotionVideo className='m-2' />
			<CgProfile className='m-2' />
		</div>
	);
}