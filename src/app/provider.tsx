import BottomNavContainer from '@/components/NavBar/BottomNavContainer';
import SideNavContainer from '@/components/NavBar/SideNavContainer';
import TopNavContainer from '@/components/NavBar/TopNavContainer';

export default function Provider({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex flex-col md:flex-row min-h-screen w-full'>
			<SideNavContainer />
			<TopNavContainer />
			{children}
			<BottomNavContainer />
		</div>
	);
}
