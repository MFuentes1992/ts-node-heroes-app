import express from 'express';
import { isRegularExpressionLiteral } from 'typescript';
import Controller from '../controllers';

const router = express.Router();

//-- status
router.get("/status", Controller.getStatus);

//-- New Heroe
router.post("/add", Controller.createHero);

//-- Update Hero
router.put("/update", Controller.updateHero);

//-- Delete Hero
router.delete("/delete/:id", Controller.deleteHero);

//-- Find Hero
router.get("/hero/:id", Controller.findHeroById);

//-- Find All
router.get("/heroes", Controller.findAllHeroes);

//-- Find By publisher
router.get("/heroes/:publisher", Controller.findHeroesByPublisher);

export default router;