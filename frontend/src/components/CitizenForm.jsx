import React, {useState} from 'react'

export default function CitizenForm({citizen = {}, onSave, onCancel}){
  const [state, setState] = useState({...citizen})
  const handle = e => setState({...state, [e.target.name]: e.target.value})
  return (
    <form onSubmit={e => { e.preventDefault(); onSave(state) }}>
      <input name="name" placeholder="Name" value={state.name||''} onChange={handle} />
      <input name="email" placeholder="Email" value={state.email||''} onChange={handle} />
      <input name="address" placeholder="Address" value={state.address||''} onChange={handle} />
      <input name="dob" type="date" value={state.dob||''} onChange={handle} />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  )
}
