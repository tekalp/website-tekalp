
import * as globby from 'globby';
import path from 'path';
import { getArticles, getReferences } from './_utils/shopifyAPI';

export default async function sitemap() {
  const baseUrl = "https://tekalp.fr"
  
  const pages = await globby.globby([
    'src/app/**/*.{js,jsx,ts,tsx}',
    '!src/app/_*.{js,jsx,ts,tsx}',
    '!src/app/**/\\[*\\]/**',
    '!src/app/api',
    '!src/app/_*/**',
    '!src/app/1iIYzkctp0ly71HqihwnFFvUiy88hdF4D66Wz81nJqVkjkwgPIp2MUNhVxMzax7I0TAr6ELB0kggTxxshuWNy6cZSaEPVD5WfGnV/**',
  ]);
  const pages_low_prio = await globby.globby([
    'src/app/politics/*.{js,jsx,ts,tsx}',
    'src/app/politics/**/*.{js,jsx,ts,tsx}',
    'src/app/mentions/*.{js,jsx,ts,tsx}',
    'src/app/mentions/**/*.{js,jsx,ts,tsx}',
    'src/app/contact/*.{js,jsx,ts,tsx}',
  ]);

  const pages_high_prio = await globby.globby([
    'src/app/references/*.{js,jsx,ts,tsx}',
    'src/app/solutions/**/*.{js,jsx,ts,tsx}',
    'src/app/company/*.{js,jsx,ts,tsx}',
    'src/app/blogs/*.{js,jsx,ts,tsx}',
  ]);

  const lowPriorityUrls = [...new Set(
    pages_low_prio
      .map((page) => {
        const directory = path.dirname(page).replace(process.cwd(), '');
        return directory.replace('src/app', '');
      }).filter(route => route !== '')
  )]

  const highPriorityUrls = [...new Set(
    pages_high_prio
      .map((page) => {
        const directory = path.dirname(page).replace(process.cwd(), '');
        return directory.replace('src/app', '');
      }).filter(route => route !== '')
  )]
  
  const allPages = [...new Set(
    pages
      .map((page) => {
        const directory = path.dirname(page).replace(process.cwd(), '');
        return directory.replace('src/app', '');
      }).filter(route => route !== '')
  )]
  
  const tags = await getReferences()
  const referenceRoutes = tags.map(tag => ({
    url: `${baseUrl}/references/${tag.handle}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
  
  const blogTags = await getArticles()
  const blogRoutes = blogTags?.data?.blogs?.nodes[0]?.articles?.nodes?.map(tag => ({
    url: `${baseUrl}/blogs/${tag.handle}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const highPages = highPriorityUrls.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  }));

  const intermediaryPages = allPages.filter(item => !lowPriorityUrls.includes(item)).filter(item => !highPriorityUrls.includes(item)).map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  const lowPages = lowPriorityUrls.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.5,
  }));

  return  [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority:1,
    },
    highPages,
    intermediaryPages, 
    referenceRoutes,
    blogRoutes,
    lowPages
   ].flat()
}