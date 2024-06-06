import type { GlobalConfig } from 'payload/types'
import { admins } from '../access/admins'

export const Settings: GlobalConfig = {
  slug: 'settings',
  typescript: {
    interface: 'Settings',
  },
  graphQL: {
    name: 'Settings',
  },
  access: {
    read: () => true,
    update: admins,
  },
  fields: [
    {
      name: 'postsPage',
      type: 'relationship',
      relationTo: 'pages',
      label: 'Posts page',
    },
    {
      name: 'projectsPage',
      type: 'relationship',
      relationTo: 'pages',
      label: 'Projects page',
    },
    {
      name: 'siteTitle',
      type: 'text',
      label: 'Site Title',
      required: true,
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
    },
    {
      name: 'siteIcon',
      type: 'upload',
      relationTo: 'media',
      label: 'Site Icon',
    },
    {
      name: 'wordpressAddress',
      type: 'text',
      label: 'WordPress Address (URL)',
      required: true,
    },
    {
      name: 'siteAddress',
      type: 'text',
      label: 'Site Address (URL)',
      required: true,
    },
    {
      name: 'adminEmail',
      type: 'email',
      label: 'Administration Email Address',
      required: true,
    },
    {
      name: 'membership',
      type: 'checkbox',
      label: 'Anyone can register',
    },
    {
      name: 'newUserDefaultRole',
      type: 'select',
      label: 'New User Default Role',
      options: [
        {
          label: 'Subscriber',
          value: 'subscriber',
        },
        {
          label: 'Contributor',
          value: 'contributor',
        },
        {
          label: 'Author',
          value: 'author',
        },
        {
          label: 'Editor',
          value: 'editor',
        },
        {
          label: 'Administrator',
          value: 'administrator',
        },
      ],
      required: true,
    },
    {
      name: 'siteLanguage',
      type: 'select',
      label: 'Site Language',
      options: [
        {
          label: 'English',
          value: 'en',
        },
        {
          label: 'Vietnamese',
          value: 'vi',
        },
        // Add more languages as needed
      ],
      required: true,
    },
    {
      name: 'timezone',
      type: 'text',
      label: 'Timezone',
      required: true,
    },
    {
      name: 'dateFormat',
      type: 'radio',
      label: 'Date Format',
      options: [
        {
          label: 'F j, Y',
          value: 'F j, Y',
        },
        {
          label: 'Y-m-d',
          value: 'Y-m-d',
        },
        {
          label: 'm/d/Y',
          value: 'm/d/Y',
        },
        {
          label: 'd/m/Y',
          value: 'd/m/Y',
        },
      ],
      required: true,
    },
    {
      name: 'timeFormat',
      type: 'radio',
      label: 'Time Format',
      options: [
        {
          label: 'g:i a',
          value: 'g_i_a',
        },
        {
          label: 'g:i A',
          value: 'g_i_A',
        },
        {
          label: 'H:i',
          value: 'H_i',
        },
      ],
      required: true,
    },
    {
      name: 'weekStartsOn',
      type: 'select',
      label: 'Week Starts On',
      options: [
        {
          label: 'Monday',
          value: '1',
        },
        {
          label: 'Tuesday',
          value: '2',
        },
        {
          label: 'Wednesday',
          value: '3',
        },
        {
          label: 'Thursday',
          value: '4',
        },
        {
          label: 'Friday',
          value: '5',
        },
        {
          label: 'Saturday',
          value: '6',
        },
        {
          label: 'Sunday',
          value: '0',
        },
      ],
      defaultValue: '1',
      required: true,
    },
    {
      name: 'ads',
      type: 'relationship',
      relationTo: 'ads',
      hasMany: false,
      label: 'Ads',
    },
  ],
}
