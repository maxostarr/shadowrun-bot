import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

const data = new SlashCommandBuilder()
  .setName("user")
  .setDescription("Replies with user info!");

const execute = async (interaction: CommandInteraction) => {
  await interaction.reply(
    `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`,
  );
};

export const userInfo = { data, execute };
