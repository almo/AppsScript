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

function dslibTest(): any {
    let even: number = getEven(1000);
    let test:number =0;
    console.log(`Testing getEven (max 1000): result ${even})`);

    if (even%2!=0){
        console.error(`Testing getEven: ${even} is not even)`)
        test=-1;
    }

    return test;
}