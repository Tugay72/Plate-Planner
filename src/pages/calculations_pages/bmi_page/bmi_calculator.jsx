import './bmi_calculator.css';
import React, {useState} from 'react';

import Navbar from '../../../components/navbar/navbar';
import Footer from '../../../components/footer/footer';

import { Form, InputNumber, Button, message } from 'antd';



const BmiCalculator = () => {

    const [bmi, setBmi] = useState(0);
    const [bmiStatus, setBmiStatus] = useState('');

    const getBmiCategory = (bmiValue) => {
        if (bmiValue < 18.5) return 'Underweight';
        if (bmiValue >= 18.5 && bmiValue <= 24.9) return 'Normal weight';
        if (bmiValue >= 25 && bmiValue <= 29.9) return 'Overweight';
        return 'Obesity';
    };

    const onFinish = (values) => {
        const { weight, height } = values;
        const bmiValue = weight / ((height / 100) ** 2);
        setBmi(bmiValue.toFixed(2));

        const category = getBmiCategory(bmiValue);
        setBmiStatus(category);

        message.success(`Your BMI is: ${bmiValue.toFixed(2)} (${category})`);
    }

    return(
        <div className='bmi-calculator-main-container'>
            <Navbar />
            <div className='bmi-calculator-page-container'>
                <div className='calculation-container'>
                    <h1>BMI Calculator</h1>

                    <Form name="dynamic_form_nest_item" layout="vertical" autoComplete="off" onFinish={onFinish}>
                        <Form.Item label="Age" name='age' rules={[{ required: true, message: 'Missing age' }]}>
                            <InputNumber></InputNumber>
                        </Form.Item>

                        <Form.Item label="Weight (Kg)" name='weight' rules={[{ required: true, message: 'Missing weight' }]}>
                            <InputNumber></InputNumber>
                        </Form.Item>

                        <Form.Item label="Height (Cm)" name='height' rules={[{ required: true, message: 'Missing height' }]}>
                            <InputNumber></InputNumber>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{ width: '100%', marginTop: '3rem' }}>
                            Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                

            </div>
            <Footer />
        </div>        
    )
}

export default BmiCalculator;