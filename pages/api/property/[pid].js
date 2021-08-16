import Property from '../../../models/Property'
import User from '../../../models/User'

const Pid = async (req, res) => {
    switch (req.method) {
        case 'GET':
            await getProperty(req, res)
            break;
        case 'DELETE':
            await deleteProperty(req, res)
    }

}

const getProperty = async (req, res) => {
    const { pid } = req.query
    const product = await Property.findById(pid)
    const who = await User.findById(product.owner)
    res.status(200).json({product, who:who.name})
}
const deleteProperty = async (req, res) => {
    const { pid } = req.query
    await Property.findByIdAndDelete(pid)
    res.status(200).json({message: "Success"})
}

export default Pid