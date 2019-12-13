export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5df3bbeb030da401b6bd2256',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-bdkryaky',
                  apiId: '32949c97-76df-44e8-b083-c7787bc3c9c3'
                },
                {
                  buildHookId: '5df3bbecbff34501db4d6e03',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8rvirzxo',
                  apiId: '1ef0cfb6-ec36-41e0-9d97-3ddf1d1d74cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Ibento/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-8rvirzxo.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
