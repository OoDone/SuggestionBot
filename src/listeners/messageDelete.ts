import { Message } from 'discord.js';
import PostgreSQL from '../structures/PostgreSQL';
import botStatus from '../structures/BotStatus';

import DeleteController from '../controllers/assessments/Delete';

export default async (message: Message) => {

	if (!botStatus.isRunning()) return;

	const pgClient = new PostgreSQL().getClient();

	await pgClient.connect();

	const res = await pgClient.query('SELECT * FROM suggestions WHERE message = $1::text', [message.id]);
	if (res.rows.length) {
		DeleteController(message);
	}

	await pgClient.end();
}
