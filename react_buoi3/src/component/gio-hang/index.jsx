import { useState, useEffect } from 'react'

export function GioHang({ listSanPham }) {

  useEffect(()=> {
    console.log("55555512");

    // clear-up func
    return ()=>{
      console.log("clear");
    }
  },[])
    return (
      <>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên Sản Phẩm</th>
              <th scope="col">Giá</th>
              <th scope="col">Số Lượng</th>
              <th scope="col">Tổng Tiền</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {listSanPham.map((i) => {
              return (
                <tr key={i.id}>
                  <th scope="row">{i.id}</th>
                  <td>{i.name}</td>
                  <td>{i.price}</td>
                  <td>
                    <button className="btn btn-success">-</button>
                    <span>{i.amount}</span>
                    <button className="btn btn-success">+</button>
                  </td>
                  <td>{i.amount * i.price}</td>
                  <td>
                    <button className="btn btn-danger">Xóa</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
  