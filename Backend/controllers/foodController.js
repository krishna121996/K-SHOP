import foodModel from "../models/foodModel.js";
import fs from 'fs';


//add food item

export const addFood = async (req, resp) => {
    let image_filename = `${req.file.filename}`
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
    })
    try {
        await food.save();
        resp.json({ success: true, message: "Food Success" })
    } catch (error) {
        console.log(error)
        resp.json({ success: false, message: error })
    }
}

// List the food details

export const listFood = async (req, resp) => {
   try {
       const foods = await foodModel.find({});
       resp.json({success: true, foodList: foods})
   } catch (error) {
       resp.json({ success: false, message: error })
   }
}

// Delete the food

export const deleteFood = async (req, resp) => {
    try {
        const foods = await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${foods.image}`, () =>{})

        const foodArray = await foodModel.findByIdAndDelete(req.body.id)
        resp.json({success: true, data: foodArray})
    } catch (error) {
        console.log('errrrr', error)
        resp.json({success: false, data: [], err: error})

    }
}

