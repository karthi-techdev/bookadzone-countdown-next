import "./globals.css";
import '@fontsource-variable/urbanist';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bookadzone',
  description: 'Were working hard to bring you an innovative platform for booking billboard advertising spaces.Stay tuned for our launch!',
  icons: {
    icon: '/bookadzone-favicon.svg', // /public/favicon.ico
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <div 
       className="fixed common-hero-bg top-0 inset-0 h-[100dvh] w-full bg-cover bg-no-repeat bg-center blur-[185px] z-[-1000]"
      ></div>
        {children}
      </body>
    </html>
  );
}
