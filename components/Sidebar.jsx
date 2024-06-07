import { BankOutlined, FolderOpenOutlined, FormOutlined, MonitorOutlined, ProductOutlined, ShoppingCartOutlined, UserOutlined, UsergroupAddOutlined } from "@ant-design/icons"
import { Menu, Space } from "antd"


const Sidebar = () => {
  return (

    <div className="Sidebar">
      <Space>
      <Menu items={[
          {
            label:"Sales",
            key:'sub1',
            icon: <ProductOutlined />,
            children:[
              {
                label:'Product'
              },
              {
                label: 'Service'
              }
            ]
          },
          {
            label: 'Purchase',
            icon: <ShoppingCartOutlined />,
          },
          {
            label: 'Quotations',
            icon: <FolderOpenOutlined />,
          },
          {
            label: 'Expenses',
            icon: <MonitorOutlined />,
          },
          {
            label: 'Import bank Statement',
            icon: <BankOutlined />,
          },
          {
            label: 'Customer',
            icon: <UserOutlined />,
          },
          {
            label: 'People',
            icon: <UsergroupAddOutlined />,
          },
          {
            label: 'Product',
            icon: <FormOutlined />,
          }
        ]} mode="inline" 
        defaultOpenKeys={['sub1']}
        style={{width:256, height:700}}
        ></Menu>
      </Space>



        <div className="sidebarCard">
            <p>More templates, more Flexibility and premium support!</p>
            <button>Upgrade Now</button>
        </div>

        <div className="userDetails">
            <img src="https://plus.unsplash.com/premium_photo-1669223464455-26df96c59901?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" />
            <div className="user">
                <p>aarif.webdev@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
