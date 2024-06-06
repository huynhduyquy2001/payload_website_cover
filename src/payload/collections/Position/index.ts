import { CollectionConfig } from "payload/types";
import { isAdmin } from "../../access/isAdmin";

const Position: CollectionConfig = {
    slug: 'position',
    access: {
        read: () => true,
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin,
    },
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            label: 'Position Name',
            required: true,
            unique: true,
        },
        {
            name: 'description',
            type: 'text',
            label: 'Description',
        },
    ],
};

export default Position;
