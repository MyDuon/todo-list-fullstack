import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(201).send("Post request called");
});

router.post("/", (req, res) => {
  res.status(201).send("Post request called");
});
router.put("/:id", (req, res) => {
  res.status(201).send("Post request called");
});
router.delete("/:id", (req, res) => {
  res.status(201).send("Post request called");
});

export default router;
