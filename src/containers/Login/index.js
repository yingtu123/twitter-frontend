
import { Button,Form,Input,Dialog } from 'antd-mobile'
import './index.css';

const initialValues={
  username:'hahaha',
  password:'111111'
}

const Login = ()=>{

  const [form] = Form.useForm()
  const onSubmit = () => {
    const values = form.getFieldsValue()
    Dialog.alert({
      content: <pre>{JSON.stringify(values, null, 2)}</pre>,
    })
  }

  return (
    <div className="login"> 
      <Form form={form} layout='horizontal' mode='card' initialValues={initialValues}  
        footer={
          <Button block color='primary' onClick={onSubmit} >
            Submit
          </Button>
        }>
        <div>
        <Form.Item name='username' label='username'>
          <Input placeholder='Please enter username' />
        </Form.Item>
        </div>
        <div>
          <Form.Item name='password' label='password' >
          <Input placeholder='Please enter password' clearable type='password'/>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
export default Login;

