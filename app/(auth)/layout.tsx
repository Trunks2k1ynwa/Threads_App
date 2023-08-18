import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import classNames from 'classnames';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Threads',
  description: 'A Nextjs 13 Meta Threads Application',
};
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={classNames(inter.className, 'bg-dark-1')}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
