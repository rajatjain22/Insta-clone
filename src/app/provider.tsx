'use client';

import BottomNavContainer from '@/components/NavBar/BottomNavContainer';
import SideNavContainer from '@/components/NavBar/SideNavContainer';
import TopNavContainer from '@/components/NavBar/TopNavContainer';
import { usePathname } from 'next/navigation';

export default function Provider({ children }: { children: React.ReactNode }) {
	const pathName = usePathname();

	if (pathName === '/login') {
		return <>{children}</>;
	}
	
	return (
		<div className='flex flex-col md:flex-row min-h-screen w-full'>
			<SideNavContainer />
			<TopNavContainer />
			{children}
			<BottomNavContainer />
		</div>
	);
}
