const express = require ("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRoutes= require ('./routes/user.routes');
const expRoutes = require('./routes/exp.routes');
const destRoutes = require('./routes/dest.routes');
const favRoutes = require('./routes/fav.routes');
const guideRoutes = require('./routes/guide.routes.js');

require('dotenv').config({path:'./config/.env'});
require ('./config/db');

const {verifyToken,requireAuth} = require ('./middleware/auth.middleware');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: ['https://ody.onrender.com', 'http://127.0.0.1:5500'],
  credentials: true
}
app.use(cors(corsOptions));



app.use(bodyParser.json());
app.use (bodyParser.urlencoded({extended: true}));
app.use(cookieParser());



//jeton

app.get('/jwtid', requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id)
});
//routes
app.use('/api/user', userRoutes);
app.use('/api/exp', expRoutes);
app.use('/api/dest', destRoutes);
app.use('/api/fav', favRoutes);
app.use('/api/guide', guideRoutes);



//serveur
app.listen(process.env.ENDROIT ,() => 
{
    console.log(`Listening on port ${process.env.ENDROIT}`);
});
