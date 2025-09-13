import { Router } from 'express';
import { client } from '@repo/db/client';

const router = Router();

router.get('/available', async (req, res) => {
    const availableActions = await client.availableAction.findMany({});
    res.json({
        availableActions,
    });
});

export const actionRouter: Router = router;
