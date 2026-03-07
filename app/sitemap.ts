import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://codesense.me',
      lastModified: new Date(),
    },
  ]
}