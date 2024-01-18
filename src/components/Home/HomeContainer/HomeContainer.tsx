import MainContentContainer from '@/components/MainContent.tsx/MainContentContainer';
import SideNavContainer from '@/components/SideNav/SideNavContainer';
import TopNavContainer from '@/components/TopNav/TopNavContainer';

export default function HomeContainer() {
	return (
		<div className='flex flex-col md:flex-row min-h-screen w-full'>
			<TopNavContainer />
			<SideNavContainer />
			<MainContentContainer />
		</div>
	);
}
