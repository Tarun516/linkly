import { Router } from 'express';
import { client } from '@repo/db/client';

const router = Router();

router.get('/available', async (req, res) => {
    const availableTriggers = await client.availableTrigger.findMany({});
    res.json({
        availableTriggers,
    });
});

export const triggerRouter: Router = router;
