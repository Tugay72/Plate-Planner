import './homepage.css';

import Footer from '../../components/footer/footer'
import HomeCard from '../../components/home_cards/home_card';
import Navbar from '../../components/navbar/navbar';

import carousel1 from '../../assets/carousel1.jpg';
import carousel2 from '../../assets/carousel2.jpg';
import carousel3 from '../../assets/carousel3.webp';
import carousel4 from '../../assets/carousel4.jpg';

import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'antd';
import { FormOutlined, BookOutlined,AimOutlined } from '@ant-design/icons';




const Homepage = () => {

    const navigate = useNavigate();

    return(
        <div className='homepage'>
            <Navbar />
            <div className='carousel-conteiner'>
                <Carousel autoplay>
                    <div>
                        <img src={carousel1} alt="" />
                    </div>
                    <div>
                        <img src={carousel2} alt="" />
                    </div>
                    <div>
                        <img src={carousel3} alt="" />
                    </div>
                    <div>
                        <img src={carousel4} alt="" />
                    </div>
                </Carousel>
            </div>

            <div className='page-container'>
                <div className='description-container'>
                    <h1>Welcome to Plate Planner</h1>
                    <p>Discover a healthier, more informed way to plan your meals! Whether you're looking to create custom dishes or explore our pre-built meal options, Meal Master helps you track calories and nutritional information with ease. Stay on top of your dietary goals and enjoy delicious meals tailored to your preferences.</p>
                    <ul 
                        style={{
                            listStyleType: 'none'
                            }}>
                        
                        <li><FormOutlined /> <b>Create Your Own Meals:</b> Customize ingredients and portion sizes to fit your needs.</li>
                        <li><BookOutlined /> <b>Browse Pre-Built Meals:</b> Explore expertly crafted meals with detailed calorie counts.</li>
                        <li><AimOutlined /> <b>Track Your Nutrition:</b> View calorie breakdowns and macro information for each meal.</li>
                    </ul>
                </div>
                <div className='cards-container'>
                    <HomeCard 
                        title="Meal Preperation" 
                        description="With Plate Planner, you re in complete control of your meal creation. Select your preferred ingredients from our extensive library, customize portion sizes to suit your dietary needs, and see the nutritional information instantly. Whether you re managing macros for fitness goals or adjusting ingredients for a healthier option, Plate Planner empowers you to build meals that align perfectly with your lifestyle. No more guesswork get precise data for every ingredient you choose!"
                         buttons={[
                            { label: 'Start', onClick: () => navigate('/meal_prep') },
                        ]}
                    />
                    <HomeCard 
                        title="Pre-Built Meals" 
                        description="Need some inspiration? Our pre-built meal library is packed with a variety of expertly crafted meals, complete with detailed calorie counts and nutritional breakdowns. Whether you're looking for a quick breakfast, a balanced lunch, or a hearty dinner, you'll find meals that cater to different dietary preferences and goals. Each meal is designed by nutrition experts, ensuring a healthy balance of macros and delicious flavor. Perfect for those days when you want convenience without compromising on nutrition."
                         buttons={[
                            { label: 'Breakfast', onClick: () => navigate('/pre_builds') },
                            { label: 'Lunch', onClick: () => navigate('/pre_builds') },
                            { label: 'Dinner', onClick: () => navigate('/pre_builds') },
                            { label: 'Snacks', onClick: () => navigate('/pre_builds') }
                        ]}
                    />
                    <HomeCard 
                        title="Track Your Nutrition" 
                        description="Plate Planner takes the guesswork out of tracking your nutrition. For every meal you create or select, you'll receive a full nutritional breakdown, including calories, macronutrients (carbs, fats, and proteins), and other essential details. Easily monitor your intake to ensure you stay on track with your health goals, whether you're aiming to lose weight, gain muscle, or maintain a balanced diet. Our comprehensive tracking system makes it simple to keep an eye on what matters most for your nutrition."
                         buttons={[
                            { label: 'Calculate BMI', onClick: () => navigate('/bmi_calculator') },
                            { label: 'Calculate Nutritions', onClick: () => navigate('/nutritions_calculator') },
                        ]}
                    />
               </div>             
            </div>
            <Footer />
        </div>
    );
}

export default Homepage;