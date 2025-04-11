import basic from './basic.js';

export default async function (config) {
  return basic({
    ...config,
    content: /* html */`
    <div class="intro">
      <article class="blog-post-link">
        <h3>${config.title}</h3>
        <p class="date">${config.date}</p>
        <p class="stars">How much I liked it Rating: ${config.personal_rating} / 5 stars</p>
      </article>
        <iframe 
          src="${config.url}" 
          width="600" 
          height="600" 
          frameborder="0" 
          scrolling="no">
        </iframe>
    </div>
    <div class="content">${config.content}</div>
`
  });
};
