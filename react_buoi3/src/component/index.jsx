import { Fragment, useState } from "react";
import { mockData } from "./__mock-data__";
import { Card } from "./Card";
import { XemChiTiet } from "./xem-chi-tiet";
import { GioHang } from "./gio-hang";
import { transformSanPham } from "./until";

export function PhoneShop() {
  const [listSanPham, setListSanPham] = useState([
    {
      name: "ip",
      id: 123,
      price: 2000,
      amount: 2,
    },
  ]);
  const [phoneDetail, setPhoneDetail] = useState(mockData[0]);

  const onChangePhoneDetail = (phone) => {
    setPhoneDetail(phone);
  };

  const onAddSanPham = (sanPham) => {
    sanPham = transformSanPham(sanPham);
    setListSanPham((c) => [...c, sanPham]);
  };

  const onDelete = (id) => {
    const isDelete = confirm("ban co chac muon xoa?");
    if(isDelete){
      const newListSP = listSanPham.filter((i) => i.id !== id);
  
      setListSanPham(newListSP);
    }
  };

  const onTang = (id) =>{
    const sanPham = listSanPham.find((i) => i.id === id);
    if(sanPham){
      sanPham.amount += 1
    };
    setListSanPham([...listSanPham]);
  }

  const onGiam = (id) => {
    const sanPham = listSanPham.find((i) => i.id === id);
    if(sanPham){
      if(sanPham.amount === 1){
        onDelete(id);
        return;
      }
      sanPham.amount -= 1
    };
    setListSanPham([...listSanPham]);
  }

  return (
    <>
      <div>
        <GioHang listSanPham = {listSanPham}
                 onDelete = {onDelete}
                 onTang = {onTang}
                 onGiam = {onGiam}
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: 30,
          justifyContent: "center",
        }}
      >
        {mockData.map((item) => {
          return (
            <Fragment key={item.maSP}>
              <Card
                name={item.tenSP}
                price={item.giaBan}
                image={item.hinhAnh}
                onChangePhoneDetail={() => onChangePhoneDetail(item)}
                onAddSanPham={() => onAddSanPham(item)}
              />
            </Fragment>
          );
        })}
      </div>

      <div>
        <XemChiTiet
          name={phoneDetail.tenSP}
          img={phoneDetail.hinhAnh}
          manHinh={phoneDetail.manHinh}
          cameraSau={phoneDetail.cameraSau}
          cameraTruoc={phoneDetail.cameraTruoc}
          heDieuHanh={phoneDetail.heDieuHanh}
          ram={phoneDetail.ram}
          rom={phoneDetail.rom}
        />
      </div>
    </>
  );
}
