import express from 'express';
import { client } from '@repo/db/client';

const app = express();

app.use(express.json());

app.post('/hooks/catch/:userId/:zapId', async (req, res) => {
    const userId = req.params.userId;
    const zapId = req.params.zapId;
    const body = req.body;

    // store in db
    await client.$transaction(async (tx) => {
        const run = await tx.zapRun.create({
            data: {
                zapId: zapId,
                metadata: body,
            },
        });

        await tx.zapRunOutbox.create({
            data: {
                zapRunId: run.id,
            },
        });
    });

    res.json({
        message: 'Webhook recieved',
    });
});

app.listen(3002);
