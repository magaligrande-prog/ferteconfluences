import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset   = import.meta.env.VITE_SANITY_DATASET || 'production'

export const isConfigured = Boolean(projectId)

export const client = createClient({
  projectId: projectId || 'placeholder',
  dataset,
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

export function getImageUrl(image, fallback = '') {
  if (!image) return fallback
  if (typeof image === 'string') return image
  if (image?.asset) return urlFor(image).width(1200).auto('format').url()
  return fallback
}
