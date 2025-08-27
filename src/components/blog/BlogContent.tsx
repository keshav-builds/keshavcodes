import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { BlogFrontmatter } from '@/types/blog';
import rehypeHighlight from '@shikijs/rehype';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';

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
   <article className="mx-auto max-w-4xl  rounded-xl shadow-lg p-2 sm:p-6 transition-colors">
  <header className="mb-8 space-y-6">
    <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/60 dark:from-black/80 dark:to-black/40" />
    </div>
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs px-2 py-1 rounded-full">
            {tag}
          </Badge>
        ))}
      </div>
      <h1 className="text-4xl font-extrabold leading-tight lg:text-5xl tracking-tight">
        {title}
      </h1>
      <p className="text-lg text-muted-foreground font-medium">{description}</p>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Calender className="size-5" />
        <time dateTime={date}>{formattedDate}</time>
      </div>
    </div>
    <Separator />
  </header>

  <div className="prose prose-lg prose-headings:font-bold prose-headings:text-primary prose-a:text-primary prose-a:underline max-w-none dark:prose-invert px-2 sm:px-0">
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
