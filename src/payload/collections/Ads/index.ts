import { CollectionConfig } from "payload/types";
import { isAdmin } from "../../access/isAdmin";

const Ads: CollectionConfig = {
    slug: 'ads',
    access: {
        read: () => true,
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin,
    },
    admin: {
        useAsTitle: 'title',
    },
    hooks: {
        beforeChange: [
            async ({ data, originalDoc, operation }) => {
                if (operation === 'create' || operation === 'update') {
                    const positions = data.images.map(image => image.position);
                    const positionCounts = positions.reduce((acc, position) => {
                        acc[position] = (acc[position] || 0) + 1;
                        return acc;
                    }, {});

                    const duplicatePositions = Object.entries(positionCounts).filter(([position, count]) => Number(count) > 1);
                    if (duplicatePositions.length > 0) {
                        throw new Error(`Duplicate positions found: ${duplicatePositions.map(([position]) => position).join(', ')}`);
                    }
                }
            },
        ],
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            label: 'Title',
            required: true,
        },
        {
            name: 'images',
            type: 'array',
            label: 'Images',
            fields: [
                {
                    name: 'position',
                    type: 'relationship',
                    relationTo: 'position',
                    label: 'Position',
                    required: true,
                },
                {
                    name: 'images',
                    type: 'array',
                    label: 'Images',
                    fields: [
                        {
                            name: 'image',
                            type: 'upload',
                            relationTo: 'media',
                            label: 'Image',
                            required: true,
                        },
                    ],
                    minRows: 1,
                    maxRows: 3,
                },
            ],

        },
    ],
};

export default Ads;
