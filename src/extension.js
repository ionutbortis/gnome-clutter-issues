/* extension.js
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
 */

const { Clutter } = imports.gi;
const UiGroup = imports.ui.main.layoutManager.uiGroup;

const DESATURATE_EFFECT_NAME = "test-desaturate-effect";

class Extension {
  constructor() {
    this._desaturateEffect = new Clutter.DesaturateEffect();
    this._desaturateEffect.factor = 100;
  }

  enable() {
    UiGroup.add_effect_with_name(DESATURATE_EFFECT_NAME, this._desaturateEffect);
  }

  disable() {
    UiGroup.remove_effect_by_name(DESATURATE_EFFECT_NAME);
  }
}

function init() {
  return new Extension();
}
