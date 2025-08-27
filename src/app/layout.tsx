import UmamiAnalytics from '@/components/analytics/UmamiAnalytics';
import BackToTop from '@/components/common/BackToTop';
// import Footer from '@/components/common/Footer';
import { Toaster } from 'sonner';
import Navbar from '@/components/common/Navbar';
import Providers from '@/components/common/Providers';
import { Quote } from '@/components/common/Quote';
import GradientBackground from '@/components/common/GradientBackground';
import { generateMetadata as getMetadata } from '@/config/Meta';
import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions';

import './globals.css';

export const metadata = getMetadata('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning >
        <body className="relative font-hanken-grotesk antialiased">
          <Providers>
            <ReactLenis root>
              {/* Background grid positioned absolutely behind */}
              <div className="fixed inset-0 -z-10 min-h-full">
                <GradientBackground />
              </div>
              <Navbar />
               <Toaster position="top-right" />
              {children}
              <Quote />
              {/* <Footer /> dont want this now*/}
              <BackToTop />
              <UmamiAnalytics />
            </ReactLenis>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
