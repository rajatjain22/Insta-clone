import AllMessagesUsers from '@/components/Messages/UsersBar';

export default function Provider({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex w-full'>
			<AllMessagesUsers />
			{children}
		</div>
	);
}
