/** MODELO DE PRODUCTO */
module.exports = function(sequelize, DataTypes) {

    let alias = 'Product'

    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        product_name: {
            type: DataTypes.STRING(30),
            allowNull: true,
            unique: true
        },
        price: {
            type: DataTypes.SMALLINT,
            allowNull: true
        },
        discount: {
            type: DataTypes.SMALLINT,
            allowNull: true
        },
        product_description: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        ingredients: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        image: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        product_type: {
            type: DataTypes.STRING(10),
            allowNull: true
        },
        stock: {
            type: DataTypes.SMALLINT.UNSIGNED,
            allowNull: true
        }
    }

    let config = {
        timestamps: false,
        tablename: 'products'
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsToMany(models.User, {
            as: 'users',
            through: 'users_products',
            foreignKey: 'product_id',
            otherKey: 'user_id',
            timestamps: false
        })
    }
    
    return Product;
}