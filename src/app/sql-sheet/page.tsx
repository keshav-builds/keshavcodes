import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { Metadata } from 'next';
import { generateMetadata as getMetadata } from '@/config/Meta';
import React from 'react';
import { sqlCommands } from '@/config/SqlCheatsheet';

export const metadata: Metadata = {
  ...getMetadata('/sql-sheet'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function SqlCheatsheetPage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">SQL Cheatsheet </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A practical SQL cheatsheet  — perfect for interviews and day-to-day queries!
          </p>
        </div>
        <Separator />

        {/* SQL commands section */}
        {sqlCommands.map(({ category, commands }) => (
          <section key={category} className="space-y-4">
            <h2 className="text-2xl font-semibold">{category}</h2>

            {/* Desktop: table layout */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full border border-gray-300 dark:border-gray-700 rounded-md overflow-hidden">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="text-left px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                      Query / Command
                    </th>
                    <th className="text-left px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {commands.map(({ cmd, desc }) => (
                    <tr key={cmd}>
                      <td className="py-2 px-4 whitespace-pre-wrap font-mono text-sm text-emerald-600 dark:text-emerald-300">
                        <code>{cmd}</code>
                      </td>
                      <td className="py-2 px-4 text-sm text-gray-800 dark:text-gray-300">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile: stacked simple list */}
            <div className="md:hidden space-y-4">
              {commands.map(({ cmd, desc }) => (
                <div
                  key={cmd}
                  className="border border-gray-300 dark:border-gray-700 rounded-md p-4 bg-gray-50 dark:bg-gray-900 whitespace-pre-wrap"
                >
                  <p className="font-mono text-indigo-600 dark:text-indigo-400 text-sm mb-1">
                    <code>{cmd}</code>
                  </p>
                  <p className="text-sm text-gray-800 dark:text-gray-300">{desc}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <p className="mt-8 text-muted-foreground">
          Use this cheatsheet regularly during your SQL journey — it’s packed with practical examples  you'll meet in real projects and interviews!
        </p>
      </div>
    </Container>
  );
}
