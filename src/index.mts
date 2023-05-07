import remarkCustomBlocks from './remark/admonition.mjs'
import { IDialectikPlugin, IPluginProvider } from '@dialectik/plugin-interface';

const chakra_umd = 'https://edukera.b-cdn.net/chakra.js'

const chakraPlugin : IDialectikPlugin = {
  withMain: true,
  withComponents: true,
  isRequired: (markdown: string) => { return true },
  scripts : [chakra_umd],
  remarkPlugins: [remarkCustomBlocks],
  requires: []
}

export const PluginProvider : IPluginProvider = {
  getPlugin : (arg ?: any) => { return chakraPlugin }
}