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

import { cxElement } from '@bodiless/cx-elements';
import {
  EditorPlainClean, cxEditorPlain, RichTextClean, cxRichText
} from '@bodiless/cx-editors';
import { withNodeKey } from '@bodiless/core';
import { on } from '@bodiless/fclasses';
import { cxLayout, LayoutClean } from '@bodiless/cx-layout';
import { asStyleGuideTemplateToken } from '../StyleGuideTemplateClean';

const Default = asStyleGuideTemplateToken({
  Theme: {
    TitleWrapper: cxElement.H1,
  },
  Components: {
    Wrapper: on(LayoutClean)(cxLayout.Default),
  },
  Editors: {
    Title: on(EditorPlainClean)(cxEditorPlain.Default),
    Description: on(RichTextClean)(cxRichText.Default),
  },
  Schema: {
    Title: withNodeKey('title'),
    Description: withNodeKey('description'),
    Examples: withNodeKey('exmples'),
  },
});

const BordersLabels = asStyleGuideTemplateToken({
  ...Default,
  Theme: {
    Wrapper: cxLayout.WithBordersLabels,
  },
});

const HeaderOnly = asStyleGuideTemplateToken({
  ...Default,
  Components: {
    Wrapper: on(LayoutClean)(cxLayout.HeaderOnly),
  },
});

const FooterOnly = asStyleGuideTemplateToken({
  ...Default,
  Components: {
    Wrapper: on(LayoutClean)(cxLayout.FooterOnly),
  },
});

export default {
  Default,
  BordersLabels,
  HeaderOnly,
  FooterOnly,
};
