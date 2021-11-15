import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

const data = new SlashCommandBuilder()
  .setName("server")
  .setDescription("Replies with server info!");

const execute = async (interaction: CommandInteraction) => {
  await interaction.reply(
    `Server name: ${interaction.guild?.name}\nTotal members: ${interaction.guild?.memberCount}`,
  );
};

export const serverInfo = { data, execute };
