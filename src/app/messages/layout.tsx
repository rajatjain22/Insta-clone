import AllMessagesUsers from '@/components/Messages/UsersBar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Provider from './provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Rj insta clone',
	description: 'Generated by rajat jain',
};

export default function MessageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <Provider>{children}</Provider>;
}
