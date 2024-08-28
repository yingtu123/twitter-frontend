import {
  Button,
  Form,
  Input,
  Dialog,
} from 'antd-mobile';
import './index.css';
import { loginService } from '../../services/login';

const initialValues = {
  username: 'hahaha',
  password: '111111',
};

const Login = () => {
  const [form] = Form.useForm();

  const onSubmit = async () => {
    const values = form.getFieldsValue();
    if (!values.username || !values.password) {
      Dialog.alert({
        content: 'Please enter both username and password.',
      });
      return;
    }
    const res = await loginService(values.username, values.password);
    if (res && res.length > 0) {
      Dialog.alert({
        content: 'login success',
      });
      return;
    }
    Dialog.alert({
      content: 'login failed',
    });
  };

  return (
    <div className="login">
      <Form
        form={form}
        layout="horizontal"
        mode="card"
        initialValues={initialValues}
        footer={(
          <Button block color="primary" onClick={onSubmit}>
            Submit
          </Button>
        )}
      >
        <div>
          <Form.Item name="username" label="username">
            <Input placeholder="Please enter username" clearable />
          </Form.Item>
        </div>
        <div>
          <Form.Item name="password" label="password">
            <Input placeholder="Please enter password" clearable type="password" />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default Login;
