import MainContentContainer from '@/components/MainContent.tsx/MainContentContainer';
import SideNavContainer from '@/components/SideNav/SideNavContainer';

export default function HomeContainer() {
	return (
		<div className='flex min-h-screen w-full'>
			<SideNavContainer />
            <MainContentContainer />
		</div>
	);
}
