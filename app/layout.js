import './globals.css';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata = {
  title: 'The Shapeshifting Box | GSAP Practice',
  description: 'GSAP practice playground in Next.js 14 App Router with Tailwind.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} bg-surface text-slate-100 min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
