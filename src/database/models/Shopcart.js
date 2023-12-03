/** MODELO DE CARRITO DE COMPRAS */
module.exports = function(sequelize, DataTypes) {

    let alias = 'Shopcart';

    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        owner: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        items_total: {
            type: DataTypes.SMALLINT.UNSIGNED,
            allowNull: true
        },
        price_total: {
            type: DataTypes.SMALLINT.UNSIGNED,
            allowNull: true
        },
        user_id: {
            type: DataTypes.SMALLINT.UNSIGNED,
            references: {
                model: 'User',
                key: 'id'
            }
        }
    }

    let config = {
        timestamps: false,
        tablename: 'shopcart'
    }

    const Shopcart = sequelize.define(alias, cols, config);

    Shopcart.associate = function(models) {
        Shopcart.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        })
    }
    
    return Shopcart;
}