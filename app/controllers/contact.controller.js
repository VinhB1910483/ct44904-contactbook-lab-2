exports.findAll = async (req, res, next) => {
    return res.send({ message:"findAll handler" });
}

exports.findOne = async (req, res, next) => {
    return res.send({ message:"findOne handler" });
}

exports.findAllFavorite = async (req, res, next) => {
    return res.send({ message:"findAllFavorite handler" });
}

exports.create = async (req, res, next) => {
    return res.send({ message:"create handler" });
}

exports.update = async (req, res, next) => {
    return res.send({ message:"update handler" });
}

exports.deleteAll = async (req, res, next) => {
    return res.send({ message:"deleteAll handler" });
}

exports.delete = async (req, res, next) => {
    return res.send({ message:"delete handler" });
}
