/**
 * Copyright © 2019 Johnson & Johnson
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

/* tslint:disable:max-line-length */
import { flow } from 'lodash';
import {
  asMark,
  withKey,
  withButton,
  asInline,
  asBlock,
  withId,
  asVoid,
} from '../RichTextItemSetters';

export const withBoldMeta = flow(withId('Bold'), asMark, withKey('b'), withButton('format_bold'));
export const withSuperScriptMeta = flow(withId('SuperScript'), asMark, withKey('s'), withButton('arrow_drop_up'));
export const withItalicMeta = flow(withId('Italic'), asMark, withKey('i'), withButton('format_italic'));
export const withLinkMeta = flow(withId('Link'), asInline, withKey('k'), withButton('link'));
export const withStrikeThroughMeta = flow(withId('Strikethrough'), asMark, withKey('s'), withButton('format_strikethrough'));
export const withUnderlineMeta = flow(withId('Underline'), asMark, withKey('u'), withButton('format_underlined'));
export const withAlignLeftMeta = flow(withId('AlignLeft'), asBlock, withButton('format_align_left'));
export const withAlignRightMeta = flow(withId('AlignRight'), asBlock, withButton('format_align_right'));
export const withAlignCenterMeta = flow(withId('AlignCenter'), asBlock, withButton('format_align_center'));
export const withAlignJustifyMeta = flow(withId('AlignJustify'), asBlock, withButton('format_align_justify'));
export const withHeader1Meta = flow(withId('H1'), asBlock, withKey('1'), withButton('looks_one'));
export const withHeader2Meta = flow(withId('H2'), asBlock, withKey('2'), withButton('looks_two'));
export const withImageMeta = flow(withId('Image'), asVoid, asBlock, withId('image'), withButton('add_photo_alternate'));
