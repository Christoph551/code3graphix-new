const { Tag } = require('../models');

// This file used to be tag-seeds.js
//This should be the data that'll reflect sizes of tumblers, etc...
const tagData = [
    {
        tag_name: '10 Ounce',
    },
    {
        tag_name: '20 Ounce',
    },
    {
        tag_name: '30 Ounce',
    },
    {
        tag_name: '32 Ounce',
    },
    {
        tag_name: '40 Ounce',
    },
    {
        tag_name: 'Black',
    },
    {
        tag_name: 'Blue',
    },
    {
        tag_name: 'Green',
    },
    {
        tag_name: 'Purple',
    },
    {
        tag_name: 'Red',
    },
    {
        tag_name: 'White',
    },
    {
        tag_name: 'Yellow',
    },
    {
        tag_name: 'Stainless Steel',
    },
    {
        tag_name: 'Custom'
    },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
