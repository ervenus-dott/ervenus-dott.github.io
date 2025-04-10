import basic from './basic.js';

export default function (config) {
    return basic({
        ...config,
        content: /* html */`
<h2>Code Projects</h2>
<div>
  <div>
        <iframe 
            src="https://ervenus-dott.github.io/web_toys/06_hello_particles.html" 
            width="600" 
            height="600" 
            frameborder="0" 
            scrolling="no">
        </iframe>
        <iframe 
            src="https://ervenus-dott.github.io/web_toys/08_room_generator.html" 
            width="600" 
            height="600" 
            frameborder="0" 
            scrolling="no">
        </iframe>
  </div>
</article>
<div>${config.content}</div>
`
    });
};
