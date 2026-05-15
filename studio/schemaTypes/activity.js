export const activity = {
  name: 'activity',
  title: 'Activité',
  type: 'document',
  fields: [
    { name: 'title',       title: 'Titre',      type: 'string',  validation: Rule => Rule.required() },
    { name: 'category',    title: 'Catégorie',  type: 'string',  options: { list: ['Nautisme', 'Sport', 'Famille', 'Culture', 'Gastronomie'] } },
    { name: 'description', title: 'Description courte', type: 'text', rows: 2 },
    { name: 'image',       title: 'Image',      type: 'image',   options: { hotspot: true } },
    { name: 'order',       title: 'Ordre',      type: 'number' },
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'image' },
  },
}
