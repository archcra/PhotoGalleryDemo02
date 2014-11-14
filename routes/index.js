module.exports = function (app) {
    app.get('/', function (req, res) {
        console.log('when / goes here');
        res.render('entrance');
    });

    app.get('/scenes/:sceneName', function (req, res) {
        var sceneName = req.params.sceneName;
        var sceneUrl = '../public/scenes/' + sceneName + '/index.html';
        res.render('scenes', {
            sceneUrl: sceneUrl
        });
    });

};