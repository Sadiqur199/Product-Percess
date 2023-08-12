import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const OrderPage = () => {
  const [localData, setLocalData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setLocalData(JSON.parse(localStorage.getItem("orders")));
  }, []);
  const [data, setData] = useState({
    vendor: "",
    name: "",
    address: "",
    contact: "",
    entryDate: "",
    LcNo: "",
    challanNo: "",
    challanDate: "",
    vehicleInfo: "",
    inventory: "",
    product: "",
    quantity: "",
    color: "",
  });
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.id]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let totalOrder = JSON.parse(localStorage.getItem("orders") || "[]");
    totalOrder.push(data);
    localStorage.setItem("orders", JSON.stringify(totalOrder));
    setLocalData(JSON.parse(localStorage.getItem("orders")));
  };
  return (
    <div>
      <Container>
        <form onSubmit={handleSubmit}>
          <Row style={{ border: "1px solid black" }} className="my-3">
            <h6 className="titleTxt">Purchase Invoice</h6>
            <Col lg={4} md={6} sm={12}>
              <div>
                <div className="eachEntry">
                  <label htmlFor="vendor" className="formLabel">
                    Vendor &#62;&#62;
                  </label>
                  <input
                    type="text"
                    id="vendor"
                    onChange={handleChange}
                    value={data.vendor}
                    className="formInput"
                  />
                </div>
                <div className="eachEntry">
                  <label htmlFor="name" className="formLabel">
                    Name &#62;&#62;
                  </label>
                  <input
                    type="text"
                    id="name"
                    onChange={handleChange}
                    value={data.name}
                    className="formInput"
                  />
                </div>
                <div className="eachEntry">
                  <label htmlFor="address" className="formLabel">
                    Address
                  </label>
                  <textarea
                    type="text"
                    id="address"
                    onChange={handleChange}
                    value={data.address}
                    className="formInput"
                  />
                </div>
                <div className="eachEntry">
                  <label htmlFor="contact" className="formLabel">
                    Contact
                  </label>
                  <input
                    type="text"
                    id="contact"
                    onChange={handleChange}
                    value={data.contact}
                    className="formInput"
                  />
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div>
                <div className="eachEntry">
                  <label htmlFor="entryDate" className="formLabel">
                    Entry Date
                  </label>
                  <input
                    type="date"
                    id="entryDate"
                    onChange={handleChange}
                    value={data.entryDate}
                    className="formInput"
                  />
                </div>
                <div className="eachEntry">
                  <label htmlFor="LcNo" className="formLabel">
                    LC NO.
                  </label>
                  <input
                    type="text"
                    id="LcNo"
                    onChange={handleChange}
                    value={data.LcNo}
                    className="formInput"
                  />
                </div>
                <div className="eachEntry">
                  <label htmlFor="challanNo" className="formLabel">
                    Challan No
                  </label>
                  <input
                    type="text"
                    id="challanNo"
                    onChange={handleChange}
                    value={data.challanNo}
                    className="formInput"
                  />
                </div>
                <div className="eachEntry">
                  <label htmlFor="challanDate" className="formLabel">
                    Challan Date
                  </label>
                  <input
                    type="date"
                    id="challanDate"
                    onChange={handleChange}
                    value={data.challanDate}
                    className="formInput"
                  />
                </div>
                <div className="eachEntry">
                  <label htmlFor="vehicleInfo" className="formLabel">
                    Vehicle Info
                  </label>
                  <input
                    type="text"
                    id="vehicleInfo"
                    onChange={handleChange}
                    value={data.vehicleInfo}
                    className="formInput"
                  />
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div>
                <div className="eachEntry">
                  <label htmlFor="inventory" className="formLabel">
                    Inventory &#62;&#62;
                  </label>
                  <input
                    type="text"
                    id="inventory"
                    onChange={handleChange}
                    value={data.inventory}
                    className="formInput"
                  />
                </div>
              </div>
            </Col>
            <h6 className="srcBox">Search</h6>
          </Row>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div>
                <div className="eachEntry">
                  <label htmlFor="product" className="formLabel">
                    Product
                  </label>
                  <select
                    name="product"
                    id="product"
                    onChange={handleChange}
                    value={data.product}
                  >
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div className="eachEntry">
                  <label htmlFor="quantity" className="formLabel">
                    Quantity
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    onChange={handleChange}
                    value={data.quantity}
                    className="formInput"
                  />
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="eachEntry">
                <label htmlFor="color" className="formLabel">
                  Color
                </label>
                <select
                  name="color"
                  id="color"
                  onChange={handleChange}
                  value={data.color}
                >
                  <option value="Red">Red</option>
                  <option value="Green">Green</option>
                  <option value="Blue">Blue</option>
                </select>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="eachEntry">
                <button className="py-1" type="submit">
                  <span className="bg-dark py-2 px-2 text-light">+</span> Add
                </button>
              </div>
            </Col>
          </Row>
        </form>
        <Row className="my-3">
          <Col lg={12} md={12} sm={12}>
            <table className="text-center">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Color</th>
                  <th>Quantity</th>
                  <th>UoM</th>
                  <th>Unit Price</th>
                  <th>AV</th>
                  <th>CD (%)</th>
                  <th>CD</th>
                  <th>RD (%)</th>
                  <th>RD</th>
                  <th>SD (%)</th>
                  <th>SD</th>
                  <th>Vat (%)</th>
                  <th>Vat</th>
                  <th>Ait (%)</th>
                  <th>Ait</th>
                  <th>ATV (%)</th>
                  <th>ATV</th>
                  <th>TTI</th>
                </tr>
              </thead>
              <tbody>
                {localData != null &&
                  localData.map((arrEl) => {
                    return (
                      <tr>
                        <td>{arrEl.product}</td>
                        <td>{arrEl.color}</td>
                        <td>{arrEl.quantity}</td>
                        <td>UoM</td>
                        <td>Unit Price</td>
                        <td>AV</td>
                        <td>CD (%)</td>
                        <td>CD</td>
                        <td>RD (%)</td>
                        <td>RD</td>
                        <td>SD (%)</td>
                        <td>SD</td>
                        <td>Vat (%)</td>
                        <td>Vat</td>
                        <td>Ait (%)</td>
                        <td>Ait</td>
                        <td>ATV (%)</td>
                        <td>ATV</td>
                        <td>TTI</td>
                      </tr>
                    );
                  })}
              </tbody>
              <tfoot>
                <tr>
                  <div className="plusMinus">- +</div>
                </tr>
              </tfoot>
            </table>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <div>
              <div className="eachEntry">
                <label htmlFor="totalTax" className="formLabel">
                  Total Tax
                </label>
                <input type="text" className="formInput" />
              </div>
              <div className="eachEntry">
                <label htmlFor="totalRebate" className="formLabel">
                  Total Rebate
                </label>
                <input type="text" className="formInput" />
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="eachEntry">
              <label htmlFor="total" className="formLabel">
                Total
              </label>
              <input type="text" className="formInput" />
            </div>
            <div className="eachEntry">
              <label htmlFor="grandTotal" className="formLabel">
                Grand Total&#62;&#62;
              </label>
              <input type="text" className="formInput" />
            </div>
          </Col>
          <div className="d-grid">
            <Button
              variant="secondary"
              className="my-3"
              onClick={() => {
                navigate("/orders");
              }}
            >
              Total Order
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default OrderPage;
