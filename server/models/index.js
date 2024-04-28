const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const User = require('./User');

// Explore adding an Order model in order to track a particular user's purchase history.


// Products belongsTo User
Product.belongsTo(User);

// User have many Products
User.hasMany(Product);

// Products belongsTo Category
Product.belongsTo(Category);

// Categories have many Products
Category.hasMany(Product);

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
    through: {
        model: ProductTag
    }
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
    through: {
        model: ProductTag
    }
})

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
    User
};
