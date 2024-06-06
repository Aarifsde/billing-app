import { InputNumber } from "antd"
import TextArea from "antd/es/input/TextArea"


const End = () => {

  return (
    <div className="end-main">
        <div>
        <h3>Customers Notes</h3>
      <TextArea rows={4} style={{width:500}}/>
      <h3>Terms & Conditions</h3>
      <TextArea rows={4} style={{width:500}} defaultValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque commodi deleniti ab fugit voluptate nihil illo nisi reprehenderit eos! Quasi recusandae quas quam. At porro, fugiat corrupti consectetur ad aspernatur."/>
        </div>
        <div className="end-block">
            <div className="sub">
                <h3>Sub Total</h3>
                <p>23000.00</p>
            </div>
            <div className="dis">
                <h3>Discount</h3>
                <InputNumber addonBefore="" addonAfter="%" defaultValue={100} style={{ width: 150, marginTop:10 }} />
                <p>-400.00</p>
            </div>
            <div className="tds">
            <button className="switch"></button> TDS Applicable?
            </div>
            <div className="tds">
            <button className="switch"></button> TCS Applicable?
            </div>
            <div className="sub">
            <h2>Total Amount:</h2>
            <h2>22600.00</h2>
            </div>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default End
