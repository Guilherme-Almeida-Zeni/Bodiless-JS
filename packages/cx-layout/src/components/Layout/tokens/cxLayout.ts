/**
 * Copyright © 2022 Johnson & Johnson
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {
  addProps,
  as,
  Div,
  replaceWith,
} from '@bodiless/fclasses';
import { cxElement } from '@bodiless/cx-elements';
import { asLayoutToken } from '../LayoutClean';
import { cxFooter } from '../../Footer';
import { cxHeader } from '../../Header';
import { cxHelmet } from '../../Helmet';
import { MAIN_CONTENT_ID } from './constants';
import { WithBordersLabels } from './cxLayoutTest';

/**
  * Token that defines a basic layout.
  */
const Base = asLayoutToken({
  Components: {
    Helmet: cxHelmet.Default,
    Header: replaceWith(Div),
    Footer: replaceWith(Div),
  },
  Theme: {
  },
  Schema: {
  },
  Behavior: {
    Container: addProps({ id: MAIN_CONTENT_ID }),
    SkipToMainContent: as(
      addProps({
        href: `#${MAIN_CONTENT_ID}`,
        children: 'Skip To Main Content',
      }),
      'sr-only focus:not-sr-only',
    ),
  },
  Layout: {
  },
  Spacing: {
  }
});

/*
 * Tailwind's container is specifially not used due to its feature it set's max-width
 * to min-width of breakpoint.  So instead rely on ContainerWrapper to margin percent
 * to contain content until we get to xl and then constrain by max-width.
 */
const ConstrainSite = asLayoutToken({
  Theme: {
    // TODO The tokens on this ContainerWrapper will move to be controlled by
    // content within Templates.
    ContainerWrapper: as(
      cxElement.WithSiteMargin,
      cxElement.WithSiteXLConstraint,
    ),
    HeaderWrapper: cxElement.WithSiteXLConstraint,
    FooterWrapper: cxElement.WithSiteXLConstraint,
  },
});

const Header = asLayoutToken({
  Components: {
    Header: cxHeader.Default,
  },
});

const Footer = asLayoutToken({
  Components: {
    Footer: cxFooter.Default,
  },
});

const Default = asLayoutToken({
  ...Base,
  Components: {
    ...Base.Components,
    ...Header.Components,
    ...Footer.Components,
  },
  Theme: {
    ...ConstrainSite.Theme,
  },
});

const HeaderOnly = asLayoutToken({
  ...Default,
  Components: {
    ...Base.Components,
    ...Header.Components,
  },
});

const FooterOnly = asLayoutToken({
  ...Default,
  Components: {
    ...Base.Components,
    ...Footer.Components,
  },
});

export default {
  Base,
  Default,
  Header,
  HeaderOnly,
  Footer,
  FooterOnly,
  WithBordersLabels,
};
