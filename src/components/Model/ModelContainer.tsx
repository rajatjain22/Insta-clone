'use client';

import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { BsDot, BsThreeDots } from 'react-icons/bs';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
import { CiHeart } from 'react-icons/ci';

interface propdata {
	imageKey: number;
	openModel: boolean;
	handleModelSet: () => void;
}

export default function ModelContainer({
	imageKey,
	openModel,
	handleModelSet,
}: propdata) {
	return (
		<Transition.Root
			show={openModel}
			as={Fragment}>
			<Dialog
				as='div'
				className='relative z-10'
				// initialFocus={cancelButtonRef}
				onClose={handleModelSet}>
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
					<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
							enterTo='opacity-100 translate-y-0 sm:scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 translate-y-0 sm:scale-100'
							leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
							<Dialog.Panel className='w-full relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl'>
								<div className='bg-white'>
									<div className='flex justify-between h-[28rem] py-3'>
										<div className='hidden md:block mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
											<Image
												src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg`}
												// src={`https://i.pravatar.cc/150?img=${imageKey}`}
												alt='profile image'
												className='aspect-square bg-transparent w-full'
												width={100}
												height={100}
											/>
										</div>
										<div className='relative w-full flex flex-col'>
											<div className='h-8 flex items-center pb-2 px-1 justify-between border-b border-gray-300'>
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
											<div className='h-full w-full pb-2 px-2 overflow-y-scroll'>
												{new Array(20).fill(0).map((_, index) => (
													<div
														className='flex w-full p-1'
														key={index}>
														<div className='flex w-full'>
															<Image
																src={`https://i.pravatar.cc/150?img=3`}
																alt='profile image'
																className='w-8 h-8 rounded-full p-px border-2 border-red-600'
																width={100}
																height={100}
															/>
															<div className='flex flex-col gap-2 px-3'>
																<span className='text-xs font-semibold'>
																	rajat_j_a_i_n_
																	<span className='text-xs text-gray-600'>
																		Dewas Kab tak fack vc loge 😂😂 album lo
																		maje Karo 🔥🔥
																	</span>
																</span>
																<span className='flex text-center items-center text-xs text-gray-500'>
																	<BsDot />
																	<span>4 h</span>
																</span>
															</div>
														</div>
														<CiHeart className='mt-2' />
													</div>
												))}
											</div>
											<div className='h-8 mb-5 w-full flex items-center pt-2 justify-between border-t border-gray-300'>
												<div className='w-full pt-7 flex items-center'>
													<MdOutlineEmojiEmotions className='m-2 text-2xl' />
													<form className='w-full flex'>
														<input
															className='w-11/12 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 focus-visible:outline-none'
															placeholder='comment...'
														/>
														<button className='text-follow-blue font-bold p-2'>
															Post
														</button>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
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
									</div> */}
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
