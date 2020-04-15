import ICommand from '../structures/ICommand';
import { Client, Message, MessageEmbed, TextChannel } from 'discord.js';
import PostgreSQL from '../structures/PostgreSQL';

import RejectController from '../controllers/assessments/Reject';

/*
 * Listen for ID or 'all'
 */
export default class RejectCommand implements ICommand {

    aliases() {
        return ['deny'];
    }

    async run(client: Client, message: Message, language: any, args: string[]) {

        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send({
            embed: new MessageEmbed()
                .setAuthor(language.errorTitle, client.user.avatarURL())
                .setColor(process.env.EMBED_COLOR)
                .setDescription(language.insufficientPermissions
                    .replace(/<Permission>/g, "MANAGE_MESSAGES"))
                .setTimestamp()
                .setFooter(process.env.EMBED_FOOTER)
        });

        if (!args.length) return message.channel.send({
            embed: new MessageEmbed()
                .setAuthor(language.errorTitle, client.user.avatarURL())
                .setColor(process.env.EMBED_COLOR)
                .setDescription(language.commands.reject.descriptionRequired)
                .setTimestamp()
                .setFooter(process.env.EMBED_FOOTER)
        });

        const pgClient = new PostgreSQL().getClient();

        await pgClient.connect();

        if (args[0].toLowerCase() === "all") {

            const res = await pgClient.query('SELECT message, channel FROM suggestions WHERE NOT status = $1::text', ['Deleted']);

            if (!res.rows.length) {
                message.channel.send({
                    embed: new MessageEmbed()
                        .setAuthor(language.errorTitle, client.user.avatarURL())
                        .setColor(process.env.EMBED_COLOR)
                        .setDescription(language.commands.reject.noSuggestionsFound)
                        .setTimestamp()
                        .setFooter(process.env.EMBED_FOOTER)
                });

                await pgClient.end();

                return;
            }

            for (let i = 0; i < res.rows.length; i++) {
                const chn: TextChannel = message.guild.channels.cache.get(res.rows[i].channel) as TextChannel;
                const msg = await chn.messages.fetch(res.rows[i].message, false);

                RejectController(client, msg, language);
            }

        } else {

            const sID = parseInt(args[0]);
            // let reason = "No reason provided";
            //
            // if (args.length > 1)
            //     reason = args.splice(1).join(" ");

            const res = await pgClient.query('SELECT message, channel FROM suggestions WHERE id = $1::int', [sID]);

            if (!res.rows.length) {
                message.channel.send({
                    embed: new MessageEmbed()
                        .setAuthor(language.errorTitle, client.user.avatarURL())
                        .setColor(process.env.EMBED_COLOR)
                        .setDescription(language.commands.reject.invalidInput)
                        .setTimestamp()
                        .setFooter(process.env.EMBED_FOOTER)
                });

                await pgClient.end();

                return;
            }

            const chn: TextChannel = message.guild.channels.cache.get(res.rows[0].channel) as TextChannel;
            const msg = await chn.messages.fetch(res.rows[0].message, false);

            RejectController(client, msg, language);
        }

        await pgClient.end();

    }

    help() {
        return "Reject a suggestion.";
    }

}
