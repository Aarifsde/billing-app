import { ArrowLeftOutlined, BellOutlined, DownOutlined, SettingOutlined } from "@ant-design/icons"
import { Badge, Space} from "antd"


const Header = () => {
  return (
    <div className="Header">
        <div className="logo">
            <p>B</p>
            <h3 className="mar">Billing Web App</h3>
            <Space>
            <ArrowLeftOutlined style={{margin: 25}}/>
            </Space>
            <h3>Sales</h3>
        </div>
 
      <div className="sales">
        <Space style={{margin: 40}}>
            <Badge count={2} dot>
            <BellOutlined />
            </Badge>
        <SettingOutlined style={{margin: 20}}/>
        </Space>
            <p style={{color:'black', backgroundColor:"whitesmoke"}}>S</p>
            <h5>Silico design</h5>
            <DownOutlined style={{margin: 15}}/>
      </div>
    </div>
  )
}

export default Header
