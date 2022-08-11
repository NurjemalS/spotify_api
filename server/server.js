
const express = require('express');
const cors = require('cors')
const bodyParser = require("body-parser")
const SpotifyWebApi = require('spotify-web-api-node');
const spotifyWebApi = require('spotify-web-api-node') 
const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/login', (req, res) => {

    let code = req.query.code;
    const spotifyWebApi = new SpotifyWebApi({
        redirectUri:' http://127.0.0.1:3001',
        clientId: 'b5b64c9cc75043e5b971bc79a0b52f2b',
        clientSecret:  '663bddf7ad7e4c58b153f8793b163386'
    })

    spotifyWebApi.authorizationCodeGrant(code).then(data =>{
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(err => {
        console.log(err)
        res.sendStatus(400)
    })

})

app.listen(3002)

