---
title: 'Проигрывание видео'
---

В процессе создания сайта возможно потребуется проиграть видео-файл, но не с YouTube, хотя такое тоже возможно, предлагаемым ниже способом, 
а используя ReactPlayer. Для этого необходимо: 

1. В консоли проекта инсталлировать ReactPlayer, если он не был инсталлирован ранее, выполнением команды: **npm install react-player**
2. В код модуля добавить `import ReactPlayer from "react-player";`
3. В код модуля добавить вызов плеера: `<ReactPlayer playing controls url='/sdocs/./files/pink1.mp4' />`

import ReactPlayer from "react-player";
<ReactPlayer playing controls url='/sdocs/./files/pink1.mp4' />

Рабочая ссылка для URL: `"http://localhost:3000/sdocs/files/pink1.mp4"`  
Рабочая ссылка для URL: `"https://www.youtube.com/watch?v=vBUcS1O5giM"`  


[Обсуждение](https://stackoverflow.com/questions/69179910/docusaurus-2-inclusion-of-a-video-file-in-a-markdown-file)  
[Свойства проигрывателя](https://www.npmjs.com/package/react-player)
