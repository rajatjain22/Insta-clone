'use client';

import BottomNavContainer from '@/components/NavBar/BottomNavContainer';
import SideNavContainer from '@/components/NavBar/SideNavContainer';
import TopNavContainer from '@/components/NavBar/TopNavContainer';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Provider({ children }: { children: React.ReactNode }) {
	const pathName = usePathname();
	const router = useRouter();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const Logindata = window.localStorage.getItem('login');
			if (Logindata !== 'true') {
				router.push('/login');
			}
		}
	}, []);

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
