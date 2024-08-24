---
title: 'Ключевые слова и описание'
---

Необходимо добавить в конфигурационные файл:
- описание сайта
- ключевые слова для поисковых систем

При генерации сайта командой yarn build для всех index.html (для каждого каталога будет свой) будут добавлены 
соответствующие мета-теги в раздел заголовка страницы (head):

```
<head>  
    <meta name="description" content="Описание сайта"  
    <meta name="keywords" content="Ключевые слова" />  
</head>  
```

Для добавления мета-тегов надо добавить в docusaurus.config.js массив headTags (_теги для заголовка_), 
в который включить два объекта, описывающих description и keywords:  

```js title="docusaurus.config.js"
module.exports = {
  headTags: [
    {
        tagName: 'meta',
        attributes: {
            name: 'description',
            content: 'Описание сайта',
        },
    },
    {
        tagName: 'meta',
        attributes: {
            name: 'keywords',
            content: 'Список ключевых слов через пробел или запятую с пробелом',
        },
    },
  ],
};
```

<u>Примечание:</u>
- По аналогии с ключевыми словами и описанием сайта можно добавить и другие мета-теги при необходимости  

Пример реализации представлен [здесь](pathname:///files/docusaurus.config_headtags.txt).

<br/><br/><br/>
**См. также**  
[Мета-теги](https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D1%82%D0%B0%D1%82%D0%B5%D0%B3%D0%B8#:~:text=%D0%9C%D0%B5%D1%82%D0%B0%2D%D1%82%D0%B5%D0%B3%D0%B8%20(%D0%B0%D0%BD%D0%B3%D0%BB.,(X)HTML%2D%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0))    
[Сервис статистики запросов ключевого слова](https://keywordtool.io/ru)    


