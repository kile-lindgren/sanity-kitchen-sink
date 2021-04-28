export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60897caab598dd1e150be277',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-hrjfttps',
                  apiId: 'f2008743-42d7-4823-b1c6-cd56fc757a32'
                },
                {
                  buildHookId: '60897caa4916891d2b548ab5',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-kkiwfcx9',
                  apiId: '683c92eb-d3f4-4c0d-9402-90e249099639'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kile-lindgren/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-kkiwfcx9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
