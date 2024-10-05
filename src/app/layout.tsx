import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/custom/header';
import StoreProvider from './StoreProvider';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export const metadata: Metadata = {
    title: 'Pizza Store',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    'min-h-screen bg-background font-manrope antialiased',
                    manrope.variable
                )}>
                <StoreProvider>
                    <Header />
                    <main>{children}</main>
                </StoreProvider>
            </body>
        </html>
    );
}
