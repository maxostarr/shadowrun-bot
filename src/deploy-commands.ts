import { SlashCommandBuilder } from "@discordjs/builders";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import dotenv from "dotenv";
import { allCommands } from "./commands/all";
dotenv.config();

const token = process.env.TOKEN as string;
const guildId = process.env.GUILD_ID as string;
const clientId = process.env.CLIENT_ID as string;

const commands = allCommands.map((command) => command.data.toJSON());

const rest = new REST({ version: "9" }).setToken(token);

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
