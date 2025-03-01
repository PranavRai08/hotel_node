const express = require("express");
const router = express.Router();

const Menu = require("./../models/Menu");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new Menu(data); //we created replica of Menu.
    const response = await newMenu.save(); // we save the response.
    res.status(200).json(response); // send response.
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Menu.find();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

router.get("/:tasteType", async (req, res) => {
  try {
    const tasteType = req.params.tasteType;
    if (tasteType == "sweet" || tasteType == "sour" || tasteType == "salt") {
      const response = await Menu.find({ taste: tasteType });
      res.status(200).json(response);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error." });
  }
});

//update
router.put("/:id", async (req, res) => {
  try {
    const menuId = req.params.id;
    const updateMenu = req.body;
    const response = await Menu.findByIdAndUpdate(menuId, updateMenu, {
      new: true, // return updated document
      runValidators: true,
    });
    if (!response) {
      return res.status(404).json({ error: "Note found." });
    }
    console.log("data updated.");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error." });
  }
});

//delete
router.delete("/:id", async (req, res) => {
  try {
    const menuId = req.params.id;
    const deleteMenu = req.body;
    const response = await Menu.findByIdAndDelete(menuId, deleteMenu, {
        new: true, // return updated document
      runValidators: true,
    });
    if (!response) {
      return res.status(404).json({ error: "not found." });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error." });
  }
});

module.exports = router;
