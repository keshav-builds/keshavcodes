import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import { Quote } from '@/components/common/Quote';
import { generateMetadata as getMetadata } from '@/config/Meta';
import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions';
import UmamiAnalytics from '@/components/analytics/UmamiAnalytics';
import Providers from '@/components/common/Providers';
import GridBackgroundDemo from '@/components/common/gridBackgroundDemo'; 
import './globals.css';

export const metadata = getMetadata('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
        <body className="relative font-hanken-grotesk antialiased">
          <Providers>
            <ReactLenis root>
              {/* Background grid positioned absolutely behind */}
              <div className="fixed inset-0 -z-10">
               <GridBackgroundDemo/>
              </div>
              {/* Main content with higher z-index */}
              <div className="relative z-10">
                <Navbar />
                {children}
                <Quote />
                <Footer />
              </div>
              <UmamiAnalytics />
            </ReactLenis>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
