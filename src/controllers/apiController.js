const db = require('../database/models');

const apiController = {
    users: function(req, res) {
        db.User.findAll()
            .then(users => {
                let response = {
                    count: users.length,
                    users: users.map(user => {
                        return {
                            id: user.id,
                            name: user.first_name,
                            email: user.email,
                            detail: `/api/users/${user.id}`
                        };
                    })
                };
                res.json(response);
            });
    },
    userDetail: function(req, res) {
        db.User.findByPk(req.params.id)
            .then(user => {
                let response = {
                    id: user.id,
                    name: user.first_name,
                    email: user.email,
                    image: `/images/users/${user.image}`
                };
                res.json(response);
            });
    },
    products: function(req, res) {
        db.Product.findAll()
            .then(products => {
                let response = {
                    count: products.length,
                    products: products.map(product => {
                        return {
                            id: product.id,
                            name: product.product_name,
                            description: product.product_description,
                            detail: `/api/products/${product.id}`
                        };
                    })
                };
                res.json(response);
            });
    },
    productDetail: function(req, res) {
        db.Product.findByPk(req.params.id)
            .then(product => {
                let response = {
                    id: product.id,
                    name: product.product_name,
                    description: product.product_description,
                    image: `/images/products/${product.image}`
                };
                res.json(response);
            });
    }
};

module.exports = apiController;
