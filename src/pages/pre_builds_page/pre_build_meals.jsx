import './pre_build_meals.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';

import { Button, Card, Avatar } from 'antd';

const {Meta} = Card

const PreBuilds = () => {

    return(
        <div className='pre-builds-main-container'>
            <Navbar />
            <div className='pre-builds-page-container'>
                <div className='pre-build-container'>

                    <Card
                        style={{ width: 300, margin: '1rem' }}
                        cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                        }
                        
                    >
                        <Meta
                        title="Title"
                        />
                        <br /><br />
                        <Meta
                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                        title="Ingredients"
                        description="This is the description"
                        />
                        <br /><br />
                        <Meta
                        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                        title="Preperation"
                        description="This is the description"
                        />
                    </Card>

                    <Button type='primary'>Get Random Meal</Button>
                </div>
                

            </div>
            <Footer />
        </div>              
    )
}

export default PreBuilds;