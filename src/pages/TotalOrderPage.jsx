import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const TotalOrderPage = () => {
  const [localData, setLocalData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setLocalData(JSON.parse(localStorage.getItem("orders")));
  }, []);
  return (
    <div>
      <Container>
        <Row style={{ border: "1px solid black" }} className="my-3">
          <h6 className="titleTxt">Purchase Orders</h6>
          <Col lg={3} md={6} sm={12}>
            <div>
              <div className="eachEntry">
                <label htmlFor="party" className="formLabel">
                  Party
                </label>
                <select name="party" id="party" className="formInput">
                  <option value="All">All</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="eachEntry">
                <label htmlFor="status" className="formLabel">
                  Status
                </label>
                <select name="status" id="status" className="formInput">
                  <option value="All">All</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div>
              <div className="eachEntry">
                <label htmlFor="orderNo" className="formLabel">
                  Order No
                </label>
                <input type="text" id="orderNo" className="formInput" />
              </div>
              <div className="eachEntry">
                <label htmlFor="branch" className="formLabel">
                  Branch
                </label>
                <select name="branch" id="branch" className="formInput">
                  <option value="All">All</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div>
              <div className="eachEntry">
                <label htmlFor="dateFrom" className="formLabel">
                  From
                </label>
                <input type="date" id="dateFrom" className="formInput" />
              </div>
              <div className="eachEntry">
                <label htmlFor="dateTo" className="formLabel">
                  To{" "}
                </label>
                <input type="date" id="dateTo" className="formInput" />
              </div>
            </div>
          </Col>
          <Col lg={2} md={6} sm={12}>
            <div className="eachEntry">
              <button className="py-1 srcBtn text-light bg-dark" type="submit">
                <span className="bg-light py-2 px-2 text-light">&#128269;</span>{" "}
                Search
              </button>
            </div>
          </Col>
          <Col lg={12} md={12} sm={12}>
            <table className="text-center my-3">
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      id="numberCheck"
                      name="numberCheck"
                      value="Number"
                    />{" "}
                    Number
                  </th>
                  <th>Posted</th>
                  <th>Order Date</th>
                  <th>Party</th>
                  <th>Amount</th>
                  <th>Paid Amount</th>
                  <th>Due Amount</th>
                  <th>Branch</th>
                  <th>Created By</th>
                  <th>Approved By</th>
                </tr>
              </thead>
              <tbody>
                {localData != null &&
                  localData.map((arrEl) => {
                    return (
                      <tr>
                        <td>
                          {" "}
                          <input
                            type="checkbox"
                            id="numberCheck"
                            name="numberCheck"
                            value="Number"
                          />{" "}
                          {arrEl.product}
                        </td>
                        <td>{arrEl.color}</td>
                        <td>{arrEl.quantity}</td>
                        <td>X Enterprise</td>
                        <td>404553</td>
                        <td>34556</td>
                        <td>6543</td>
                        <td>Uttora</td>
                        <td>Mr X</td>
                        <td>None</td>
                      </tr>
                    );
                  })}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={5}>Total</td>
                  <td colSpan={5}>4757345</td>
                </tr>
              </tfoot>
            </table>
          </Col>
          <div className="d-grid">
            <Button
              variant="secondary"
              className="my-3"
              onClick={() => {
                navigate("/");
              }}
            >
              Make Order
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default TotalOrderPage;
