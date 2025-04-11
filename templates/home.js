import basic from './basic.js';

export default function (config) {
  return basic({
    ...config,
    content: /* html */`
<div>${config.content}</div>
`
  });
};
