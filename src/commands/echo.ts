import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

const data = new SlashCommandBuilder()
  .setName("echo")
  .setDescription("Replies with whatever is supplied as input!")
  .addStringOption((option) =>
    option
      .setName("text")
      .setRequired(true)
      .setDescription("The text to echo back!"),
  );

const execute = async (interaction: CommandInteraction) => {
  await interaction.reply(`${interaction.options.getString("text")}`);
};

export const echo = { data, execute };
