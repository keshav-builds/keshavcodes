import UmamiAnalytics from '@/components/analytics/UmamiAnalytics';
import BackToTop from '@/components/common/BackToTop';
import GradientBackground from '@/components/common/GradientBackground';
import Navbar from '@/components/common/Navbar';
import Providers from '@/components/common/Providers';
import { Quote } from '@/components/common/Quote';
import { generateMetadata as getMetadata } from '@/config/Meta';
import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'sonner';

import './globals.css';

export const metadata = getMetadata('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className="relative font-hanken-grotesk antialiased">
          <Providers>
            <ReactLenis root>
              <NextTopLoader
                color="#3b82f6"
                initialPosition={0.08}
                crawlSpeed={200}
                height={3}
                crawl={true}
                showSpinner={false}
                easing="ease"
                speed={200}
                shadow="0 0 5px #2299DD,0 0 5px #2299DD"
                
              />

              {/* Background grid positioned absolutely behind */}
              <div className="fixed inset-0 -z-10 min-h-full">
                <GradientBackground />
              </div>
              <Navbar />
              <Toaster position="top-right" />
              {children}
              <Quote />
              <BackToTop />
              <UmamiAnalytics />
            </ReactLenis>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
