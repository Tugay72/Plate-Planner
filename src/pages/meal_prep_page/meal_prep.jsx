import './meal_prep.css';
import foodData from '../../data/food_and_calories.json'

import React, {useState, useEffect} from 'react';
import { Form, InputNumber, Button, Select, Empty, Descriptions , message } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';


const { Option } = Select;


const MealPrep = () => {
    const [foodItems, setFoodItems] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [totalCalories, setTotalCalories] = useState(0);

    // Load the data into state
    useEffect(() => {
        setFoodItems(foodData);
    }, []);

    // Submit ingredients
    const onFinish = async (values) => {
        setTotalCalories(0);
        const newSelectedIngredients = values.ingredients.map(item => {
        const foodItem = foodItems.find(food => food.FoodItem === item.ingredient);
            
            const calories = Math.round((parseInt(foodItem.Cals_per100grams) / 100 * item.gram));
            setTotalCalories((prevTotalCalories) => prevTotalCalories + calories);

            return {
                key: item.ingredient,
                FoodItem: item.ingredient,
                Grammage: item.gram,
                Calories: foodItem ? calories : null,
            };
        });

        setSelectedIngredients(newSelectedIngredients);
        message.success('Ingredients selected successfully!');
    };


    return(
        <div className='meal-prep-main-container'>
            <Navbar/>
            <div className='meal-prep-page-container'>
                <div className='ingredients-selection-container'>
                    <h1>Select Your Ingredients</h1>
                    <Form name="dynamic_form_nest_item" layout="vertical" autoComplete="off" onFinish={onFinish}>
                        <Form.List name="ingredients">
                            {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, fieldKey, ...restField }) => (
                                <div key={key} style={{ display: 'flex', marginBottom: 8 }}>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'ingredient']}
                                        fieldKey={[fieldKey, 'ingredient']}
                                        rules={[{ required: true, message: 'Missing ingredient' }]}
                                    >

                                        <Select 
                                            showSearch 
                                            placeholder="Select an ingredient" 
                                            style={{ width: 200 }}>

                                            {foodItems.map((item, index) => (
                                            <Option key={index} value={item.FoodItem}>
                                                {item.FoodItem}
                                            </Option>
                                            ))}
                                        </Select>
                                    </Form.Item>

                                    <Form.Item
                                        {...restField}
                                        name={[name, 'gram']}
                                        fieldKey={[fieldKey, 'gram']}
                                        rules={[{ required: true, message: 'Missing grammage' }]}
                                    >
                                        <InputNumber placeholder="Gram" min={1} style={{ marginLeft: 8 }} />
                                    </Form.Item>

                                    <MinusCircleOutlined
                                        style={{ 
                                            marginLeft: 12, 
                                            paddingBottom: 24
                                        }}
                                        onClick={() => remove(name)}
                                    />
                                </div>
                                ))}

                                <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    icon={<PlusOutlined />}
                                    style={{ width: '100%' }}
                                >
                                    Add Ingredient
                                </Button>
                                </Form.Item>
                            </>
                            )}
                        </Form.List>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                            Submit Ingredients
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className='ingredients-selection-container'>
                    <>
                    <h1>Selected Ingredients!</h1>
                        {selectedIngredients.length > 0 ? (
                            <>
                                <Descriptions 
                                    bordered 
                                    layout="vertical"
                                    style={{
                                        marginTop: '2rem',
                                    }}
                                >
                                    {selectedIngredients.map((ingredient, index) => (
                                        <Descriptions.Item 
                                            key={index} 
                                            label={ingredient.FoodItem} 
                                            style={{ 
                                                width: 140, 
                                                height: 70,
                                                padding: '0.5rem',
                                                
                                            }}>
                                            <div>Grams: {ingredient.Grammage}g</div>
                                            <div>Calories: {ingredient.Calories}</div>
                                        </Descriptions.Item>
                                ))}
                                </Descriptions>
                                <h3 style={{paddingTop: '2rem'}}>Total Calories: {totalCalories}</h3>
                            </>
                            ) : (
                            <>
                                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                            </>
                        )}
                    </>
                </div>
            </div>
            <Footer />          
        </div>        
    )
}

export default MealPrep;