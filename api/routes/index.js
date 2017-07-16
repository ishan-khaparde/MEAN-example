var express = require('express');
var router = express.Router();

var ctrlHotels = require('../controllers/hotel-controller.js');

router.route('/hotels')
        .get(ctrlHotels.hotelsGetAll);

router.route('/hotels/:hotelId')
        .get(ctrlHotels.getHotelById);

router.route('/hotels/new').post(ctrlHotels.addNewHotel);

module.exports = router;

