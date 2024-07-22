module.exports = {

    docs: [
        'about',
        {
            type: 'category',
            label: 'Docusaurus',
            link: {type: 'doc', id: 'docusaurus/docusaurus'},
            items: [
                'docusaurus/install',
                {
                    type: 'category',
                    label: 'Создание проекта',
                    link: {type: 'doc', id: 'docusaurus/create/create'},
                    items: [
                        'docusaurus/create/create_local',
                        'docusaurus/create/create_deploy',
                    ],
                },
                {
                    type: 'category',
                    label: 'Редактирование проекта',
                    link: {type: 'doc', id: 'docusaurus/edit/edit'},
                    items: [
                        'docusaurus/edit/start',
                    ]
                },
                {
                    type: 'category',
                    label: 'How-To',
                    link: {type: 'doc', id: 'docusaurus/howto/howto'},
                    items: [
                        'docusaurus/howto/tables','docusaurus/howto/quote','docusaurus/howto/message','docusaurus/howto/line',
                        'docusaurus/howto/youtube','docusaurus/howto/collapse','docusaurus/howto/copy-file',

                    ]

                },
           ],
        },

    ]
}

