/**
 * Copyright © 2021 Johnson & Johnson
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
  addProps, as,
} from '@bodiless/fclasses';
import {
  bcElement,
} from '@bodiless/bc-elements';
import {
  withNode,
  withNodeKey,
  withSidecarNodes,
} from '@bodiless/core';
import { asBodilessLink, asBodilessImage } from '@bodiless/components-ui';
// import { asSchemaSource } from '@canvasx/structuredata';
import { asLogoToken } from './LogoClean';

const Default = asLogoToken({
  Layout: {
    Wrapper: as(
      bcElement.WithFlexCenterXY,
      'order-1',
    ),
  },
  // SEO: {
  //   Image: asSchemaSource('organization-logo'),
  // },
  Spacing: {
    Link: 'h-44px lg:h-88px max-w-240px lg:max-w-441px',
    Image: 'max-h-full',
  },
  Components: {
    // @todo This should use a bcImage token.
    Image: as(
      asBodilessImage(),
      addProps({
        loading: 'eager',
      }),
    ),
  },
  Schema: {
    Image: withNodeKey('image'),
    // @todo should this be a bc-link?
    // @todo can we separate sidecar nodekeys from editors?
    Link: withSidecarNodes(
      asBodilessLink('link'),
    ),
    _: withNode,
  },
});

export const bcLogo = { Default };
