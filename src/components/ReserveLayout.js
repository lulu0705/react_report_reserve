import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Form, Button, Checkbox, Input,Select, Segmented, DatePickerProps,DatePicker, Space } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import Cookie from "js-cookie"

import { useReserve } from "../react-query";

// const formItemLayout = {
//   labelCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 8,
//     },
//   },
//   wrapperCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 16,
//     },
//   },
// };
// const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0,
//     },
//     sm: {
//       span: 24,
//       offset: 0,
//     },
//   },
// };

const ReserveLayout = ({ product, redirect }) => {
    const [nameValue, setNameValue] = useState('')
    const [phoneValue, setPhoneValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [countyValue, setCountyValue] = useState('')
    const [addrValue, setAddrValue] = useState('')
    const [areaValue, setAreaValue] = useState('')
    const [timeValue, setTimeValue] = useState('')
    const [reserve_dateValue, setReserve_dateValue] = useState('')
    const [product_idValue, serProduct_idValue] = useState('')

    const [spend, setSpend] = useState(1);

  const { mutate, error, isLoading, isError, isSuccess, data } = useReserve();

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    values.product_id = product.id;
    // values.time = 1;
    console.log("Received values of form: ", values);
    console.log(values.product_id)
    mutate(values);
    navigate('/ResultPage');
  };

  // useEffect(() => {
  //   if (isSuccess) {
  //     Cookie.set("userInfo", JSON.stringify(data?.data));
  //     navigate(redirect);
  //   }
  // }, [isSuccess, redirect]); 

  return (
    <div className="row justify-content-center ReserveLayout">
        <div className="col-xl-10">
            
            <div className="card border-0">
            <div className="col-lg-8 reserve-header">
                <h1 className="align-center reserve-title">????????????</h1>
                <p className="align-center reserve-subtitle">
                ??????????????????????????????????????????????????????FML??????????????????????????????????????????????????????/????????????14????????????????????????????????????????????????/????????????????????????<br/><br/>
                ????????????????????????????????????????????????????????????????????????????????????
                </p>

            </div>
            <div className="card-body p-0">

            {/* ??????????????????????????? ??? */}
            <div className="row no-gutters">


    <Form
    //   {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      className="register-form"
      scrollToFirstError
    >

    {/* ???????????? */}
    <div className="align-center">
        <h3 className="h4 font-weight-bold">??? ???????????? ???</h3>
    </div>


    <span className="reserve-form">
    <div className="col-lg-5">
    <div className="left-layout">


      <Form.Item
        name="name"
        label="??????"
        // tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your name!",
            whitespace: true,
            
          },
        ]}
      >
        <Input className="form-control"/>
      </Form.Item>
      </div>
    </div>


    <div className="col-lg-5 ">
    <div className="right-layout">

      <Form.Item
        name="phone"
        label="????????????"
        // tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your phone!",
            whitespace: true,
          },
        ]}
      >
        <Input className="form-control" style={{  width: '15em', }}/>
      </Form.Item>
      

      </div> 
    </div>
    </span>


    <span className="reserve-form">
    <div className="col-lg-10">
    <div className="email-layout">

      <Form.Item
        name="email"
        label="????????????"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input className="form-control" style={{  width: '42em', }}/>
      </Form.Item>

      </div>
    </div>
    </span>



    {/* ???????????? */}
    <div className="align-center">
        <h3 className="h4 font-weight-bold">??? ???????????? ???</h3>
    </div>


    <span className="reserve-form">
    <div className="col-lg-5">
    <div className="left-layout">

      <Form.Item
        name="county"
        label="????????????"
        // tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your county!",
            whitespace: true,
          },
        ]}
      >
      <Select
        style={{
            width: 160,
        }}
        options={[
            {
            value: '?????????',
            label: '?????????',
            },
            {
            value: '?????????',
            label: '?????????',
            },
            {
            value: '?????????',
            label: '?????????',
            },
            {
            value: '?????????',
            label: '?????????',
            },
            {
            value: '?????????',
            label: '?????????',
            },
            {
            value: '?????????',
            label: '?????????',
            },
        ]}
      />

        {/* <Input className="form-control"/> */}
        {/* <select className="form-select form-control" aria-label="Default select example">
            <option selected>???????????????</option>
            <option value="1">?????????</option>
            <option value="2">?????????</option>
            <option value="3">?????????</option>
            <option value="4">?????????</option>
            <option value="5">?????????</option>
            <option value="6">?????????</option>
        </select> */}
      </Form.Item>



      {/* <Form.Item
        name="category"
        label="?????????????????????"

      >
        <Input value={product.category} className="form-control" disabled={true}/> 
      </Form.Item> */}

      <Form.Item
        name="area"
        className="label-test"
        label="????????????"
        // tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your area!",
            whitespace: true,
          },
        ]}
      >
        <Input className="form-control"  placeholder={product.hour} onChange={(e)=>{setSpend(e.target.value)}}/>
        {/* ??????onChange */}
      </Form.Item>


      {/* <Form.Item
        name="reserve_date"
        className="label-test"
        label="????????????"
        rules={[
          {
            required: true,
            message: "Please input your reserve_date!",
            whitespace: true,
          },
        ]}
      >
        <Input className="form-control"/>
      </Form.Item> */}

      </div>
    </div>

    <div className="col-lg-5 ">
    <div className="right-layout">

      <Form.Item
        name="addr"
        label="????????????"
        // tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your addr!",
            whitespace: true,
          },
        ]}
      >
        <Input className="form-control" style={{  width: '15em', }}/>
      </Form.Item>


      {/* <Form.Item label="??????????????????">
        <Input className="form-control" value={product.name} disabled={true}/> 
      </Form.Item> */}

      {/* <label>????????????{product.hour}??????.???.???</label> */}
      <Form.Item
        name="reserve_date"
        className="label-test"
        label="????????????"
        rules={[
          {
            required: true,
            message: "Please input your reserve_date!",
            whitespace: true,
          },
        ]}
      >
        <Input className="form-control" style={{  width: '15em', }}/>
      </Form.Item>
      {/* <Form.Item
        name="time"
        className="label-test"
        label="&nbsp;&nbsp;&nbsp;????????????"
        rules={[
          {
            required: false,
            message: "Please input your time!",
            whitespace: true,
          },
        ]}
      >
        <Input className="form-control" onChange={(e)=>{setSpend(e.target.value)}}/>
      </Form.Item> */}


      {/* <Form.Item
        name="product_id"
        label="????????????"
        rules={[
          {
            required: true,
            message: "Please input your id!",
            whitespace: true,
          },
        ]}
      >
        <Input className="form-control"  />
      </Form.Item> */}
    {/* <div className="form-group">
        <label for="exampleInputPassword1"></label>
    </div> */}




