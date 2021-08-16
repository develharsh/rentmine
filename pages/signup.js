import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import cookie from 'js-cookie'

const Signup = (props) => {
  const router = useRouter()
  if (cookie.get('token')) {
    router.push('/')
  }
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")

  const userSignup = async (e) => {
    e.preventDefault()
    const res = await fetch(`${process.env.BASE_URL}/api/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, phone, password
      })
    })
    const res2 = await res.json()
    if (res2.error) { M.toast({ html: res2.error, classes: 'red' }) }
    else { M.toast({ html: res2.message + ', Now Login', classes: 'green' }); router.push('/login') }

  }

  return (
    <div className="signupDiv">
      <div className="container card signupcard center-align">
        <h3>Sign up</h3>
        <h5>Welcome {name}</h5>
        <form onSubmit={(e) => { userSignup(e) }}>
          <input type="text" placeholder="Name" value={name} required onChange={(e) => { setName(e.target.value) }} />
          <input type="text" placeholder="Phone" maxLength="10" minLength="10" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
          <input type="password" placeholder="Password" required value={password} onChange={(e) => { setPassword(e.target.value) }} />
          <span style={{ marginLeft: "30px" }}></span>
          <button className="btn waves-effect waves-light" type="submit" name="action">Create Account
            <i className="material-icons right">forward</i>
          </button>
        </form>
        <h5>Already have Account? <Link href="/login"><a style={{ color: "green" }}>Login</a></Link></h5>
      </div>
    </div>
  )
}

export default Signup