import {
  readFile,
  readdir,
} from 'node:fs/promises';
import { readMarkdownWithFrontMatter } from '../shared.js';
import basic from './basic.js';

export default async function (config) {
  const path = 'content/code_projects/projects/';
  const scanResult = (await readdir(path, {
    recursive: true
  })).filter(s=>s.endsWith('.md'));
  const blogListItems = (
    await Promise.all(scanResult.map(async item => {
      const {frontMatter} = await readMarkdownWithFrontMatter(path, item);
      const link = item.replace(/\.md$/,'.html');
      return {link, frontMatter};
    }))
  )
    .sort((a, b) => b.frontMatter.date
      .localeCompare(a.frontMatter.date)
    )
    .map(({link, frontMatter}) => /*html*/`<article class="blog-post-link">
      <h3>${frontMatter.title}</h3>
      <a href="projects/${link}">Click to read more</a>
      <p class="date">${frontMatter.date}</p>
      <p class="stars">Few word subjectivity rating: ${frontMatter.personal_rating}</p>
      <iframe 
        src="${frontMatter.url}" 
        width="600" 
        height="600" 
        frameborder="0" 
        scrolling="no">
      </iframe>
    </article>`);
  return basic({
    ...config,
    content: /* html */`
    <div class="intro">${config.content}</div>
    <div class="blog-posts">
      ${blogListItems.join('\n')}
    </div>
`
  });
};
