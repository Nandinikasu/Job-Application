const Application = require('../models/Application');

const submitApplication = async (req, res) => {
  try {
    const newApp = new Application(req.body);
    await newApp.save();
    res.status(201).json(newApp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getApplications = async (req, res) => {
  try {
    const applications = await Application.find();
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteApplication = async (req, res) => {
  try {
    const result = await Application.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).send("Application not found");
    res.status(200).send("Deleted successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  submitApplication,
  getApplications,
  deleteApplication
};


