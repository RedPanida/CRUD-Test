import React, {FC, useState, useEffect} from 'react'

import { Button, 
  Form, 
  Input, 
  Radio, 
  Col,
  Row,  
  Card,
} from 'antd'
import { 
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import type { RadioChangeEvent} from 'antd'

// const recordData = {
//   recordDetail: [
//     {
//       firstName: '',
//       lastName: '',
//       gender: '',
//       age: '',
//       phone:'',
//       address:'',
//     }
//   ],
//  }

const RecordForm: FC = () => {

  const [record, setRecord] = useState(
    {
      firstName: '',
      lastName: '',
      gender: '',
      age: '',
      phone:'',
      address:'',
    }
  );
  const [validate, setValidate] = useState(false);

  useEffect(() => {
    localStorage.setItem('showRecord', JSON.stringify(record));
  },[record])

  const [form] = Form.useForm();

  const onChangeFirstName = (e) => {
    const {name, value} = e.target
    setRecord((prevState) => {
      return {
      ...prevState,
        [name]: value
      }
    })
    console.log(name, value)
  }

  const onChangeLastName = (e) => {
    const {name, value} = e.target
    setRecord((prevState) => {
      return {
      ...prevState,
        [name]: value
      }
    })
    console.log(name, value)
  }

  const onChangeAge = (e) => {
    const {name, value} = e.target
    setRecord((prevState) => {
      return {
      ...prevState,
        [name]: value
      }
    })
    console.log(name, value)
  }

  const onChangeRadio = (e: RadioChangeEvent) => {
    const {name, value} = e.target
    setRecord((prevState) => {
      return {
      ...prevState,
        [name]: value
      }
    })
  }

  const onChangePhone = (e) => {
    const {name, value} = e.target
    setRecord((prevState) => {
      return {
      ...prevState,
        [name]: value
      }
    })
    console.log(name, value)
  }

  const onChangeAddress = (e) => {
    const {name, value} = e.target
    setRecord((prevState) => {
      return {
      ...prevState,
        [name]: value
      }
    })
    console.log(name, value)
  }

  const onReset = () => {
    form.resetFields();
  };

  // const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // setRecord('');
  // }

  const handleSubmit = () => {
    localStorage.getItem('showRecord')
  }

  return (
    <div>
      <Form
      form={form}
      name='control-hooks'
      style={{padding:20}}
      >
        <Form.Item>
          <Row style={{paddingLeft: 10, paddingRight: 10}}>
            <Col xl={11} xs={24}>
              <Form.Item
                label='First Name'
                name='First Name'
                rules={[{ required: true }]}
                >
                  <Input
                  name='firstName' 
                  type='text'
                  placeholder='Panida'
                  value={record.firstName} 
                  onChange={onChangeFirstName}
                  />
              </Form.Item>
            </Col>

            <Col xl={2} xs={0}></Col>

            <Col xl={11} xs={24}>
              <Form.Item
                name='Last Name' 
                label='Last Name'
                rules={[{ required: true }]}
                >
                <Input 
                  className='lastName'
                  name='lastName' 
                  type='text'
                  placeholder='Chanpen'
                  value={record.lastName} 
                  onChange={onChangeLastName}
                  />
                </Form.Item>
            </Col>
          </Row>

        </Form.Item>

        <Form.Item>
          <Row style={{paddingLeft: 10, paddingRight: 10}}>
            <Col xl={4} xs={12}>
              <Form.Item
              name='Gender' label='Gender' rules={[{ required: true }]}>
                <Radio.Group
                onChange={onChangeRadio}
                value={record.gender}
                name='gender'
                >
                  <Radio defaultChecked={true} 
                  value={'male'}
                  >
                    Male
                  </Radio>
                  <Radio 
                  value={'female'} 
                  >
                    Female
                    </Radio>
                </Radio.Group>
              </Form.Item>
            </Col>

            <Col xl={1} xs={0}></Col>

            <Col xl={9} xs={12} >
              <Form.Item
              name='Age' 
              label='Age'
              rules={[{ required: true }]}
              >
              <Input 
                className='age'
                name='age' 
                type='text'
                placeholder='20'
                value={record.age} 
                onChange={onChangeAge}
                />
              </Form.Item>
            </Col>
            
            <Col xl={1} xs={0}></Col>

            <Col xl={9} xs={24}>
              <Form.Item
              name='Phone' 
              label='Phone'
              rules={[{ required: true }]}
              >
                <Input 
                  className='phone'
                  name='phone' 
                  type='text'
                  placeholder='068-456-1234'
                  value={record.phone} 
                  onChange={onChangePhone}
                  />
              </Form.Item>
            </Col> 
          </Row>
        </Form.Item>

       <Form.Item>
         <Row style={{paddingLeft: 10, paddingRight: 10}}>
            <Col xl={24} xs={24}>
            <Form.Item
              name='Address' 
              label='Address'
              rules={[{ required: true }]}              
              >
                <Input.TextArea rows={5} placeholder='637 Ratchaphruek Rd, Bangkok'
                onChange={onChangeAddress}
                name='address'/>
              </Form.Item>
            </Col>
          </Row>
       </Form.Item>
       
      </Form>

      <div style={{padding: 20}}>
        <div style={{paddingLeft: 10, paddingRight: 10, display: 'flex', justifyContent:'right'}}>
          <Button 
            type='primary' 
            htmlType='submit'
            style={{marginRight: 10}}
            onClick={handleSubmit}
            >
              Submit
            </Button>
          
            <Button onClick={onReset}> 
              Reset 
            </Button>       
        </div>
      </div>

      <hr style={{marginLeft: 15, marginRight: 15}}/>
      
      <div>
         <Row gutter={16} style={{padding: 30}}>
          <Col xl={8} xs={24}>
            <Card title="Record">
            <p>First Name : {record.firstName} </p>
            <p>Last Name : {record.lastName} </p>
            <p>Gender : {record.gender}</p>
            <p>Age : {record.age} </p>
            <p>Phone : {record.phone} </p>
            <p>Address : {record.address} </p>

            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
              <Button type='primary' style={{height:40, marginRight:10,}}><EditOutlined /></Button>
              <Button danger style={{height:40}}><DeleteOutlined /></Button>
            </div>
            
            </Card>
          </Col>
        </Row>
      </div>
     
    </div>
  )
}

export default RecordForm
