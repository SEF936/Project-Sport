import fs from 'fs';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import path from 'path';

// read all markdown files in content/blog and output JSON index to public/search-index.json
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(__dirname, '../src/content/blog');
const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

const index = files.map((file) => {
  const fullPath = path.join(contentDir, file);
  const raw = fs.readFileSync(fullPath, 'utf-8');
  const { data } = matter(raw);
  return {
    slug: file.replace(/\.md$/, ''),
    title: data.title || '',
    excerpt: data.excerpt || '',
    tags: data.tags || [],
  };
});

const outDir = path.join(__dirname, '../public');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'search-index.json'), JSON.stringify(index));
console.log('✓ search index generated:', index.length, 'entries');