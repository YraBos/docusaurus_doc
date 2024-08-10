---
title: 'Блоки кода'
---

В текст можно вставлять блоки кода с подсветкой (или без). 
Блоки кода обрамляются 3-мя символами ``` сверху и снизу, дополнительно вначале блока может указываться заголовок, 
например: js title="docusaurus.config.js", где js - признак синтаксиса подсветки. 

Например, описываем вставку массива headTags в файл docusaurus.config.js:

```js title="docusaurus.config.js"
module.exports = {
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        href: '/img/docusaurus.png',
      },
    },
  ],
};
```

Посмотреть [Текст страницы](pathname:///files/howto/code.txt)
