import Link from 'next/link'
import Image from 'next/image'

const Home = ({ properties }) => {
    const propList = properties.map(indivProp => {
        return (
            <div className="card pcard" key={indivProp._id}>
                <div className="card-image" style={{ textAlign: "center" }}>
                    <Image src={indivProp.mediaUrl} width="312px" height="400px" objectFit="cover" alt="..." />
                </div>
                <div className="card-content">
                    <span>{indivProp.title}<br></br></span>
                    <span>{indivProp.location}</span>
                    <p style={{fontWeight:"bold"}}> ₹  {indivProp.rent}/-</p>
                </div>
                <div className="card-action">
                    <Link href={`/property/${indivProp._id}`}><a className="btn btn-primary">View Property</a></Link>
                </div>
            </div>
        )
    })

    /*Main Component Below*/
    return (
        <div>
            <div className="rootcard">
                {propList}
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const ress = await fetch(`${process.env.BASE_URL}/api/properties`)
    const data = await ress.json()
    return {
        props: { properties: data }, // will be passed to the page component as props
    }
}

export default Home