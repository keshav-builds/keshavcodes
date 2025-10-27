import UmamiAnalytics from '@/components/analytics/UmamiAnalytics';
import BackToTop from '@/components/common/BackToTop';
import GradientBackground from '@/components/common/GradientBackground';
import Navbar from '@/components/common/Navbar';
import Providers from '@/components/common/Providers';
import { Quote } from '@/components/common/Quote';
import { generateMetadata as getMetadata } from '@/config/Meta';
import HolyLoader from 'holy-loader';
import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions';
import { Toaster } from 'sonner';

import './globals.css';

export const metadata = {
  ...getMetadata('/'),
  icons: {
    icon: '/assets/favicon.png',
  },
};

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
              <HolyLoader
                color="#3b82f6"
                height="3px"
                speed={100} // Faster animation
                easing="linear" // More consistent
                showSpinner={false}
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
