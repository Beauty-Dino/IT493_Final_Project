const express = require("express");
const router = express.Router();
require("dotenv").config();

const locationId = process.env["SQUARE_LOCATION_ID"];

const {
  catalogApi,
} = require("../util/square-client");

/**
 * GET /services
 *
 * This endpoint is in charge of retrieving all of the service items that can be booked for the current location.
 */
router.get("/", async (req, res, next) => {
  const cancel = req.query.cancel;
  try {
    let { result: { items } } = await catalogApi.searchCatalogItems({
      enabledLocationIds: [ locationId ],
      productTypes: [ "APPOINTMENTS_SERVICE" ]
    });

    if (!items) {
      items = [];
    }

    res.render("pages/select-service", { cancel, items });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
