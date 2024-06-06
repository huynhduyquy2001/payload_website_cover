import { CollectionConfig } from 'payload/types';
import axios from 'axios';
import { put } from '@vercel/blob';
import CustomSlugField from './Components/CustomSlugField';
import { isAdmin } from '../../access/isAdmin';
import { anyone } from '../../access/anyone';

const convertToSlug = (text: string): string => {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
};

const CustomExchange: CollectionConfig = {
    slug: 'custom-exchange',
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
            label: 'Name',
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            label: 'Slug',
            admin: {
                readOnly: true,
                components: {
                    Field: CustomSlugField,
                },
                description: "This field is readonly"
            },

        },
        {
            name: 'year_established',
            type: 'number',
            required: true,
            label: 'Year Established',
        },
        {
            name: 'country',
            type: 'text',
            required: true,
            label: 'Country',
        },
        {
            name: 'description',
            type: 'textarea',
            label: 'Description',
        },
        {
            name: 'url',
            type: 'text',
            required: true,
            label: 'URL',
        },
        {
            name: 'image',
            type: 'upload',
            required: true,
            label: 'Image URL',
            relationTo: 'media',
        },
        {
            name: 'facebook_url',
            type: 'text',
            label: 'Facebook URL',
        },
        {
            name: 'reddit_url',
            type: 'text',
            label: 'Reddit URL',
        },
        {
            name: 'telegram_url',
            type: 'text',
            label: 'Telegram URL',
        },
        {
            name: 'slack_url',
            type: 'text',
            label: 'Slack URL',
        },
        {
            name: 'other_url_1',
            type: 'text',
            label: 'Other URL 1',
        },
        {
            name: 'other_url_2',
            type: 'text',
            label: 'Other URL 2',
        },
        {
            name: 'twitter_handle',
            type: 'text',
            label: 'Twitter Handle',
        },
        {
            name: 'has_trading_incentive',
            type: 'checkbox',
            label: 'Has Trading Incentive',
        },
        {
            name: 'centralized',
            type: 'checkbox',
            label: 'Centralized',
        },
        {
            name: 'public_notice',
            type: 'textarea',
            label: 'Public Notice',
        },
        {
            name: 'alert_notice',
            type: 'textarea',
            label: 'Alert Notice',
        },
        {
            name: 'trust_score',
            type: 'number',
            label: 'Trust Score',
        },
        {
            name: 'trust_score_rank',
            type: 'number',
            label: 'Trust Score Rank',
        },
        {
            name: 'trade_volume_24h_btc',
            type: 'number',
            label: 'Trade Volume 24h BTC',
        },
        {
            name: 'trade_volume_24h_btc_normalized',
            type: 'number',
            label: 'Trade Volume 24h BTC Normalized',
        },
    ],
    hooks: {
        beforeChange: [
            async ({ data, operation }) => {
                if (operation === 'create' || operation === 'update') {
                    if (data.name) {
                        const slug = convertToSlug(data.name);
                        data.slug = slug; // Đặt Slug từ name
                    }
                }
            },
        ],
    }
};

export default CustomExchange;
