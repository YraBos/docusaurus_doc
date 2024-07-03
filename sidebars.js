module.exports = {

    docs: [
        'about',
        {
            type: 'category',
            label: 'Docusaurus',
            link: {type: 'doc', id: 'docusaurus/docusaurus'},
            items: [
                'docusaurus/install', {
                    type: 'category',
                    label: 'Создание проекта',
                    link: {type: 'doc', id: 'docusaurus/create'},
                    items: [
                        'docusaurus/create_local',
                        'docusaurus/create_deploy',
                    ],
                }
           ],
        },

    ]
}

