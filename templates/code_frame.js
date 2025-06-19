import basic from './basic.js';

export default async function (config) {
  return basic({
    ...config,
    content: /* html */`
    <div class="intro">
      <article class="blog-post-link">
        <h3>${config.title}</h3>
        <p class="date">${config.date}</p>
        <p class="stars">Few word subjectivity rating: ${config.personal_rating}</p>
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
