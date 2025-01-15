import type { Metadata } from 'next';
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';
import '@fontsource/rubik/700.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bridge to Beats',
  description: 'A platform for collaboration between musicians, producers, ' +
    'and sound designers that helps find partners, create projects, and share experiences.\n' +
    'The project is aimed at supporting creative individuals, providing opportunities for professional growth, ' +
    'and creating high-quality musical content.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='uk' suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
