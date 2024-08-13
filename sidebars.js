module.exports = {

    docs: [
        'docusaurus','install',
            {
                type: 'category',
                label: 'Создание проекта',
                link: {type: 'doc', id: 'create/create'},
                items: [ 'create/local', 'create/deploy', ],
            },
            {
                type: 'category',
                label: 'Редактирование проекта',
                link: {type: 'doc', id: 'edit/edit'},
                items: [ 'edit/start','edit/new-pages',
                    {
                        type: 'category',
                        label: 'Навигационная панель',
                        link: {type: 'doc', id: 'edit/navbar/navbar'},
                        items: ['edit/navbar/start','edit/navbar/to','edit/navbar/blog','edit/navbar/menu'],
                    },
                    'edit/footer-bar',
                    {
                        type: 'category',
                        label: 'Управление дизайном',
                        link: {type: 'doc', id: 'edit/design/design'},
                        items: ['edit/design/color-schemes','edit/design/continue-changes','edit/design/find'],
                    },
                ],
            },
            {
                type: 'category',
                label: 'Продвижение сайта',
                link: {type: 'doc', id: 'promotion/promotion'},
                items: ['promotion/keywords','promotion/sitemap'],
            },
            {
                type: 'category',
                label: 'How-To',
                link: {type: 'doc', id: 'howto/howto'},
                items: [
                    'howto/tables','howto/quote','howto/message','howto/code','howto/line', 'howto/collapse','howto/youtube','howto/copy-file','howto/play', ]
            },
    ]
}
