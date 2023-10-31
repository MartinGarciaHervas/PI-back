const getRecordController = require("../Controllers/getRecordController.js")

const getRecordHandler = async (req, res) => {
    try {
        const record = await getRecordController()
        res.status(200).json(record)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = getRecordHandler