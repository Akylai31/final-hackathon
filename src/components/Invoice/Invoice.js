import React, { useContext, useEffect } from "react";
import "./Invoice.css";
import html2pdf from "html2pdf.js";
import { productsContext } from "../../context/ProductsContext";
import { AuthContext } from "../../context/AuthContext";

const Invoice = () => {
  const { ordersData, getOrders } = useContext(productsContext);
  const { currentUser } = useContext(AuthContext);
  // window.onload = function () {
  //   document.getElementById("download").addEventListener("click", () => {
  //     const invoice = this.document.getElementById("invoice");
  //     console.log(invoice);
  //     console.log(window);
  //     var opt = {
  //       margin: 1,
  //       filename: "myfile.pdf",
  //       image: { type: "jpeg", quality: 0.98 },
  //       html2canvas: { scale: 2 },
  //       jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  //     };
  //     html2pdf().from(invoice).set(opt).save();
  //   });
  // };

  let userOrders = ordersData.filter(
    (item) => item.email === currentUser.email
  );

  let newOrder = userOrders[userOrders.length - 1];

  useEffect(() => {
    getOrders();
  }, []);

  function save() {
    const element = document.getElementById("invoice");
    html2pdf().from(element).save();
  }

  return (
    <div>
      {" "}
      {newOrder ? (
        <div class="container d-flex justify-content-center mt-50 mb-50">
          <div class="row">
            <div class="col-md-12 text-right mb-3">
              <button
                onClick={() => save()}
                class="btn btn-primary"
                id="download"
              >
                {" "}
                download pdf
              </button>
            </div>
            <div class="col-md-12">
              <div class="card" id="invoice">
                <div class="card-header bg-transparent header-elements-inline">
                  <h2>Karst</h2>
                  <h6 class="card-title text-primary"> Sale invoice</h6>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="mb-4 pull-left">
                        <ul class="list list-unstyled mb-0 text-left">
                          <li>Suite 14, Upper Deck</li>
                          <li>26-32 Pirrama Road</li>
                          <li>Australia</li>
                          <li>hello@karststonepaper.com</li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="mb-4 ">
                        <div class="text-sm-right">
                          <h4 class="invoice-color mb-2 mt-md-2">
                            Invoice #{ordersData.length}
                          </h4>
                          <ul class="list list-unstyled mb-0">
                            <li>
                              Date:{" "}
                              <span class="font-weight-semibold">
                                {newOrder.date}
                              </span>
                            </li>
                            {/* <li>
                            Due date:{" "}
                            <span class="font-weight-semibold">
                              March 30, 2020
                            </span>
                          </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-md-flex flex-md-wrap">
                    <div class="mb-4 mb-md-2 text-left">
                      {" "}
                      <span class="text-muted">Invoice To:</span>
                      <ul class="list list-unstyled mb-0">
                        <li>
                          <h5 class="my-2">
                            {newOrder.firstName} {newOrder.lastName}
                          </h5>
                        </li>
                        <li>
                          <span class="font-weight-semibold">
                            Country: {newOrder.country}
                          </span>
                        </li>
                        <li>State: {newOrder.state}</li>
                        <li>City: {newOrder.city}</li>
                        <li>Address 1: {newOrder.address1}</li>
                        <li>Address 2: {newOrder.address2}</li>
                        <li>Zip: {newOrder.zip}</li>
                        <li>
                          <a href="#" data-abc="true">
                            {newOrder.email}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="mb-2 ml-auto">
                      {" "}
                      <span class="text-muted">Payment Details:</span>
                      <div class="d-flex flex-wrap wmin-md-400">
                        <ul class="list list-unstyled mb-0 text-left">
                          <li>
                            <h5 class="my-2"></h5>
                          </li>
                          <li>Card name:</li>
                          <li>Card number:</li>
                        </ul>
                        <ul class="list list-unstyled text-right mb-0 ml-auto">
                          <li>
                            <h5 class="font-weight-semibold my-2"></h5>
                          </li>
                          <li>
                            <span class="font-weight-semibold">
                              {newOrder.cardName}
                            </span>
                          </li>
                          <li>{newOrder.cardNumber}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="table-responsive">
                  <table class="table table-lg">
                    <thead>
                      <tr>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Count</th>
                        <th>SubPrice</th>
                      </tr>
                    </thead>
                    <tbody>
                      {newOrder.orders.map((item) => (
                        <tr>
                          <td>
                            <h6 class="mb-0">{item.item.title}</h6>{" "}
                          </td>
                          <td>{item.item.price} $</td>
                          <td>{item.count}</td>
                          <td>
                            <span class="font-weight-semibold">
                              {item.subPrice} $
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div class="card-body">
                  <div class="d-md-flex flex-md-wrap">
                    <div class="pt-2 mb-3 wmin-md-400 ml-auto">
                      <div class="table-responsive">
                        <table class="table">
                          <tbody>
                            <tr>
                              <th class="text-left">Total:</th>
                              <td class="text-right text-primary">
                                <h5 class="font-weight-semibold">
                                  {newOrder.totalPrice} $
                                </h5>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="text-right mt-3"> </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  {" "}
                  <span class="text-muted">
                    Thank you for your order! Save this invoice until you
                    receive the goods!
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};

export default Invoice;