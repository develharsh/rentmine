import initDB from '../../utils/initDB'
import Property from '../../models/Property'
import jwt from 'jsonwebtoken'

initDB()

const PropertyApi = async (req, res) => {
    switch (req.method) {
        case 'GET':
            await getAllProps(req, res);
            break;
        case 'POST':
            await saveProperty(req, res)
            break;
    }
}

const getAllProps = async (req, res) => {
    const properties = await Property.find()
    res.status(200).json(properties)
}

const saveProperty = async (req, res) => {
    const { authorization } = req.headers
    if (!authorization) return res.status(422).json({ error: "Login First" })
    try {
        const { userId } = jwt.verify(authorization, process.env.JWT_SECRET)
        const { title, rent, location, desc, media } = req.body
        const product = await new Property({
            title, rent, location, desc, mediaUrl: media, owner: userId
        }).save()
        res.status(201).json({ message: 'Success' })
    }
    catch (error) {
        return res.status(422).json({ error: 'Something went wrong in Creating' })
    }
}

export default PropertyApi