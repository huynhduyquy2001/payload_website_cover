import { CollectionConfig } from 'payload/types';
import axios from 'axios';
import { put } from '@vercel/blob';
import CustomCoinIDField from './Components/CustomCoinIDField';
import { isAdmin } from '../../access/isAdmin';
import { publishedOnly } from '../../access/publishedOnly';
import { anyone } from '../../access/anyone';


const convertToCoinId = (text: string): string => {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
};

const Coin: CollectionConfig = {
    slug: 'coins',
    access: {
        create: isAdmin,
        read: anyone,
        readVersions: isAdmin,
        update: isAdmin,
        delete: isAdmin,
    },
    fields: [
        {
            name: 'image',
            type: 'upload',
            label: 'Image',
            relationTo: 'media',
        },
        {
            name: 'symbol',
            type: 'text',
            required: true,
            label: 'Symbol',
        },
        {
            name: 'name',
            type: 'text',
            required: true,
            label: 'Name',
            unique: true,

        },
        {
            name: 'coin_id',
            type: 'text',
            label: 'Coin ID',
            admin: {
                readOnly: true,
                components: {
                    Field: CustomCoinIDField,
                },
                description: "This field is readonly"
            }
        },

        {
            name: 'current_price',
            type: 'number',
            required: true,
            label: 'Current Price',
        },
        {
            name: 'market_cap',
            type: 'number',
            required: true,
            label: 'Market Cap',
        },
        {
            name: 'market_cap_rank',
            type: 'number',
            required: true,
            label: 'Market Cap Rank',
        },
        {
            name: 'fully_diluted_valuation',
            type: 'number',
            required: true,
            label: 'Fully Diluted Valuation',
        },
        {
            name: 'total_volume',
            type: 'number',
            required: true,
            label: 'Total Volume',
        },
        {
            name: 'high_24h',
            type: 'number',
            required: true,
            label: 'High 24h',
        },
        {
            name: 'low_24h',
            type: 'number',
            required: true,
            label: 'Low 24h',
        },
        {
            name: 'price_change_24h',
            type: 'number',
            required: true,
            label: 'Price Change 24h',
        },
        {
            name: 'price_change_percentage_24h',
            type: 'number',
            required: true,
            label: 'Price Change Percentage 24h',
        },
        {
            name: 'market_cap_change_24h',
            type: 'number',
            required: true,
            label: 'Market Cap Change 24h',
        },
        {
            name: 'market_cap_change_percentage_24h',
            type: 'number',
            required: true,
            label: 'Market Cap Change Percentage 24h',
        },
        {
            name: 'circulating_supply',
            type: 'number',
            required: true,
            label: 'Circulating Supply',
        },
        {
            name: 'total_supply',
            type: 'number',
            required: true,
            label: 'Total Supply',
        },
        {
            name: 'max_supply',
            type: 'number',
            required: true,
            label: 'Max Supply',
        },
        {
            name: 'ath',
            type: 'number',
            required: true,
            label: 'All Time High (ATH)',
        },
        {
            name: 'ath_change_percentage',
            type: 'number',
            required: true,
            label: 'ATH Change Percentage',
        },
        {
            name: 'ath_date',
            type: 'date',
            required: true,
            label: 'ATH Date',
        },
        {
            name: 'atl',
            type: 'number',
            required: true,
            label: 'All Time Low (ATL)',
        },
        {
            name: 'atl_change_percentage',
            type: 'number',
            required: true,
            label: 'ATL Change Percentage',
        },
        {
            name: 'atl_date',
            type: 'date',
            required: true,
            label: 'ATL Date',
        },
        {
            name: 'roi',
            type: 'number',
            required: false,
            label: 'Return on Investment (ROI)',
        },
        {
            name: 'last_updated',
            type: 'date',
            required: true,
            label: 'Last Updated',
        },

    ],
    hooks: {
        beforeChange: [
            async ({ data, operation }) => {
                if (operation === 'create' || operation === 'update') {
                    if (data.name) {
                        const coin_id = convertToCoinId(data.name);
                        data.coin_id = coin_id; // Đặt Slug từ name
                    }
                }
            },
        ],
    }
};

export default Coin;
