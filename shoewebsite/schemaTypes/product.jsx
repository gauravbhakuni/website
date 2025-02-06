import { title } from "process";

export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Product Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'tagline',
            title: 'Product Tagline',
            type: 'string',
            description: 'A catchy short description (e.g., "Ultimate Comfort for Everyday Runners")'
        },
        {
            name: 'description',
            title: 'Product Description',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Detailed product description with rich text formatting'
        },
        {
            name: 'price',
            title: 'Product Price',
            type: 'number',
            validation: Rule => Rule.required().positive()
        },
        {
            name: 'originalPrice',
            title: 'Original Price (Optional)',
            type: 'number',
            description: 'Original price before discount'
        },
        {
            name: 'images',
            title: 'Product Images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true
                    },
                    fields: [
                        {
                            name: 'alt',
                            title: 'Alt Text',
                            type: 'string',
                            options: {
                                isHighlighted: true
                            }
                        }
                    ]
                }
            ],
            validation: Rule => Rule.required().min(1)
        },
        {
            name: 'sizes',
            title: 'Available Sizes',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'size',
                            title: 'Size (UK)',
                            type: 'number'
                        },
                        {
                            name: 'inStock',
                            title: 'In Stock',
                            type: 'boolean',
                            initialValue: true
                        },
                        {
                            name: 'quantity',
                            title: 'Quantity Available',
                            type: 'number'
                        }
                    ]
                }
            ]
        },
        {
            name: 'features',
            title: 'Product Features',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Feature Title',
                            type: 'string'
                        },
                        {
                            name: 'description',
                            title: 'Feature Description',
                            type: 'string'
                        }
                    ]
                }
            ]
        },
        {
            name: 'specifications',
            title: 'Product Specifications',
            type: 'object',
            fields: [
                {
                    name: 'material',
                    title: 'Material',
                    type: 'string'
                },
                {
                    name: 'color',
                    title: 'Color',
                    type: 'string'
                },
                {
                    name: 'weight',
                    title: 'Weight (in grams)',
                    type: 'number'
                },
                {
                    name: 'style',
                    title: 'Style',
                    type: 'string'
                }
            ]
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
            validation: Rule => Rule.required()
        },
        {
            name: 'isNewArrival',
            title: 'New Arrival',
            type: 'boolean',
            initialValue: false
        },
        {
            name: 'isPopular',
            title: 'Popular Product',
            type: 'boolean',
            initialValue: false
        },
        {
            name: 'rating',
            title: 'Product Rating',
            type: 'object',
            fields: [
                {
                    name: 'average',
                    title: 'Average Rating',
                    type: 'number',
                    validation: Rule => Rule.min(0).max(5)
                },
                {
                    name: 'count',
                    title: 'Number of Ratings',
                    type: 'number',
                    initialValue: 0
                }
            ]
        },
        {
            name: 'slug',
            title: 'Product Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'price_id',
            title: 'Stripe Product Price ID',
            type: 'string',
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'object',
            fields: [
                {
                    name: 'metaTitle',
                    title: 'Meta Title',
                    type: 'string'
                },
                {
                    name: 'metaDescription',
                    title: 'Meta Description',
                    type: 'text'
                },
                {
                    name: 'keywords',
                    title: 'Keywords',
                    type: 'array',
                    of: [{ type: 'string' }]
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'tagline',
            media: 'images.0'
        }
    }
}