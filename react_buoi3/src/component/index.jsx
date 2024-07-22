import { Fragment, useState } from "react";
import { mockData } from "./__mock-data__";
import { Card } from "./Card";
import { XemChiTiet } from "./xem-chi-tiet";
import { GioHang } from "./gio-hang";

export function PhoneShop() {
  const [phoneDetail, setPhoneDetail] = useState(mockData[0]);

  const onChangePhoneDetail = (phone) =>{
    setPhoneDetail(phone)
  }

  const onAddSanPham = () =>{
    
  }

  return (
    <>

      <div>
        <GioHang/>
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
