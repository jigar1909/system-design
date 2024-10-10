import type { Preview } from "@storybook/angular";
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation/documentation.json';
import { componentWrapperDecorator } from "@storybook/angular";

setCompodocJson(docJson);
const preview: Preview = {
  globalTypes: {
    mode: {
      description: 'Modes',
      defaultValue: 'dark_mode',
      toolbar: {
        title: 'Mode',
        icon: 'circlehollow',
        items: ['dark_mode', 'light_mode'],
        dynamicTitle: true,
      },
    },
    theme: {
      description: 'Themes',
      defaultValue: 'theme-primary',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['theme-primary', 'theme-secondary'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    componentWrapperDecorator(
      (story) => `<div [ngClass]="[myTheme,myMode]">${story}</div>`,
      ({ globals }) => {
        return {
          myTheme: globals['theme'],
          myMode: globals['mode']
        };
      },
    ),
  ],
};

export default preview;