{/* 
      <Form.Item
        name="total"
        label="????????????"
        rules={[
          {
            required: true,
            message: "Please input your time!",
            whitespace: true,
          },
        ]}
      >
        <Input className="form-control"/>
        ??????NT${product.price * spend}?????????label?????? 
      </Form.Item>
*/}
      </div> 
    </div>
    </span>
      {/* <div className="form-group label-test total-layout">
        <label for="exampleInputPassword1">???????????????</label>
        <label for="exampleInputPassword1">NT${product.price * spend}???</label>
    </div> */}

      {/* <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="rePassword"
        label="Re-enter Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please re-enter your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <Link to={"/"}>agreement</Link>
        </Checkbox>
      </Form.Item> */}

<br/>
<span className="reserve-form">
    <div className="col-lg-10">
    <div className="left-layout">
    <div className="form-group label-test total-layout">
        <p>??? ??????????????????<strong>???{product.company} - {product.name}???</strong>??????</p>
        <label>??? ???????????????</label>
        <label>NT${product.price * spend}???</label>
        {/* <input type="text" className="form-control" id="exampleInputEmail1" placeholder="???"/> */}
    </div>
    </div></div></span>
    <span className="reserve-form">
    <div className="col-lg-10">
    <div className="center-layout">

      <Form.Item 
    //   {...tailFormItemLayout}
      >
        
          <Button
            type="primary"
            className="btn btn-primary btn-block confirm-button"
            htmlType="submit"
          >
            ????????????
          </Button>
        
      </Form.Item>
    
    </div></div></span>
    </Form>
    </div>

            </div>
            </div>

            <p className="text-muted text-center mt-3 mb-0"></p>

        </div>
    </div>

  );
};
export default ReserveLayout;