const {Record} = require('../db.js')

const recordController = async (score) => {
    try {
        await Record.destroy({where: {}});
        const newRecord = await Record.create({record: score})
        return score
    } catch (error) {
        return error.message
    }
}

module.exports = recordController