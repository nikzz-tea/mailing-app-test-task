export interface ChannelConfig {
  name: string;
  messageLimit: number;
  defaultButtons:
    | {
        amountLimit: number;
        textLimit: number;
        linksSupport: boolean;
      }
    | false;
  inlineButtons:
    | {
        amountLimit: number;
        textLimit: number;
        linksSupport: boolean | number;
      }
    | false;
}

interface Config {
  [channel: string]: ChannelConfig;
}

import config from "./config.json";

export default config as Config;
