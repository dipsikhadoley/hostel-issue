const Servicer = require("../models/servicer_model");

const getServicer = async (req, res) => {
  try {
    const servicers = await Servicer.find();
    res.status(200).json(servicers);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getServicer };
