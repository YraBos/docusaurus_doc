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
                items: [ 'edit/start','edit/new-pages','edit/navbar-items','edit/footer-bar','edit/color-schemes']
            },
            {
                type: 'category',
                label: 'How-To',
                link: {type: 'doc', id: 'howto/howto'},
                items: [
                    'howto/tables','howto/quote','howto/message','howto/line', 'howto/collapse','howto/youtube','howto/copy-file','howto/play', ]
            },
    ]
}

// 'edit/color-schemes','edit/promotion'