import type {Metadata} from 'next';
import '@zhenyzh/common-ui/styles';
import '@/app/styles/globals.scss';
import {Header} from '@/widgets/header';

export const metadata: Metadata = {
  title: 'Next network shop',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
