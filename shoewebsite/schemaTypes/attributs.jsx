export default {
    name: 'attribute',
    title: 'Attributes',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Attribute Name',
        type: 'string',
      },
      {
        name: 'options',
        title: 'Options',
        type: 'array',
        of: [{ type: 'string' }],
      },
    ],
  };
  