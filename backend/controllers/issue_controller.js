const Issue = require("../models/issue_model");

const issue = async (req, res) => {
  try {
    const { name, roomNumber, contact, issueType, issue } = req.body;
    const existingIssue = await Issue.findOne({ name, roomNumber, contact });

    if (existingIssue) {
      return res.status(400).json({
        message: "Issue already reported",
      });
    }

    const createdIssue = new Issue({
      name,
      roomNumber,
      contact,
      issueType,
      issue,
    });

    await createdIssue.save();

    res.status(201).json({
      message: "Issue reported successfully",
      issue: {
        _id: createdIssue._id,
        name: createdIssue.name,
        roomNumber: createdIssue.roomNumber,
        contact: createdIssue.contact,
        issueType: createdIssue.issueType,
        issue: createdIssue.issue,
      },
    });
  } catch (error) {
    console.log("error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = issue;
