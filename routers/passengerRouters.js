const express = require('express')
const { passengerPost, passengerPut, passengerDelete, passengerGetById, passengerGetAll, addpassengerPost, addpassengerPut, addpassengerDelete, addpassengerGetAll, addpassengerGetById, AllpassengerSGetById, passengerReferrelCodeGetById } = require('../controllers/passengerController')

const passengerRouter = express.Router()

passengerRouter.post('/passenger-details', passengerPost)
passengerRouter.put('/passenger-details/:tbs_passenger_id', passengerPut)
passengerRouter.delete('/passenger-details/:tbs_passenger_id', passengerDelete)
passengerRouter.get('/passenger-details', passengerGetAll)
passengerRouter.get('/passenger-details/:tbs_passenger_id', passengerGetById)

passengerRouter.post('/add-passenger-details', addpassengerPost)
passengerRouter.put('/add-passenger-details/:tbs_add_pax_id', addpassengerPut)
passengerRouter.delete('/add-passenger-details/:tbs_add_pax_id', addpassengerDelete)
passengerRouter.get('/add-passenger-details', addpassengerGetAll)
passengerRouter.get('/add-passenger-details/:tbs_add_pax_id', addpassengerGetById)

passengerRouter.get('/all-passengers/:tbs_passenger_id', AllpassengerSGetById)

passengerRouter.get('/ReferralCode/:tbs_passenger_id', passengerReferrelCodeGetById)


module.exports= { passengerRouter }
