export const post = {
  name: 'post',
  title: 'Article de blog',
  type: 'document',
  fields: [
    { name: 'title',       title: 'Titre',           type: 'string',   validation: Rule => Rule.required() },
    { name: 'slug',        title: 'Slug',            type: 'slug',     options: { source: 'title' }, validation: Rule => Rule.required() },
    { name: 'category',    title: 'Catégorie',       type: 'string',   options: { list: ['Nautisme', 'Loisirs', 'Port', 'Événements', 'Gastronomie', 'Nature'] } },
    { name: 'publishedAt', title: 'Date de publication', type: 'datetime' },
    { name: 'featured',    title: 'Article à la une', type: 'boolean', initialValue: false },
    { name: 'excerpt',     title: 'Extrait',         type: 'text',     rows: 3 },
    { name: 'image',       title: 'Image principale', type: 'image',   options: { hotspot: true } },
    { name: 'tags',        title: 'Tags',            type: 'array',    of: [{ type: 'string' }], options: { layout: 'tags' } },
    { name: 'body',        title: 'Contenu',         type: 'array',    of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] },
  ],
  orderings: [{ title: 'Date de publication (récent)', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'image' },
  },
}
