import React from "react";
import "./login_page.css"
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input, message } from 'antd';

const loginDetails = [{
    email : "someone@example.com",
    password : "admin135"
}];



export default function LoginPage () {
    const [messageApi, contextHolder] = message.useMessage();
    
    const navigate = useNavigate();

    //Correct information entered
    const onFinish = (values) => {
        console.log('Success:', values);
        
        //Login deatils check
        if (values.user.email == loginDetails[0].email && values.password == loginDetails[0].password){
            console.log("Login Successful!")
            navigate('/homepage');
    
            //......
        }
        else{
            error();
            console.log("Check your information again!");
        }
    
      };

      const error = () => {
        messageApi.open({
            type: 'error',
            content: 'Error!',
        });
    };


      // False information entered
      const onFinishFailed = (errorInfo) => {
        error();
        console.log('Failed:', errorInfo);
      };

    return (
        <div className="Login-main">
            {contextHolder}
            <span id="form-container">
                <Form
                    name="basic"
                    wrapperCol={{span: 24}}

                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off">

                    <label style={{paddingLeft: '0.2rem'}}htmlFor="">Email</label>
                    <Form.Item
                        name={['user', 'email']}
                        rules={[
                            {
                            required: true,
                            type: 'email',
                            message: 'Please input your e-mail!'
                            },
                        ]}
                        >
                    
                    <Input placeholder="someone@example.com"/>
                    </Form.Item>
                    
                    <label style={{paddingLeft: '0.2rem'}}htmlFor="">Password</label>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your password!',
                            },
                        ]}>
                        <Input.Password placeholder="admin135"/>
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 0,
                            span: 16,
                        }}>
                    
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </span>
        </div>
    );
}