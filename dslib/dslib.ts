/** 
 * Coypright 2022 Andres Leonardo Martinez Ortiz
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * Typescript code guidelines https://google.github.io/styleguide/tsguide.html
 * @fileoverview Data Store Library for Apps Script
 */

/**
 * getEven
 */
function getEven(max:number): any {
    let even: number = 0;
    let randonNumber: number = Math.floor(Math.random() * max);

    if (randonNumber%2==1){
        even = randonNumber+1;
    }else {
        even = randonNumber;
    }

    return even;
}
