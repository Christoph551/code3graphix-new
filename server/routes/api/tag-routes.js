const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint


// find all tags
// be sure to include its associated Product data

router.get('/', async (req, res) => {
    try {
        const tags = await Tag.findAll({
            include: [{ model: Product }]
        });
        res.status(200).json(tags);
    } catch (err) {
        res.status(500).json(err);
    }
});

// find a single tag by its `id`
// be sure to include its associated Product data

router.get('/:id', async (req, res) => {
    try {
        const singleTag = await Tag.findByPk(req.params.id, {
            include: [{ model: Product }]
        });

        if (!singleTag) {
            res.status(404).json({ message: 'No tag found with that id!' });
            return;
        }

        res.status(200).json(singleTag);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create a new tag
router.post('/', async (req, res) => {
    try {
        const newTag = await Tag.create(
            req.body,
        );
        res.status(200).json(newTag);
    } catch (err) {
        res.status(400).json(err);
    }
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
    try {
        const updateTag = await Tag.update(req.body,
            {
                where: {
                    id: req.params.id,
                }
            })

        if (!updateTag) {
            res.status(404).json('No Tag was found with this ID!')
        }

        res.status(200).json('Updated Tag Name!')

    } catch (err) {
        res.status(500).json(err);
    }
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
    try {
        const deleteTag = await Tag.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!deleteTag) {
            res.status(404).json({ message: 'No Tag found with that id!' });
            return;
        }

        res.status(200).json('You have successfully deleted a tag!');
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
