import { DataTypes } from 'sequelize';
import { HeroModel } from './../ORM/sequelize';
import { v4 as uuidv4 } from 'uuid';
import HERO from '../utils/HeroObject';


//-- Create
export const Create = async ({superhero, publisher, alter_ego, first_appearance, characters}: HERO) => {
    const hero = {
        id: uuidv4(),
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
        deleted: 0
    };
    try {
        const _hero = await HeroModel.create(hero);
        return _hero;
    } catch (error) {
        console.log(error);
        return null;
    }
}

//-- Update
export const Update = async (hero: HERO) => {
    try {
        const result = await HeroModel.update(hero, {
            where: {
                id: hero.id
            }
        });
        return result;
    } catch (error) {
        console.log(error);
        return -1;
    }
}

//-- Delete
export const Delete = async (id:string) => {
    const result = await HeroModel.update({deleted: true}, {
        where: {
            id: id
        }
    });
    return result;
}

//-- Find By id
export const FindById = async (id:string) => {
    try {
        const heroe = await HeroModel.findOne({where: {id: id}});
        return heroe;
    } catch (error) {
        console.log(error);
        return null;
    }
}

//-- Find All
export const FindAll = async () => {
    const heroes = HeroModel.findAll({where: {deleted: 0}});
    return heroes;
}

//-- Find By Publisher

export const FindByPublisher = async (publisher: string) => {
    const heroes = HeroModel.findAll({where: {publisher: publisher}});
    return heroes;
}