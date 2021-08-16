
import { useRouter } from 'next/router'
import { useRef, useEffect } from 'react'
import Image from 'next/image'

const Propertty = ({ product, who }) => {
    const router = useRouter()
    const modalRef = useRef(null)
    useEffect(() => {
        M.Modal.init(modalRef.current)
    }, [])

    const deleteProduct = async () => {
        const res = await fetch(`${process.env.BASE_URL}/api/property/${product._id}`, { method: 'DELETE' })
        const status = await res.json()
        M.toast({ html: status.message, classes: 'green' })
        router.push('/')
    }

    const getModal = () => {
        return (
            <div id="modal1" className="modal" ref={modalRef}>
                <div className="modal-content">
                    <h4>{product.title}</h4>
                    <p>Are you sure you want to delete this</p>
                </div>
                <div className="modal-footer">
                    <button className="btn modal-close waves-effect waves-light #1565c0 blue darken-3">
                        cancel
                    </button>
                    <button className="btn waves-effect waves-light #c62828 red darken-3"
                        onClick={() => deleteProduct()}
                    >
                        Yes
                    </button>
                </div>
            </div>

        )
    }

    return (
        <div>
            <div className="roww">
                <Image src={product.mediaUrl} className="prodImg" width="800px" height="500px" alt="..." />
                {/*<div>
                    <input type="number" min="1" placeholder="Quantity" />
                    <button className="btn btn-success">Add</button>
                </div>*/}
            </div>
            <button data-target="modal1" className="btn modal-trigger waves-effect waves-light #c62828 red darken-3">Delete
                <i className="material-icons left">delete</i>
            </button>
            {getModal()}
            <h4>{product.title}</h4>
            <h6>Rent: {product.rent}</h6>
            <h6>Location: {product.location}</h6>
            <h6>Owner: {who}</h6>
            <h6>Description: {product.desc}</h6>
        </div>
    )
}

export async function getServerSideProps({ params: { id } }) {
    const res = await fetch(`${process.env.BASE_URL}/api/property/${id}`)
    const data = await res.json()
    return {
        props: { product: data.product, who:data.who }
    }
}

export default Propertty