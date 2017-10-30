# Contributing Guide

Welcome to create [Pull Requests](https://github.com/moajs/moa-frontend/pulls) or open [Issues](https://github.com/moajs/moa-frontend/issues) for bugfix, doc, example, suggestion and anything.

## Branch Management

```
master   <--- PR(hotfix/typo)
 ↑
dev
 ↑ PR
action(feature/bugfix)
```  
Branches

0. `master` branch
    0. `master` is the latest (pre-)release branch.
0. `dev` branch
    0. `dev` is the stable developing branch. [Github Release](https://help.github.com/articles/creating-releases/) is used to publish a (pre-)release version to `master` branch.
    0. ***It's RECOMMENDED to commit hotfix (like typo) or feature PR to `dev`***.

### Branch Name 

```
{action}-{shortName}
```

* `{action}`
    * `feature`: checkout from `dev` and merge to `dev` later. If `{module}` not exists, merge to `dev`
    * `bugfix`: like `feature`, for bugfix only
    * `hotfix`: checkout from `master` or release `tag`, merge to `master` later. If `master` not exists, merge to `dev`

for example:

* `bugfix-background-color`
* `feature-css-optimize`

## Commit Log

```
{action} {description}
```

* `{action}`
    * `add` new feature
    * `update` some issues
    * `remove` deprecated code
    * `fix` bug
* `{description}`
    * It's ***RECOMMENDED*** to close issue with syntax `fix #123`, see [the doc](https://help.github.com/articles/closing-issues-via-commit-messages/) for more detail. It's useful for responding issues and [release flow](https://github.com/alibaba/weex/releases/tag/v0.5.0).

for example:

* `add resize for engine`
* `fix #123`
* `remove createTimeline() api`


## Pull Request

[Create Pull Requests](https://github.com/moajs/moa-frontend/compare).

## Code Style Guide

You need add doc && test for your code, and run ci firstly before creating a pull requests.