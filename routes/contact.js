const express = require("express");
const router = express.Router();

const {
  bookingsApi,
  catalogApi,
} = require("../util/square-client");

/**
 * GET /contact
 *
 * Render the contact information form prior to creating a booking
 *
 *  accepted query params are:
 * `serviceId` - the ID of the service
 * `staffId` - the ID of the staff
 * `startAt` - starting time of the booking
 * `version` - the version of the service initially selected
 */
router.get("/", async (req, res, next) => {
  const serviceId = req.query.serviceId;
  const serviceVersion = req.query.version;
  const staffId = req.query.staff;
  const startAt = req.query.startAt;

  try {

     // Send request to get the service associated with the given item variation ID, and related objects.
    const retrieveServicePromise = catalogApi.retrieveCatalogObject(serviceId, true);

    // Send request to get the team member profile of the staff selected
    const retrieveTeamMemberPromise = bookingsApi.retrieveTeamMemberBookingProfile(staffId);

    const [ { result: { object : serviceVariation, relatedObjects } }, { result: { teamMemberBookingProfile } } ] = await Promise.all([ retrieveServicePromise, retrieveTeamMemberPromise ]);
    const serviceItem = relatedObjects.filter(relatedObject => relatedObject.type === "ITEM")[0];

    res.render("pages/contact", { serviceItem, serviceVariation, serviceVersion, startAt, teamMemberBookingProfile });
  } catch (error) {
    console.error(error);
    next(error);
  }
});


module.exports = router;
