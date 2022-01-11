import React, { useContext } from "react";
// import { data } from "../../config/dataTanamPohon";
import CardTanamPohon from "../../components/card/CardTanamPohon";
import { DataContext } from "../../context/DataTanamPohon"
import "../../assets/styles/allTanamPohon.css"

export default function AllTanamPohon() {
  const { dataTP: data, userLogin } = useContext(DataContext);

  return (
    <>
      <div className="all-tp">
        <div className="all-tp-banner">
          <div className="banner-tp-text">
            <p className="banner-text-1">Tahukah kamu?</p>
            <h1>Menanam pohon merupakan salah satu upaya pengurangan emisi karbon</h1>
            <p className=".banner-text-2">Menanam pohon merupakan langkah nyata untuk menyeimbangkan kadar gas karbon dioksida di lapisan atmosfer. Pohon akan menyerap gas karbon dioksida untuk melakukan proses fotosintesis dan akan melepaskan oksigen ke udara, hal ini dapat mengurangi emisi karbon dioksida. Tak cukup menanam pohon di taman pribadi, kita juga perlu menggelorakan penanaman pohon di lingkungan tempat tinggal dan sekitar. Dengan mengikuti Tanam Pohon ini kamu sudah berkontribusi untuk mencegah percepatan laju perubahan iklim, lho!</p>
          </div>
        </div>
        <div className="text-ytp">
          <h1>Yuk <span>Tanam Pohon!</span></h1>
        </div>
        <div className="all-tp-cards">
          {data.map((data) => (
            <CardTanamPohon item={data} userLogin={userLogin} key={data.tanam_pohon_id} />
          ))}
        </div>
      </div>
    </>
  );
}
