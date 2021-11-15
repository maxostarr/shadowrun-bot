import { Client, Intents, Collection } from "discord.js";
import dotenv from "dotenv";
import { allCommands, CommandObj } from "./commands/all";
dotenv.config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const commands = new Collection<string, CommandObj>();

for (const command of allCommands) {
  commands.set(command.data.name, command);
}

client.once("ready", () => {
  console.log("Ready!");
});

client.login(process.env.TOKEN);

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
});
