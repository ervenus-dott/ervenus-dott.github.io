import basic from './basic.js';

export default function (config) {
  return basic({
    ...config,
    content: /* html */`
<article>
  <div>&lt; <a href="../../">blog</a></div>
  <h1>${config.title}</h1>
  <div><p class="date">${config.date}</p></div>
  <div><p>${config.content}</p></div>
</article>
`
  });
};
