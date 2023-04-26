import {useState} from 'react'

function List({kisiler}) {
  const [filterText, setFilterText] = useState("");
  const filtered = kisiler.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
      );
    });
  return (
    <div>
    <input placeholder='Aramak İstediğiniz Kişi' value={filterText} onChange={(e) => setFilterText(e.target.value)}></input>
    <ul className='list'>
      {
        filtered.map((kisi, i) => <li key={i}><span>{kisi.fullname}</span><span>{kisi.phone_number}</span></li> )
      }
      <li>Mevcut Kişi Sayısı : {filtered.length}</li>
    </ul>
    </div>
  )
}

export default List