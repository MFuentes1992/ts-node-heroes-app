import { DataTypes } from "sequelize";

export const heroModel = (sequelize: any) => {
    const hero = sequelize.define("Heroe", {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        superhero: {
            type: DataTypes.STRING,
            allowNull: false
        },
        publisher: {
            type: DataTypes.STRING,
            allowNull: false
        },
        alter_ego: {
            type: DataTypes.STRING,
            allowNull: false
        },
        first_appearance: {
            type: DataTypes.STRING,
            allowNull: false
        },
        characters: {
            type: DataTypes.STRING,
            allowNull: false
        },
        deleted: DataTypes.BOOLEAN
    });
    return hero;
}