import { Button, Checkbox, Form, Input, Tabs } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

function LoginForm() {
  return (
    <Form layout="vertical">
      <Form.Item label="Username">
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item label="Pwd">
        <Input.Password prefix={<LockOutlined />} />
      </Form.Item>
      <div className="flex justify-between">
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <a href="">Forgot password</a>
      </div>
      <div className="mt-10">
        <Button
          className="px-6 rounded-sm"
          size="large"
          type="primary"
          htmlType="submit"
          shape="default"
        >
          Log in
        </Button>
      </div>
    </Form>
  );
}

function SignUpForm() {
  return (
    <Form>
      <div>Testing</div>
    </Form>
  );
}

const items = [
  {
    key: '1',
    label: 'Login',
    children: <LoginForm />,
  },
  {
    key: '2',
    label: 'Sign up',
    children: <SignUpForm />,
  },
];

export function LoginPage() {
  return (
    <div className="h-dvh bg-slate-200">
      <div className="m-auto pt-14 w-96 flex flex-col gap-10">
        <div>
          <h1 className="text-4xl text-center mb-5">Antd Design</h1>
          <div className="text-center">
            Ant Design is the most influential web design specification in Xihu
            district
          </div>
        </div>

        <div>
          <Tabs defaultActiveKey="1" items={items} />
        </div>
      </div>
    </div>
  );
}
