# Popup Quiz App
In this project we will demostrate the following:
- Material Design
    - Adding Material Design to the project
    - Defining A Custom Theme and some CSS Variables to be consumed in our components
    - How to manage the application layout using CSS Grid and Flex
- NgRx
    - Adding NgRx Store to the project
    - Defining the main state
    - Defining the possible actions
    - Defining the reducers
    - Defining Selectors for various aspects of the state
    - Consuming the state in the components
## Commits
### Application Setup
| # | Link | Description |
|---|---|---|
| 1 | [Initial application](https://github.com/kobi2294/OracleWeek2019/commit/a42fa8b77d422a52c822ee0b77c81c6ee6b3c5ae) |  Created an empty application using the angular CLI: `ng new redux-pop-quiz` | 
| 2 | [Added Material Design](https://github.com/kobi2294/OracleWeek2019/commit/dea3a489c6ce8553b0d876ca2d8f229b1732d56e) | Added angular material using the cli: `ng add @angular/material` |
| 3 | [Custom Theme](https://github.com/kobi2294/OracleWeek2019/commit/ee30749186f2937f842760718a0974312aed606f) | Defined the theme palettes in partial `_common.scss `and generated the material styles in `styles.scss` | 
| 4 | [Tested theme](https://github.com/kobi2294/OracleWeek2019/commit/4718c3e39b6c1ab8ebad8e11d57d08bd7db32acb) | Used some angular material components like icon and button to test the new theme |
| 5 | [Grid, Flex layout](https://github.com/kobi2294/OracleWeek2019/commit/6111cb9814533865f492a9ecbfeab4f5f7c3084d) | Created layout where each element is either grid or flex for easier layout management |
| 6 | [CSS Variables](https://github.com/kobi2294/OracleWeek2019/commit/08b690158f1c4518d5cf1f383190d133b13a7f04) | Added CSS Variables to the `styles.scss` file and tested some of them in the app component |

### Building the UI 
| # | Link | Description |
|---|---|---|
| 7 | [Toolbar](https://github.com/kobi2294/OracleWeek2019/commit/824764f5605dfae1ec9aff39c56c4cb449b15eb9) | Added material toolbar with logo and caption |
| 8 | [Progress Component](https://github.com/kobi2294/OracleWeek2019/commit/ca24e67db944a5ab8bcd8a469bafe341edf73cd0) | Added progress component, that presents a list of indicators telling which questions were answered correctly, incorrectly or not at all |
| 9 | [Question Component](https://github.com/kobi2294/OracleWeek2019/commit/f55a59c253e9c7efc0b04cd5de700e4912ba7f26) | Added question presenter component, that presents a question, a list of answers, and allow the user to pick one |
| 10 | [Quiz Done Component](https://github.com/kobi2294/OracleWeek2019/commit/4b3d434d9006b5bdcc0db6828664078a01cc03b8) | Added a component with message that appears when the quiz is completed |

### Router & Model
| # | Link | Description |
|---|---|---|
| 11 | [Router paths](https://github.com/kobi2294/OracleWeek2019/commit/875e50658e80bf12f41a21ceea025bd78d3f120a) | Configured router paths and outlet styling |
| 12 | [Model Entities](https://github.com/kobi2294/OracleWeek2019/commit/3898949f14fae2882ff10412945c7ac2e50989c5) | Added model entities Question and Answer, and some mock data |

### NgRx Store
| # | Link | Description |
|---|---|---|
| 13 | [Add NgRx Store](https://github.com/kobi2294/OracleWeek2019/commit/9363f12bf672d8e2e6a22c2ca89a8c2591147aba) | Added NgRx store using `ng add @ngrx/store` and defined state and feature key |
| 14 | [Initial State](https://github.com/kobi2294/OracleWeek2019/commit/3703a1ee0dfd24939c3684584bc9ef27eb74c07b) | Defined initial state |
| 15 | [Add NgRx Devtools](https://github.com/kobi2294/OracleWeek2019/commit/e80a0b2c8db437bb86fe00ca6570369d8b960b57) | Added the NgRx devtools by running `ng add @ngrx/store-devtools` |
| 16 | [Added Reducer](https://github.com/kobi2294/OracleWeek2019/commit/fec1493c3d57dae1ee3f8e7d48a30e90c3c57630) | Added reducer with initial state. Added the reducer (and slice) to the store |
| 17 | [First Selector](https://github.com/kobi2294/OracleWeek2019/commit/632523dfe13131a6db8644acd5c31005696a0ab0) | Added current question selector and used it in the question presenter |
| 18 | [Grouped Selectors](https://github.com/kobi2294/OracleWeek2019/commit/28f5366bf790fc779cd1894d07dab0c94d80fa5f) | Grouped all selectors under the name `QuizSelectors` |
| 19 | [Actions](https://github.com/kobi2294/OracleWeek2019/commit/8541f2d878e2bb4327089a731e202c70621aaf9d) | Added Reset and Answer actions and grouped them into `QuizActions` name |
| 20 | [Reducers](https://github.com/kobi2294/OracleWeek2019/commit/360089d30d4c86da4f075476f20a16fa78a3bb74) | Improved Selectors to minimize state, and added reducer logic |
| 21 | [Progress Wired to Store](https://github.com/kobi2294/OracleWeek2019/commit/95fd3facbdbd348f0023233ed958e5b82a0567c6) | Added selector for progress component and modified bindings |
| 22 | [Added Final Score](https://github.com/kobi2294/OracleWeek2019/commit/55ad2841d8a969dca31b2978b2459c9c38fad6be) | Added selectors for score, and presented them in the quiz done component |

## Version Information
|||
|---|---|
| Node| 12.11.0 |
| Npm | 6.11.3 |
| Angular CLI | 8.3.12 |
| RxJS | 6.4.0 |
| Angular Material | 8.2.3 |

