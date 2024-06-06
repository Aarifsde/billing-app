import { Menu } from "antd"


const Sidebar = () => {
  return (

    <div className="Sidebar">
      <div className="side-main">
      <Menu items={[
          {
            label:"Sales",
            key:'sub1',
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
            label: 'Purchase'
          },
          {
            label: 'Quotations'
          },
          {
            label: 'Expenses'
          },
          {
            label: 'Import bank Statement'
          },
          {
            label: 'Customer'
          },
          {
            label: 'People'
          },
          {
            label: 'Product'
          }
        ]} mode="inline" 
        defaultOpenKeys={['sub1']}
        ></Menu>
      </div>

        <div>
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
    </div>
  )
}

export default Sidebar
