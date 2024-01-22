import Link from 'next/link';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { IoIosCall } from 'react-icons/io';
import { IoVideocam } from 'react-icons/io5';
import UserMessages from './UserMessages';
import SendMessage from './SendMessage';

const messages = [
	{
		sender: '123',
		receiver: 'string',
		message: 'string',
	},
	{
		sender: '890',
		receiver: 'string',
		message: 'string',
	},
	{
		sender: '123',
		receiver: 'string',
		message: 'string',
	},
	{
		sender: '890',
		receiver: 'string',
		message: 'string',
	},
	{
		sender: '890',
		receiver: 'string',
		message: 'string',
	},
	{
		sender: '123',
		receiver: 'string',
		message: 'string',
	},
	{
		sender: '890',
		receiver: 'string',
		message: 'string',
	},
	{
		sender: '890',
		receiver: 'string',
		message: 'string',
	},
	{
		sender: '123',
		receiver: 'string',
		message: 'string',
	},
	{
		sender: '123',
		receiver: 'string',
		message: 'string',
	},
	{
		sender: '123',
		receiver: 'string',
		message: 'string',
	},
	{
		sender: '890',
		receiver: 'string',
		message: 'string',
	},
	{
		sender: '123',
		receiver: 'string',
		message: 'string',
	},
];

export default function SingleMessagesContainer({
	messageID,
}: {
	messageID: number;
}) {
	return (
		<div className='flex flex-col h-screen overflow-hidden'>
			<div className='flex justify-between items-center h-14 p-3 bg-white border-b border-solid border-gray-300 sticky top-0 w-full z-10'>
				<div className='flex items-center gap-2'>
					<Link
						href='/messages'
						className='md:hidden'>
						<FaArrowLeftLong />
					</Link>
					<span className='text-base font-bold'>rajat_j_a_i_n_{messageID}</span>
				</div>
				<div className='flex items-center text-2xl gap-2'>
					<IoIosCall className='ml-6' />
					<IoVideocam className='ml-6' />
				</div>
			</div>
			<UserMessages messageProp={messages} />
			<SendMessage />
		</div>
	);
}
