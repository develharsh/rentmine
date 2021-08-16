import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Image src='/20945149.jpg' width="800px" height="500px" alt="..." />
      <h1 className="center-align homeBrand">A Destination for Your Dream Apartment</h1>
      <div className="center-align homeLinkShow">
        <Link href="/show"><a className="btn-large">Show Apartments</a></Link>
      </div>
    </div>
  )
}
