import { ArrowLeftOutlined, CalendarOutlined, DeleteOutlined, InboxOutlined, PlusOutlined, ProductOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Input, InputNumber, Space, Table, Typography } from "antd"
import Dragger from "antd/es/upload/Dragger"
import End from "./End";




const Hero = () => {

  const dataSource = [
    {
      key: '1',
      name: 'Test1',
      quantity: <InputNumber min={1} max={100} defaultValue={4} />,
      unit: <InputNumber min={1} max={100000} defaultValue={2300} />,
      discount: <InputNumber />,
      amount: <Input variant="borderless" defaultValue={11500.00}/>,
      del: <DeleteOutlined />,
    },
    {
      key: '2',
      name: 'Test2',
      quantity: <InputNumber min={1} max={100} defaultValue={4} />,
      unit: <InputNumber min={1} max={100000} defaultValue={2300} />,
      discount: <InputNumber />,
      amount: <Input variant="borderless" defaultValue={11500.00}/>,
      del: <DeleteOutlined/>,
    },
  ];
  
  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Unit Price',
      dataIndex: 'unit',
      key: 'unit',
    },
    {
      title: 'Discount(Total Amount)',
      dataIndex: 'discount',
      key: 'discount',
    },
    {
      title: 'Net Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: '',
      dataIndex: 'del',
      key: 'del',
    },
  ];
  return (
    <div className="main-hero">
      <h3> <ArrowLeftOutlined style={{margin: 25}}/>Create invoice</h3>
      <Typography>Add Company logo</Typography>
      <Dragger>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Max. file size 5MB</p>
    <p className="ant-upload-hint">
      Drag & Drop your File or <span className="span1">Browse</span>.
    </p>
  </Dragger>

  <h3> <UserOutlined style={{margin: 25}} /> Customer Details</h3>
  <div className="hero-flex1">
    <Space direction="vertical" style={{margin:10}}>
    <Typography>Customer name</Typography>
    <Input style={{width:350}} placeholder="default size" prefix={<SearchOutlined />} />
    </Space>

    <Space direction="vertical" style={{margin:10}}>
    <Typography>Invoice</Typography>
    <Input style={{width:180}} placeholder="default size" />
    </Space>

    <Space direction="vertical" style={{margin:10}}>
    <Typography>Order Number</Typography>
    <Input style={{width:180}} placeholder="default size" />
    </Space>

    <Space direction="vertical" style={{margin:10}}>
    <Typography>Invoice Date</Typography>
    <Input style={{width:180}} placeholder="default size" suffix={<CalendarOutlined />} />
    </Space>

    <Space direction="vertical" style={{margin:10}}>
    <Typography>Due Date</Typography>
    <Input style={{width:180}} placeholder="default size" suffix={<CalendarOutlined />} />
    </Space>
  </div>

  <h3> <ProductOutlined style={{margin: 25}} />Product Details</h3>
  <div className="hero-flex1">
  <Space direction="vertical" style={{margin:10}}>
  <Typography>Select Products</Typography>
  <Input style={{width:300}} placeholder="Basic usage" />
  </Space>

  <Space direction="vertical" style={{margin:10}}>
  <Typography>Quantity</Typography>
  <InputNumber min={1} max={10} defaultValue={3} />
  </Space>

  <Space direction="vertical" style={{margin:10}}>
  <Typography>Billing</Typography>
        <Button type="primary" icon={<PlusOutlined />}>
          Add to Bill
        </Button>
  </Space>
  </div>

  <Table dataSource={dataSource} columns={columns} pagination={false} />

  <h4>Apply discount(%) to all items? </h4>
  <InputNumber min={1} max={10} defaultValue={5} />

  <End/>

  <Space className="mar-end">
  <Button className="btn0">Save</Button>
  <Button className="btn1" type="primary">Save & Send</Button>
  </Space>
    </div>
  )
}

export default Hero
