import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
    path: path.resolve(process.cwd(), "../.env")
});

import { ShardingManager } from 'discord.js';
import cliColors from './structures/CLIColors';

console.log(cliColors.FgCyan + `\n ██████╗ ██████╗ ██████╗ ███████╗██████╗ ███████╗███╗   ██╗ ██████╗ ██╗    ██╗
██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔══██╗██╔════╝████╗  ██║██╔═══██╗██║    ██║
██║     ██║   ██║██║  ██║█████╗  ██║  ██║███████╗██╔██╗ ██║██║   ██║██║ █╗ ██║
██║     ██║   ██║██║  ██║██╔══╝  ██║  ██║╚════██║██║╚██╗██║██║   ██║██║███╗██║
╚██████╗╚██████╔╝██████╔╝███████╗██████╔╝███████║██║ ╚████║╚██████╔╝╚███╔███╔╝
 ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝╚═════╝ ╚══════╝╚═╝  ╚═══╝ ╚═════╝  ╚══╝╚══╝
                                                                              ` + cliColors.FgBlue + "\n==============================================================================\n" + cliColors.Reset);

const manager = new ShardingManager('app.js', {
    token: process.env.CLIENT_TOKEN
});

manager.on('shardCreate', shard =>  console.log(`${cliColors.FgCyan}>> Shard ${cliColors.FgYellow + shard.id + cliColors.FgCyan} has been launched.`));

console.log(cliColors.FgBlue + "\n---=[Loading Shards...]=---" + cliColors.Reset);

manager.spawn();