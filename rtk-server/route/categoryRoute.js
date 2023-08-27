const express = require("express");

const authVerify = require("../middlewares/authVerify.js");

const {
  createCategory,
  deleteCategory,
  getAllCategory,
  getSingleCategory,
  updateCategory,
  updateCategoryStatus,
} = require("../controllers/categoryController.js");

// create router

const router = express.Router();

//verify token
router.use(authVerify);

// routing

router.route("/").get(getAllCategory).post(createCategory);

router
  .route("/:id")
  .get(getSingleCategory)
  .delete(deleteCategory)
  .patch(updateCategory);

router.route("/status/:id").put(updateCategoryStatus);

// export router

module.exports = router;
