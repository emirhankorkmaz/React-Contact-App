import { useState } from 'react'

function Form({kisiler, setKisi}) {
  const initialFormValues = { fullname:'', phone_number:''};
  const [form, setForm] = useState(initialFormValues);
  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === '' || form.phone_number === '') {
      return false
    }
    setKisi([...kisiler,form]);
    setForm(initialFormValues)
  };
  return (
    <div>
    <form onSubmit={onSubmit}>
        <div><input value={form.fullname} placeholder='İsim' name='fullname' onChange={onChangeInput}/></div>
        <div> <input type='tel' value={form.phone_number} placeholder='Telefon numarası' name='phone_number' onChange={onChangeInput}/></div>
        <div className='btn'><button onClick={onSubmit}>Kişi Ekle</button></div>
    </form>
    </div>
  )
}

export default Form