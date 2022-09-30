const { Router } = require('express');
const { userRoutes, adminRoutes } = require('../routes');

const router = new Router();

router.use(userRoutes);
router.use(adminRoutes);

module.exports = router;
