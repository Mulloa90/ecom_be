const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  Category.findAll({ include: [Product] })
    .then((categories) => {
      return res.json(categories);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
  // find all categories
  // be sure to include its associated Products
});

router.get("/:id", (req, res) => {
  Category.findOne({ where: {id: req.params.id }, include: [Product] })
  .then((category) => {
    return res.json(category);
  })
  .catch((err) => {
    return res.status(400).json(err);
  });
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post("/", (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((category) => {
    return res.status(200).json(category);
  })
  .catch((err) => {
    return res.status(400).json(err);
  });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(req.body,{where:{id: req.params.id}})
  .then((category) => {
    return res.status(200).json(category);
  })
  .catch((err) => {
    return res.status(400).json(err);
  });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({where:{id: req.params.id}})
  .then((category) => {
    return res.status(200).json(category);
  })
  .catch((err) => {
    return res.status(400).json(err);
  });
});

module.exports = router;
