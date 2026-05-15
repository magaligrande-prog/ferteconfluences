export const event = {
  name: 'event',
  title: 'Événement',
  type: 'document',
  fields: [
    { name: 'title',       title: 'Titre',           type: 'string',   validation: Rule => Rule.required() },
    { name: 'slug',        title: 'Slug',            type: 'slug',     options: { source: 'title' } },
    { name: 'startDate',   title: 'Date de début',   type: 'date' },
    { name: 'endDate',     title: 'Date de fin',     type: 'date' },
    { name: 'image',       title: 'Image',           type: 'image',    options: { hotspot: true } },
    { name: 'description', title: 'Description',     type: 'text' },
  ],
  preview: {
    select: { title: 'title', subtitle: 'startDate', media: 'image' },
  },
}
