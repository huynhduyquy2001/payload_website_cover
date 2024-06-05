import { CollectionConfig } from 'payload/types';

const Tags: CollectionConfig = {
    slug: 'tags',
    labels: {
        singular: 'Tag',
        plural: 'Tags',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            label: 'Name',
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            label: 'Slug',
            required: true,
            unique: true,
        },
        {
            name: 'description',
            type: 'textarea',
            label: 'Description',
        },
        {
            name: 'meta',
            type: 'group',
            label: 'Meta Data',
            fields: [
                {
                    name: 'metaTitle',
                    type: 'text',
                    label: 'Meta Title',
                },
                {
                    name: 'metaDescription',
                    type: 'textarea',
                    label: 'Meta Description',
                },
                {
                    name: 'metaKeywords',
                    type: 'text',
                    label: 'Meta Keywords',
                },
            ],
        },
    ],
};

export default Tags;
