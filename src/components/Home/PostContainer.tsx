'use client';

import Image from 'next/image';
import { BsThreeDots, BsDot } from 'react-icons/bs';
import { FiHeart, FiSend } from 'react-icons/fi';
import { FaRegComment, FaRegBookmark } from 'react-icons/fa';
import { CgStories } from 'react-icons/cg';
import Link from 'next/link';
import { useState } from 'react';
import ModelContainer from '../Model/ModelContainer';

export default function PostContainer({ imageKey }: { imageKey: number }) {
	const [postValue, setPostValue] = useState({
		like: true,
		comment: false,
		showHeartAnimation: false,
	});

	const handleModelSet = () => {
		setPostValue((presVal) => ({ ...presVal, comment: !presVal.comment }));
	};
	return (
		<>
			<div className='w-full flex justify-center mb-2'>
				<div className='main-post flex flex-col p-2 border-b border-solid border-gray-200'>
					<div className='h-8 flex items-center pb-2 px-1 justify-between'>
						<div className='flex items-center w-60'>
							<Image
								src={`https://i.pravatar.cc/150?img=${imageKey}`}
								alt='profile image'
								className='w-8 h-8 rounded-full p-px border-2 border-red-600'
								width={100}
								height={100}
							/>
							<div className='flex flex-col p-3'>
								<span className='text-xs font-semibold'>rajat_j_a_i_n_</span>
								<span className='text-xs text-gray-600'>Dewas</span>
							</div>
							<span className='flex text-center items-center text-xs text-gray-500'>
								<BsDot />
								<span>4 h</span>
							</span>
						</div>
						<BsThreeDots />
					</div>
					<div
						className={`max-h-96 border border-solid border-gray-600 cursor-pointer relative`}
						onDoubleClick={() => {
							setPostValue((presVal) => ({
								...presVal,
								like: true,
								showHeartAnimation: true,
							}));

							setTimeout(() => {
								setPostValue((prevVal) => ({
									...prevVal,
									showHeartAnimation: false,
								}));
							}, 1000);
						}}>
						<div id={`${postValue.showHeartAnimation ? 'heart' : ''}`}></div>
						<Image
							src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${imageKey}.jpg`}
							// src={`https://i.pravatar.cc/150?img=${imageKey}`}
							alt='profile image'
							className='aspect-square bg-transparent w-full'
							width={100}
							height={100}
						/>
					</div>
					<div className='p-1'>
						<div className='flex justify-between pt-3 pb-2'>
							<div className='flex gap-4'>
								<div
									className='text-xl cursor-pointer'
									onClick={() => {
										setPostValue((prevVal) => ({
											...prevVal,
											like: !prevVal.like,
										}));
									}}>
									<FiHeart
										className={`${
											postValue.like === true ? 'post-like' : ''
										}`}
									/>
								</div>
								<div>
									<FaRegComment className='text-xl cursor-pointer transform scale-x-[-1]' />
								</div>
								<div className='text-xl cursor-pointer'>
									<FiSend />
								</div>
							</div>
							<FaRegBookmark className='text-xl cursor-pointer' />
						</div>
						<div className='pb-2 text-xs font-semibold'>40,939 likes</div>
						<div className='pb-2 text-xs'>
							<span className='font-bold'>rajat_j_a_i_n_ </span>
							<span>Toxicity where are you 👀</span>
						</div>
						<div
							className='text-xs text-[#838383] cursor-pointer'
							onClick={handleModelSet}>
							View all 62 comments
						</div>
					</div>
				</div>
			</div>
			<ModelContainer
				imageKey={imageKey}
				openModel={postValue.comment}
				handleModelSet={handleModelSet}
			/>
		</>
	);
}
