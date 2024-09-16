import {
  SearchOutlined,
  QuestionCircleOutlined,
  BellOutlined,
  TransactionOutlined,
  DashboardOutlined,
  FormOutlined,
  TableOutlined,
  ProfileOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  UserOutlined,
  HighlightOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

import type { MenuProps } from 'antd';
import { Image, Menu } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
export function BasicFormPage() {
  const items: MenuItem[] = [
    {
      key: '1',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
      children: [],
    },
    {
      key: '2',
      icon: <FormOutlined />,
      label: 'Form',
      children: [
        { key: '11', label: 'Basic form' },
        { key: '12', label: 'Step form' },
        { key: '13', label: 'Avandced form' },
      ],
    },
    {
      key: '3',
      icon: <TableOutlined />,
      label: 'List',
      children: [],
    },
    {
      key: '4',
      icon: <ProfileOutlined />,
      label: 'Profile',
      children: [],
    },
    {
      key: '5',
      icon: <CheckCircleOutlined />,
      label: 'Result',
      children: [],
    },
    {
      key: '6',
      icon: <WarningOutlined />,
      label: 'Exception',
      children: [],
    },
    {
      key: '7',
      icon: <UserOutlined />,
      label: 'Account',
      children: [],
    },
    {
      key: '8',
      icon: <HighlightOutlined />,
      label: 'Graphic Editor',
      children: [],
    },
  ];
  const item2: MenuItem[] = [
    {
      key: '1',
      icon: <MenuFoldOutlined />,
    },
  ];
  return (
    <div className="h-dvh">
      <div className="flex justify-between bg-slate-900">
        <div className="text-white ml-5 flex gap-1">
          <Image
            width={20}
            src="https://static-00.iconduck.com/assets.00/ant-design-icon-2048x2046-dl3neb73.png"
          />
          Ant Design Pro
        </div>
        <div className="text-white mr-10  flex gap-2">
          <SearchOutlined />
          <QuestionCircleOutlined />
          <BellOutlined />

          <Image
            className="rounded-md"
            width={20}
            src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/128982339_4244745908874696_2654069701466838145_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=VU8aBXecEp8Q7kNvgFmJZKo&_nc_ht=scontent.fsgn5-11.fna&oh=00_AYB7jTumAdPnlhLXtSyrdkPEdjDtz3nAjX9bZDjm732cAA&oe=670FA9F9"
          />
          <label className="text-xs">Hoang Truong</label>
          <TransactionOutlined />
        </div>
      </div>
      <div className="flex ">
        <div className="flex flex-col ">
          <div className="w-36 min-h-96">
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="white"
              items={items}
            />
          </div>
          <div className="pt-96 mt-14">
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="white"
              items={item2}
            />
          </div>
        </div>
        <div className="flex-1 ">aaaaaaaaaaaaaaa</div>
      </div>
    </div>
  );
}
