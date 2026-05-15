export const eventsQuery = `
  *[_type == "event" && !(_id in path("drafts.**"))] | order(startDate asc) {
    _id, title, startDate, endDate, image, slug
  }
`

export const postsQuery = `
  *[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id, title, category, publishedAt, excerpt, tags, image, slug
  }
`

export const activitiesQuery = `
  *[_type == "activity" && !(_id in path("drafts.**"))] | order(order asc) {
    _id, title, category, description, image
  }
`

export const engagementsQuery = `
  *[_type == "engagement" && !(_id in path("drafts.**"))] | order(order asc) {
    _id, title, image
  }
`

export const featuredPostQuery = `
  *[_type == "post" && featured == true && !(_id in path("drafts.**"))][0] {
    _id, title, category, excerpt, image, slug
  }
`
