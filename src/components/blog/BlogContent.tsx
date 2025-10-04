import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { BlogFrontmatter } from '@/types/blog';
import rehypeHighlight from '@shikijs/rehype';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';

import Calender from '../svgs/Calender';
import { BlogComponents } from './BlogComponents';

interface BlogContentProps {
  frontmatter: BlogFrontmatter;
  content: string;
}

export function BlogContent({ frontmatter, content }: BlogContentProps) {
  const { title, description, image, tags, date } = frontmatter;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
  
      {/* Hero Image */}
      <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg mb-8">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/60 dark:from-black/80 dark:to-black/40" />
      </div>

      {/* Header Section */}
      <header className="mb-10 space-y-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          {title}
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground pt-3 border-t border-border/40">
          <Calender className="size-4" />
          <time dateTime={date}>{formattedDate}</time>
        </div>
      </header>

      <Separator className="mb-10" />

      {/* Blog Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-p:text-muted-foreground prose-li:text-muted-foreground">
        <MDXRemote
          source={content}
          components={BlogComponents}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [
                  rehypeHighlight,
                  {
                    theme: 'github-dark',
                  },
                ],
              ],
            },
          }}
        />
      </div>
    </article>
  );
}
