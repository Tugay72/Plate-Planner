import './pre_build_meals.css';
import mealsData from '../../data/Food Ingredients and Recipe Dataset with Image Name Mapping.json';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';


import React, { useState, useEffect } from 'react';
import { Button, Card, Avatar } from 'antd';

const { Meta } = Card;

const PreBuilds = () => {
    const [mealItems, setMealItems] = useState([]);
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [imageName, setImageName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [preparation, setPreparation] = useState('');
    

    useEffect(() => {
        setMealItems(mealsData);
    }, []);

    const getRandomMeal = () => {
        if (mealItems.length === 0) return;

        const randomNumber = Math.floor(Math.random() * mealItems.length);
        const randomMeal = mealItems[randomNumber];

        console.log(randomMeal.Ingredients)
        const formattedIngredients = randomMeal.Ingredients
            .replace(/[\[\]]/g, '')   // Remove square brackets, commas
            .replace(/',/g, '\'\n')     // Replace commas with newline characters
            .split('\n')             // Split the string into an array
            .map((ingredient, index) => (
                <div key={index}>{ingredient.trim()}</div> // Each ingredient in a new div
        ));

        console.log(formattedIngredients)

        setTitle(randomMeal.Title);
        setIngredients(formattedIngredients);
        setPreparation(randomMeal.Instructions);
        setImageName(randomMeal.Image_Name);

        try {
            const localImagePath = require(`../../data/Food Images/Food Images/${imageName}.jpg`);
            setImage(localImagePath);
        } catch (error) {
            setImage('')
            console.error("Image not found:", error);
        }
    };

    if (!title) {
        getRandomMeal()
    }

    return (
    <div className="pre-builds-main-container">
        <Navbar />
        <Button type="primary" onClick={getRandomMeal}>Get Random Meal</Button>
        
        <div className="pre-builds-page-container">
            <div className="pre-build-container">
                <h2>{title}</h2>
                <img
                    src={image}
                    width={274}
                    height={169}

                    style={{
                        border: '1px solid #b9b9b97a',
                        borderRadius: '1rem',
                        boxShadow : '0 4px 12px rgba(22, 22, 22, 0.3)'
                    }}
                />

                <Card>
                    <Meta
                        avatar={<Avatar src="https://api.dicebear.com/9.x/icons/svg?seed=Brooklynn" />}
                        title="Ingredients"
                        description={ingredients}
                    />
                </Card>
                <Card>
                    <Meta
                        avatar={<Avatar src="https://api.dicebear.com/9.x/icons/svg?seed=Amaya" />}
                        title="Preparation"
                        description={preparation}
                    />
                </Card>
            </div>
        </div>
        
        <Footer />
    </div>
);

};

export default PreBuilds;
