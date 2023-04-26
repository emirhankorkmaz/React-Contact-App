import { useState, useEffect } from 'react'
import List from './List'
import Form from './Form'

function ContactApp() {
  const [kisiler, setKisi] = useState([
    {fullname: "Emirhan",
    phone_number: "0111 111 11 11"
  },
  {fullname: "Tuğba",
  phone_number: "0222 222 22 22"
  },
  {fullname: "Ahmet",
  phone_number: "*#31*#"
  }
  ])
  useEffect(() => {
  },[kisiler])
  return (
    <div className='container'>
    <h1>Kişiler</h1>
    <List kisiler={kisiler} />
    <Form kisiler={kisiler} setKisi={setKisi} />
    </div>
  )
}

export default ContactApp
