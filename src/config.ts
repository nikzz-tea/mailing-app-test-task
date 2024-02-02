export interface ChannelConfig {
  name: string;
  messageLimit: number;
  defaultButtons:
    | {
        amountLimit: number;
        textLimit: number;
        linksSupport: boolean;
      }
    | boolean;
  inlineButtons:
    | {
        amountLimit: number;
        textLimit: number;
        linksSupport: boolean | number;
      }
    | boolean;
}

interface Config {
  [channel: string]: ChannelConfig;
}

import config from "./config.json";

export default config as Config;
