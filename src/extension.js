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

const EFFECT_NAME = "test-clutter-effect";

class Extension {
  constructor() {
    this._effect = new Clutter.BrightnessContrastEffect();

    this._effect.brightness = new Clutter.Color({ red: 143, green: 127, blue: 95, alpha: 255 });
    this._effect.contrast = new Clutter.Color({ red: 143, green: 127, blue: 127, alpha: 255 });
  }

  enable() {
    UiGroup.add_effect_with_name(EFFECT_NAME, this._effect);
  }

  disable() {
    UiGroup.remove_effect_by_name(EFFECT_NAME);
  }
}

function init() {
  return new Extension();
}
