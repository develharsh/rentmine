import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import cookie from 'js-cookie'

const Login = (props) => {
  const router = useRouter()
  if(cookie.get('token')){
    router.push('/')
  }
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")

  const userLogin = async (e) => {
    e.preventDefault()
    const res = await fetch(`${process.env.BASE_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phone, password
      })
    })
    const res2 = await res.json()
    if (res2.error) { M.toast({ html: res2.error, classes: 'red' }) }
    else {
      let lvl=res2.user==='u'?'u':'+-10879'
      cookie.set('token', res2.token)
      cookie.set('uuuuu', lvl)
      M.toast({ html: 'Log In Success', classes: 'green' })
      router.push('/')
    }

  }

  return (
    <div className="signupDiv">
      <div className="container card signupcard center-align">
        <h3>Log In</h3>
        <form onSubmit={(e) => { userLogin(e) }}>
          <input type="text" placeholder="Phone" required maxLength="10" minLength="10" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
          <input type="password" placeholder="Password" required value={password} onChange={(e) => { setPassword(e.target.value) }} />
          <span style={{ marginLeft: "30px" }}></span>
          <button className="btn waves-effect waves-light" type="submit" name="action">Log In
            <i className="material-icons right">forward</i>
          </button>
        </form>
        <h5>New User? <Link href="/signup"><a style={{ color: "green" }}>Sign Up</a></Link></h5>
      </div>
    </div>
  )
}

export default Login