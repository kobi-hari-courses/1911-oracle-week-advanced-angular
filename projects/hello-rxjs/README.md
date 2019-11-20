# Hello RxJS App
In this project we will demonstrate the following:
- Observables
    - Creating Observers by implementing the interface
    - Creating observables using `RxJS` operator: `interval` for example
    - Subscribing an observer to an observable
    - Creating an obserable using the constructor
    - Demonstrating the 'lazy' - ness of Observables
    - Unsubscribing from an observable
- Subjects
    - Creating a Subject
    - Creating a Behavior Subject
    - Using behavior subject to implement statefull services
    - The difference between using `Subject` and `BehaviorSubject`
- Consuming Observables in Components
    - Using the async pipe
    - Using `ngIf` aliases to improve stability and readability

- Operators
    - Using the `map` operator
    - Using the `switchMap` operator
    - Other operators

## Commits
### Application Setup
| # | Link | Description |
|---|---|---|
| 1 | [Initial App](https://github.com/kobi2294/OracleWeek2019/commit/78607a9f161c21e1943b7589915ab4b2216f22e9) | Created the app using `ng new hello-rxjs` |
| 2 | [Prepare Playground](https://github.com/kobi2294/OracleWeek2019/commit/bca350e8028de3efe53bc0f7e307daeee50d5f8c) | Empty the app component, and prepare it to run an algorithm on the console |

### Fun with Observables
| # | Link | Description |
|---|---|---|
| 3 | [Creating Observers](https://github.com/kobi2294/OracleWeek2019/commit/3511e9e78360ea03bf5b661f37be707b0e3c1048) | Created a helper function that instantiates an observer with specific id |
| 4 | [Creating Observable](https://github.com/kobi2294/OracleWeek2019/commit/63692ef2171f711cb1dd068aad5da88e29c8659b) | Created observable and subscribed observer |
| 5 | [Offset Observers](https://github.com/kobi2294/OracleWeek2019/commit/750877d70fb1c6eb3ef251f5ddf8430b0aa48d36) | Created additional observer that subscribes later, showing they have different streams |
| 6 | [Interval Operator](https://github.com/kobi2294/OracleWeek2019/commit/407806bd5acb7f4c6cb3af1f3fd088032b23e6e2) | Using the interval operator to create an infinite stream of numbers | 
| 7 | [Unsubscribing](https://github.com/kobi2294/OracleWeek2019/commit/942e7509d68a24231b61d2fd20634f60de7c6d83) | Using the `Subscription` object to unsubscribe from the observables when finished and avoid memory leaks | 

### Fun with Subjects
| # | Link | Description |
|---|---|---|
| 8 | [Subject](https://github.com/kobi2294/OracleWeek2019/commit/59daac09f07946b30439dbfa42f744b140d171a0) | Now using subject instead of Observable, and the observers are now in sync, but observer 2 misses several values |
| 9 | [Behavior Subject](https://github.com/kobi2294/OracleWeek2019/commit/1f359342de370d945c143cb083ea54682e5ba124) | Now using `Behavior Subject` So the observers get notified on the "current" value and remain in sync for changes |
| 10 | [Counter Service](https://github.com/kobi2294/OracleWeek2019/commit/ec6e733b75b5e2402f8a5ca3a10af1fda5a9c3ca) | Created a stateful service that contains a single number exposed as observable |

### Using Observables in Components
| # | Link | Description |
|---|---|---|
| 11 | [Async Pipe](https://github.com/kobi2294/OracleWeek2019/commit/b99e93cabaa0b7b42fd92f859525d34fd03ed98d) | Created counter presenter and editor components and demonstrated how using subject causes bug |

### Colors Example - Operators
| # | Link | Description |
|---|---|---|
| 12 | [Colors Model and Service](https://github.com/kobi2294/OracleWeek2019/commit/a305907826030eb066a2dc220d98da9d5480cd4f) | Color model, a HUGE list of colors, and a service that searches in them |
| 13 | [Colors Service](https://github.com/kobi2294/OracleWeek2019/commit/0ecb77d9b1da9256aa493e023530ab839bd07f4c) | Added colors model, data and service |
| 14 | [Search UI](https://github.com/kobi2294/OracleWeek2019/commit/38b7583d05d24bc44c6602e198c513e25faf12ea) | Added search box and results presentation |
| 15 | [Keyword Subject](https://github.com/kobi2294/OracleWeek2019/commit/1d353ca6c374971f47c8d3898ef9e008bf389bf8) | Keyword is now an behavior subject updated from the UI on evey keypress |
| 16 | [Debounce and Distinct](https://github.com/kobi2294/OracleWeek2019/commit/d4cf92fedda6442aa016a737ae421ea52ec9ae1f) | Created a `Search$` observable which sends an event for each required search |
| 17 | [Results](https://github.com/kobi2294/OracleWeek2019/commit/0bba10d8655ced52dfc9ce5e1d59ead496e9bbb6) | The results observable now uses switchMap to notify when new results are available |
| 18 | [Busy](https://github.com/kobi2294/OracleWeek2019/commit/a339270b90955eed28fef1d4cdf04ddebf461dda) | Added observable that indicated the busy state, and an animated busy indicator |
