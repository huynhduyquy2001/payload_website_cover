// src/collections/FeatureCoin.js

import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../../access/isAdmin';
import { anyone } from '../../access/anyone';

const FeatureCoin: CollectionConfig = {
    slug: 'feature-coins',
    access: {
        create: isAdmin,
        read: anyone,
        readVersions: isAdmin,
        update: isAdmin,
        delete: isAdmin,
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'rank',
            type: 'number',
            required: true,
        },
        {
            name: 'order',
            type: 'number',
            required: true,
        },
    ],
};

export default FeatureCoin;
