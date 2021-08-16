import Link from 'next/link'
import { useRouter } from 'next/router'
import cookie from 'js-cookie'

const NavBar = () => {

    const router = useRouter()
    let user = false, uper = false
    const cookCheck = cookie.get('uuuuu')
    if (cookCheck) {
        user = true;
        if (cookCheck === '--10879') {
            uper = true;
        }
    }

    const isActive = (r) => {
        if (r === router.pathname) {
            return "active"
        } else {
            return ""
        }
    }

    return (
        <div>
            <nav style={{ width: "100%" }} className="navbarSt">
                <div className="nav-wrapper #e040fb purple accent-2">
                    <Link href="/"><a className="brand-logo left">Rent Mine</a></Link>
                    <ul id="nav-mobile" className="right">
                        {user
                            ? <>
                                <li className={isActive('/create')}><Link href="/create"><a>Create</a></Link></li>
                                <li><button className="btnLogOut"
                                    onClick={(e) => { cookie.remove('token'); cookie.remove('uuuuu');router.push('/login'); M.toast({ html: 'Logged Out', classes: 'green' }) }}>
                                    Log Out
                                </button></li>
                            </>
                            :
                            <>
                                <li className={isActive('/login')}><Link href="/login"><a>Login</a></Link></li>
                                <li className={isActive('/signup')}><Link href="/signup"><a>Signup</a></Link></li>
                            </>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar