import { userInfo } from "./user-info";
import { ping } from "./ping";
import { serverInfo } from "./server-info";
import { echo } from "./echo";
import { CommandInteraction } from "discord.js";

export const allCommands = [userInfo, ping, serverInfo, echo];

export type CommandObj = {
  data: any;
  execute: (interaction: CommandInteraction) => Promise<void>;
};
