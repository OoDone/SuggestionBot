import ICommand from '../structures/ICommand';
import { Client, Message, MessageEmbed, TextChannel } from 'discord.js';
import pgPool from '../structures/PostgreSQL';

export default class ReportCommand implements ICommand {

    aliases() {
        return null as null;
    }

    async run(client: Client, message: Message, language: any, args: string[]) {

        const pgClient = await pgPool.connect();

        const res = await pgClient.query('SELECT report_channel FROM servers WHERE id = $1::text', [message.guild.id]);
        if (res.rows.length === 0) return;

        const channel: TextChannel = message.guild.channels.cache.get(res.rows[0].report_channel) as TextChannel;
        if (!channel) {
            message.channel.send({
                embed: new MessageEmbed()
                    .setAuthor(language.errorTitle, client.user.avatarURL())
                    .setColor(process.env.EMBED_COLOR)
                    .setDescription(language.commands.report.invalidChannel)
                    .setTimestamp()
                    .setFooter(process.env.EMBED_FOOTER)
            });

            pgClient.release();

            return;
        }

        if (!args.length) {
            message.channel.send({
                embed: new MessageEmbed()
                    .setAuthor(language.errorTitle, client.user.avatarURL())
                    .setColor(process.env.EMBED_COLOR)
                    .setDescription(language.commands.report.descriptionRequired)
                    .setTimestamp()
                    .setFooter(process.env.EMBED_FOOTER)
            });

            pgClient.release();

            return;
        }

        const desc = args.slice(0).join(" ");

        const result = await pgClient.query('SELECT id FROM reports ORDER BY id DESC LIMIT 1');
        let id = 1;
        if (result.rows.length)
            id += result.rows[0].id;

        const msg = await channel.send({
            embed: new MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL())
                .setColor(process.env.EMBED_COLOR)
                .setDescription(language.commands.report.description
                    .replace(/<Description>/g, desc)
                    .replace(/<Status>/g, language.suggestions.open)
                    .replace(/<ID>/g, id)
                )
                .setTimestamp()
                .setFooter(process.env.EMBED_FOOTER)
        });

        message.channel.send({
            embed: new MessageEmbed()
                .setAuthor(language.commands.report.title, client.user.avatarURL())
                .setColor(process.env.EMBED_COLOR)
                .setDescription(language.commands.report.sent)
                .setTimestamp()
                .setFooter(process.env.EMBED_FOOTER)
        });

        await pgClient.query('INSERT INTO reports (context, author, guild, channel, message, status) VALUES ($1::text, $2::text, $3::text, $4::text, $5::text, $6::text)', [desc, message.author.id, message.guild.id, channel.id, msg.id, 'Open']);

        pgClient.release();

    }

    help() {
        return "Create a report. (10 second cooldown)";
    }

}
