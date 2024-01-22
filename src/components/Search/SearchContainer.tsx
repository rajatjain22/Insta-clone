import Image from 'next/image';
import { BsDot, BsThreeDots } from 'react-icons/bs';

export default function SearchContainer() {
	return (
		<div className='w-full flex md:pl-36'>
			<div className='w-full md:w-[450px] p-3'>
				<div className='h-28 bg-white border-b border-solid border-gray-300 sticky top-0 w-full z-10'>
					<div className='text-3xl font-bold text-[#464646] p-2 '>Search</div>
					<form className='w-full'>
						<input
							// value={stateValue.message}
							placeholder='Search.....'
							className='w-full border-2 p-2 px-3 rounded-lg text-sm focus:border-blue-500 border-blue-100 focus:outline-none'
							// onChange={handleChangeMessage}
						/>
					</form>
				</div>
				<div className='pl-2 pt-2 flex flex-col gap-2 h-screen overflow-y-scroll'>
					{new Array(50).fill(0).map((_, index) => (
						<div className='flex items-cente' key={index}>
							<Image
								src={`https://i.pravatar.cc/150?img=3`}
								alt='profile image'
								className=' rounded-full p-px border-2 border-red-600'
								width={56}
								height={50}
							/>
							<div className='flex flex-col p-3'>
								<span className='text-xs font-semibold'>rajat_j_a_i_n_</span>
								<span className='text-xs text-gray-600'>Rajat Jain</span>
							</div>
							<span className='flex text-center items-center text-xs text-gray-500'>
								<BsDot />
								<span>Followed by shweta_tiwarii + 1 more</span>
							</span>
						</div> 
					))}
				</div>
			</div>
		</div>
	);
}
