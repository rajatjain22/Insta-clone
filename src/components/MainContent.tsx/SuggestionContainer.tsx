import SideNavContainer from '@/components/SideNav/SideNavContainer';
import UserContainer from '../User/UserContainer';

export default function SuggestionContainer() {
	return (
		<div className='hidden lg:block min-h-screen w-80 p-5'>
			<UserContainer />
			<div>
				<div className='flex justify-between items-center p-2'>
					<span className='text-sm text-gray-500'>Suggested for you</span>
					<span className='text-xs'>See All</span>
				</div>

				<UserContainer />
				<UserContainer />
				<UserContainer />
				<UserContainer />
			</div>
		</div>
	);
}
