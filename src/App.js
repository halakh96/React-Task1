import React, { Component } from 'react';
import "./App.css";

function Chart(props) {
  return (
    <div className="card">
    <div className="card-header"><i className={props.icon} /> {props.title} </div>
    <div className="card-body"><canvas id="myAreaChart" />
    </div>
  </div>
  );
}
function Card(props) {
  return (
    <div className="card bg-gumbo">
    <div className="card-body text-center">
      <h5 className="card-title">{props.text}</h5>
      <h5 className="card-title">{props.num}</h5>
    </div>
    <div className="card-footer text-start">
      <a className="text-white" href="#">{props.detail}</a>
    </div>
  </div>
  ); 
}

export default class App extends Component {
  render() {
    return (   
<div>
  {/*top Navbar*/}
  <nav className="navbar navbar-dark bg-darkBlue fixed-top ">
    <div className="container-fluid">
      <a className="navbar-brand " href="index.html">Hala Khaled</a>
      {/* Sidebar Toggle Icon*/}
      <i className=" fas fa-bars fs-4  pe-auto " id="sidebarToggleBtn" data-bs-toggle="collapse" data-bs-target="#sidebarContent" aria-controls="sidebarContent" aria-expanded="false" aria-label="Toggle navigation" />
      <form className="d-flex ms-auto input-group w-25">
        <input className="form-control " type="search" placeholder="Search for.." aria-label="Search" />
        <span className=" input-group-text bg-gumbo" type="submit"><i className="fas fa-search" />
        </span>
      </form>
      <div className="dropdown ">
        <div className="btn text-white dropdown-toggle  " type="button" id="dropdownMenu1" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="fas fa-user" />
        </div>
        <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="dropdownMenu1">
          <li><button className="dropdown-item" type="button">My Profile</button></li>
          <li><button className="dropdown-item" type="button">Setting</button></li>
          <li><button className="dropdown-item" type="button">Log Out</button></li>
        </ul>
      </div>     
    </div>
  </nav>
 
  {/* The Main Content */}
  <main>
    <div className="container-fluid ">
      <div className="row ">
        <div className="col-1 p-0">
          {/*Sidebar*/}
          <ul className="nav bg-darkBlue vh-100  justify-content-center collapse sticky-top pt-5 " style={{width: '80%'}} id="sidebarContent">
            <div className="nav-item mt-5 ">
              <a className="nav-link active text-white text-muted" title="Home" href="index.html"> <i className="fas fa-home fa-2x" /> </a>
            </div>
            <div className="nav-item ">
              <a className="nav-link text-white text-muted" title="Products" href="products.html"><i className="fas fa-tshirt fa-2x" /></a>
            </div>
            <div className="nav-item ">
              <a className="nav-link text-white text-muted" title="Orders" href="/orders.html"> <i className="fas fa-table fa-2x" /></a> 
            </div>
            <div className="nav-item ">
              <a className="nav-link text-white text-muted" title="Report" href="/report.html"><i className="fas fa-chart-area fa-2x" /></a>
            </div>
            <div className="nav-item ">
              <a className="nav-link text-white text-muted" title="Customers" href="/customers.html"><i className="fas fa-users fa-2x" /> </a>
            </div>
          </ul>
        </div>
        <div className="col-10 container-fluid ">
          <div className="row ml-5  mt-5 pt-4 "><h1>Dashboard</h1>
            <p className="text-muted">Dashboard</p>
          </div>
          {/* Reports Cards */}
          <div className="row row-cols-1 row-cols-lg-4 ">
            <div className="col mt-3">
            <Card text="Sales" num="3450.00 SAR" detail="View Details" />
            </div>
            <div className="col mt-3">
            <Card text="Orders" num="1890" detail="View Details" />
            </div>
            <div className="col mt-3">
            <Card text="Visitors" num="352" detail="View Details" />
            </div>
            <div className="col mt-3">
            <Card text="Conversion Rate" num="3.75%" detail="View Details" />
            </div>
          </div>

          {/* Reports Chart */}
          <div className="row row-cols-1 row-cols-lg-2 ">
            <div className="col mt-3">
            <Chart title ="Orders" icon="fas fa-table" />
            </div>
            <div className="col  mt-3">
            <Chart title ="Visitor" icon="fas fa-eye" />
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-2 ">
            <div className="col mt-3">
            <Chart title ="Visitors Cities" icon="fas fa-map-marker" />
            </div>
            <div className="col mt-3">
             <Chart title ="Customers Rat" icon="fas fa-star" />
            </div>
          </div>
          {/* Customers Table */}
          <div className="row  mt-3 ">
            <div className="col-12 ">
              <div className="card">
                <div className="card-header"><i className="fas fa-users" /> Customers</div>
                <div className="card-body table-responsive ">
                  <table id="myTable">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Age</th>
                        <th>Last Visit</th>
                        <th>Orders</th>
                      </tr>
                    </thead>
                    <tbody>
                    </tbody>
                  </table> 
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div className="col-1" />
      </div> 
    </div>   
  </main>
</div>
    );
  }
}
