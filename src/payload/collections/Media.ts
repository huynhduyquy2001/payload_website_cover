import { slateEditor } from '@payloadcms/richtext-slate'
import { put } from '@vercel/blob'
import type { CollectionConfig } from 'payload/types'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticURL: process.env.IMAGES_URL,
    disableLocalStorage: true,
  },
  access: {
    read: () => true,
  },
  fields: [],
  hooks: {
    beforeChange: [
      async ({ data, req, originalDoc, operation }) => {
        if (operation === 'create' || operation === 'update') {
          // Upload the image to Vercel Blob
          const { url } = await put('images/image.jpg', req.files.file.data, { access: 'public' })
          const baseUrl = process.env.IMAGES_URL + '/'
          // Loại bỏ base URL khỏi URL đầy đủ
          const relativeUrl = url.replace(baseUrl, '')
          // Update the image URL field
          data.filename = relativeUrl
        }
      },
    ],
  },
}
