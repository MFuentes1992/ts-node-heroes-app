import { validateLocaleAndSetLanguage } from 'typescript';
import HERO from '../utils/HeroObject';
import { Create, Delete, Update, FindById, FindAll, FindByPublisher } from './../service/index';
export default class Controller {
    static getStatus (req: any, res: any) {
        res.json({status: "online"})
    }

    //-- Create a new hero
    static async createHero(req: any, res: any) {
        //-- Validate empty object
        if(Object.keys(req.body).length !== 0){
            const result = await Create(req.body);
            if(result != null){
                res.json({message: "Hero created!", id: result.dataValues.id, code: 200});                 
            }else{
                res.json({error: "something bad happened...", code: 500});
            }
            
        }else{
            res.json({error: "Empty object not allowed.", code: 501});
        }                       
    }

    //-- Update Hero
    static async updateHero(req: any, res: any) {
        const result = await Update(req.body);
        console.log("Update result", result[0]);
        if(result[0]){
            res.json({message:"Hero updated.", code: 200});
        }else{
            res.json({error:"Something bad happened...", code: 500});
        }
        
    }

    //-- Delete Hero
    static async deleteHero(req: any, res: any){
        const result = await Delete(req.params.id);
        if(result[0]){
            res.json({message:"Hero deleted.", code: 200});
        }else{
            res.json({error:"Something bad happened...", code: 500});
        }
    }

    //-- Find Hero By ID
    static async findHeroById(req: any, res: any){
        const result = await FindById(req.params.id);  
        
        if(result === null){
            res.json({error:"Something bad happened...", code: 500});
        }else{
            res.json(result);
        }
    }

    //-- Find All
    static async findAllHeroes(req: any, res: any){
        const result = await FindAll();
        res.json(result);
    }

    //-- Find By Publisher
    static async findHeroesByPublisher(req: any, res: any){
        const result = await FindByPublisher(req.params.publisher);        
        res.json(result);
    }
}