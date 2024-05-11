const Router = require('express');

const authRouter = require('./auth.routes');
const playersRouter = require('./players.routes');
const moviesRouter = require('./movies.routes');

const jwtMiddleware = require('../middlewares/jwt');

const router = Router();

router.use('/', authRouter);

router.use('/', playersRouter);

//JWT middleware
router.use(jwtMiddleware)
router.use('/a', playersRouter);


module.exports = router;