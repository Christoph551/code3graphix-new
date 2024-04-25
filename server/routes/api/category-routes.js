const router = require('express').Router();
const { Category, Product, Tag } = require('../../models');

// The `/api/categories` endpoint

// GET request to show data for all categories in the db
router.get('/', async (req, res) => {
    try {
        const categories = await Category.findAll({
            include: [{ model: Product, include: [{ model: Tag }] }]
        });
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET request to show data for a specific Category
router.get('/:id', async (req, res) => {
    try {
        const singleCat = await Category.findByPk(req.params.id, {
            include: { model: Product },
        });

        if (!singleCat) {
            res.status(404).json({ message: 'No category found with that id!' });
            return;
        }

        res.status(200).json(singleCat);
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST method used to create a new Category
router.post('/', async (req, res) => {
    try {
        const newCat = await Category.create(
            req.body,
        );
        res.status(200).json(newCat);
    } catch (err) {
        res.status(400).json(err);
    }
});

// PUT method used to update a Category name
router.put('/:id', async (req, res) => {
    try {
        const updateCat = await Category.update(req.body,
            {
                where: {
                    id: req.params.id,
                }
            })

        if (!updateCat) {
            res.status(404).json('No category was found with this ID!')
        }

        res.status(200).json('Updated Category Name!')

    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE method used to delete a particular category
router.delete('/:id', async (req, res) => {
    try {
        const deleteCat = await Category.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!deleteCat) {
            res.status(404).json('No category found with that id!');
            return;
        }

        res.status(200).json('You have successfully deleted a category!');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
