'use client';

import AllMessagesUsers from '@/components/Messages/UsersBar';
import useResponsive from '@/hooks/useResponsive';
import { usePathname } from 'next/navigation';

export default function Provider({ children }: { children: React.ReactNode }) {
	const { windowWidth, isMobile, isTablet, isMini, isDesktop } =
		useResponsive();
	const pathName = usePathname();
	if ((isMini || isDesktop) && pathName === '/messages') {
		console.log('desktop');
	} else {
		console.log('mobile');
	}

	return (
		<div className='block md:flex w-full'>
			<AllMessagesUsers />
			{children}
		</div>
	);
}
