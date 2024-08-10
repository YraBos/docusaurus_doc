---
title: 'Проигрывание аудио и видео'
---
import ReactPlayer from "react-player";

В процессе создания сайта возможно потребуется проиграть видео-файл, но не с YouTube, хотя такое тоже возможно, предлагаемым ниже способом, 
а используя ReactPlayer. Для этого необходимо: 

1. В консоли проекта инсталлировать ReactPlayer, если он не был инсталлирован ранее,  
   выполнением команды: **npm install react-player**
2. В код модуля добавить `import ReactPlayer from "react-player";`
3. В код модуля добавить вызов плеера: `<ReactPlayer playing controls url='/baseUrl/./files/композиция.mp4'/>`

Некоторые пояснения:
- baseUrl - базовый URL, в конкретном случае это дочерний сайт и его базовый baseUrl = '/sdocs/'
- files - просто имя подкаталога (может быть любое) в каталоге static. При этом наименование static исключается из определения пути
- композиция - проигрываемый файл видео (или звуковой) с соответствующим расширением


<details>
<summary>**Текст примера**</summary>
Между вызовом `import` и тегом `ReactPlayer` обязательно пропуск в одну строку 
>`import ReactPlayer from "react-player";`
> 
> `<ReactPlayer playing controls url='/docusaurus/./files/prof.mp3' width = '50%' height = '50px />`
>***
Если надо вызвать проигрывание с YouTube, то url равен ссылке, например:
> `<ReactPlayer playing controls url='https://www.youtube.com/embed/8owG83ozHYw?si=9CuD8fhiLtLjiotn' />`
***
Если при вызове плеера присутствует ключевое слово 'playing' воспроизведение начинается по готовности проигрывать файл. 
То есть открытие страницы, где присутствует соответствующий код, начнет проигрывать сразу или почти сразу. 
Иначе для проигрывания необходимо нажать "play".
</details>

<ReactPlayer controls url='/docusaurus/./files/prof.mp3' width = '50%' height = '50px' />  
Звуковой файл, источник на GitHub
***
<ReactPlayer controls url='https://www.youtube.com/embed/8owG83ozHYw?si=9CuD8fhiLtLjiotn' />  
Видео, источник YouTube

***
:::info внимание
Размещать на GitHub большие видео не целесообразно:
- есть ограничение на размер закачиваемых файлов на GitHub до 100мб
- будет долго происходить выполнение **yarn deploy**

Поэтому лучше, если источником видео будет выступать отдельный ресурс или YouTube
:::

***
[Свойства проигрывателя](https://www.npmjs.com/package/react-player)  
[Обсуждения](https://stackoverflow.com/questions/69179910/docusaurus-2-inclusion-of-a-video-file-in-a-markdown-file)  


Посмотреть [Текст страницы](pathname:///files/howto/play.txt)

