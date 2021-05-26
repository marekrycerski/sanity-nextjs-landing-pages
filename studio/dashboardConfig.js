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
                  buildHookId: '60ae2cd52aba92c77838ad8e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zffeu38u',
                  apiId: 'f5392726-70d7-46be-8ed6-fccca7b21fb5'
                },
                {
                  buildHookId: '60ae2cd593a3d1c66f1fbe30',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wg9f6pxc',
                  apiId: '64d3c4bc-4951-46f7-9686-a5f75710d218'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marekrycerski/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wg9f6pxc.netlify.app', category: 'apps'}
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
