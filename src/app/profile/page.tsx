import ProfileContainer from '@/components/Profile/ProfileContainer';

export default function Page({ params }: { params: { messageID: string } }) {
	return (
		<div className='w-full overflow-hidden'>
			<ProfileContainer />
		</div>
	);
}
