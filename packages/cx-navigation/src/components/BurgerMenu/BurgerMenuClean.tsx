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

import React, { FC } from 'react';
import { asCxTokenSpec } from '@bodiless/cx-elements';
import { Div, Fragment, designable } from '@bodiless/fclasses';
import { MenuClean } from '../Menu';
import { MenuTogglerClean } from '../MenuToggler';
import type { BurgerMenuComponents, BurgerMenuProps } from './types';

const burgerMenuComponents: BurgerMenuComponents = {
  Wrapper: Div,
  Container: Div,
  MenuContainer: Div,
  MenuTogglerWrapper: Fragment,
  MenuToggler: MenuTogglerClean,
  MenuWrapper: Fragment,
  Menu: MenuClean,
  ActionMenuContainer: Div,
  UtilityMenuWrapper: Fragment,
  UtilityMenu: MenuClean,
  LanguageButton: Fragment,
  Overlay: Div,
};

const BurgerMenuCleanBase: FC<BurgerMenuProps> = ({ components: C, ...rest }) => (
  <>
    <C.Wrapper {...rest}>
      <C.Container>
        <C.MenuTogglerWrapper>
          <C.MenuToggler />
        </C.MenuTogglerWrapper>
        <C.MenuContainer>
          <C.MenuWrapper>
            <C.Menu />
          </C.MenuWrapper>
          <C.ActionMenuContainer>
            <C.UtilityMenuWrapper>
              <C.UtilityMenu />
            </C.UtilityMenuWrapper>
            <C.LanguageButton />
          </C.ActionMenuContainer>
        </C.MenuContainer>
      </C.Container>
    </C.Wrapper>
    <C.Overlay />
  </>
);

/**
 * A clean Burger Menu that contains several components inside.
 * For new components in the menu, provide new slots with clean, designable components.
 */
const BurgerMenuClean = designable(burgerMenuComponents, 'BurgerMenu')(BurgerMenuCleanBase);

export const asBurgerMenuToken = asCxTokenSpec<BurgerMenuComponents>();

export default BurgerMenuClean;
