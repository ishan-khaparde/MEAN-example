var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req,res){
    console.log(req.url,"GET the hotel");
    console.log(req.query);
    var offset = 0;
    var count = 5;

    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset, 10);
    }
    if(req.query && req.query.count){
        offset = parseInt(req.query.count, 10);
    }
    var retData = hotelData.slice(offset,offset+count);
    res.status(200).json(retData);
};

module.exports.getHotelById = function(req,res){
   
    var hotelId = req.params.hotelId;
    console.log("GET hotel by ID: "+hotelId);
    var thisHotel = hotelData[hotelId];

     res.status(200).json(thisHotel);
}

module.exports.addNewHotel = function(req,res){
    console.log("POST new Hotel");
    console.log(req.body);
    res.status(200).json(req.body);
}
