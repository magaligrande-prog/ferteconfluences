export const engagement = {
  name: 'engagement',
  title: 'Engagement / Valeur',
  type: 'document',
  fields: [
    { name: 'title',       title: 'Titre',    type: 'string', validation: Rule => Rule.required() },
    { name: 'image',       title: 'Image',    type: 'image',  options: { hotspot: true } },
    { name: 'description', title: 'Description', type: 'text', rows: 3 },
    { name: 'order',       title: 'Ordre',    type: 'number' },
  ],
  preview: {
    select: { title: 'title', media: 'image' },
  },
}
