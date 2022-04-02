/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Footer';

export default defineMessages({
  designedMessag: {
    id: `${scope}.license.designedMessag`,
    defaultMessage: 'The Colour Crystal Designed by AK Lee.',
  },
  developedBy: {
    id: `${scope}.license.developedBy`,
    defaultMessage: 'Developed by CJE Digital Marketing Agency.',
  },
  authorMessage: {
    id: `${scope}.author.message`,
    defaultMessage: `
      Made with love by {author}.
    `,
  },
});
