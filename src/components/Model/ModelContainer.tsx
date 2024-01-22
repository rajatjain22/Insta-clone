'use client';

import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { BsDot, BsThreeDots } from 'react-icons/bs';

export default function ModelContainer() {
	const [open, setOpen] = useState(false);

	const cancelButtonRef = useRef(null);

	return (
        <>
        <button className='' onClick={()=>setOpen(true)}>Open Model</button>
		<Transition.Root
			show={open}
			as={Fragment}>
			<Dialog
				as='div'
				className='relative z-10'
				initialFocus={cancelButtonRef}
				onClose={setOpen}>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'>
					<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
				</Transition.Child>

				<div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
					<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
							enterTo='opacity-100 translate-y-0 sm:scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 translate-y-0 sm:scale-100'
							leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
							<Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl'>
								<div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
									<div className='flex justify-between h-full'>
										<div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
											<Image
												src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg`}
												// src={`https://i.pravatar.cc/150?img=${imageKey}`}
												alt='profile image'
												className='aspect-square bg-transparent w-full'
												width={100}
												height={100}
											/>
										</div>
										<div className='w-full'>
											<div className='h-8 flex items-center pb-2 px-1 justify-between'>
												<div className='flex items-center w-60'>
													<Image
														src={`https://i.pravatar.cc/150?img=3`}
														alt='profile image'
														className='w-8 h-8 rounded-full p-px border-2 border-red-600'
														width={100}
														height={100}
													/>
													<div className='flex flex-col p-3'>
														<span className='text-xs font-semibold'>
															rajat_j_a_i_n_
														</span>
														<span className='text-xs text-gray-600'>Dewas</span>
													</div>
													<span className='flex text-center items-center text-xs text-gray-500'>
														<BsDot />
														<span>4 h</span>
													</span>
												</div>
												<BsThreeDots />
											</div>
											<div className='h-8 flex items-center pb-2 px-1 justify-between'>
												<div className='flex items-center w-60'>
													<Image
														src={`https://i.pravatar.cc/150?img=3`}
														alt='profile image'
														className='w-8 h-8 rounded-full p-px border-2 border-red-600'
														width={100}
														height={100}
													/>
													<div className='flex flex-col p-3'>
														<span className='text-xs font-semibold'>
															rajat_j_a_i_n_
														</span>
														<span className='text-xs text-gray-600'>Dewas</span>
													</div>
													<span className='flex text-center items-center text-xs text-gray-500'>
														<BsDot />
														<span>4 h</span>
													</span>
												</div>
												<BsThreeDots />
											</div>
											<div className='h-8 flex items-center pb-2 px-1 justify-between'>
												<div className='flex items-center w-60'>
													<Image
														src={`https://i.pravatar.cc/150?img=3`}
														alt='profile image'
														className='w-8 h-8 rounded-full p-px border-2 border-red-600'
														width={100}
														height={100}
													/>
													<div className='flex flex-col p-3'>
														<span className='text-xs font-semibold'>
															rajat_j_a_i_n_
														</span>
														<span className='text-xs text-gray-600'>Dewas</span>
													</div>
													<span className='flex text-center items-center text-xs text-gray-500'>
														<BsDot />
														<span>4 h</span>
													</span>
												</div>
												<BsThreeDots />
											</div>
										</div>
									</div>
								</div>
								<div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
									<button
										type='button'
										className='inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto'
										onClick={() => setOpen(false)}>
										Deactivate
									</button>
									<button
										type='button'
										className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
										onClick={() => setOpen(false)}
										ref={cancelButtonRef}>
										Cancel
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
        </>
	);
}
