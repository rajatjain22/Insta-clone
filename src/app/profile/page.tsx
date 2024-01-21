import ProfileContainer from '@/components/Profile/ProfileContainer';

export default function Profile({ params }: { params: { messageID: string } }) {
	return (
		<div className='w-full overflow-hidden'>
			<ProfileContainer />
		</div>
	);
}
