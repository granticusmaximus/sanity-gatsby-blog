export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e20e138cfdb82ad846bed88',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-55543kis',
                  apiId: '60d60352-b18d-42be-abbb-71e9c09e9dd5'
                },
                {
                  buildHookId: '5e20e13880377fa0054f566f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-wjdeb9f5',
                  apiId: '9e7ae4c7-4f2a-477d-9dde-2c695182a2d5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/granticusmaximus/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-wjdeb9f5.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
