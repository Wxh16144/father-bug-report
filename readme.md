# father-bug-report

> 一个简单的 umd 构建 bug 报告

我在 package.json 中配置了 exports 字段。并且使用了 umd 构建。

比如 foo 的 package.json 中配置了 exports utils 字段，那么在使用的时候，就可以这样使用：

```js
import { add } from 'foo/utils';
// 而不是
import { add } from 'foo/es/utils';
```

接着我在 bar 中依赖了 foo，但是在使用的时候，同样在 utils 中使用 add 方法，但是构建的时候就有 bug

```js
import { add } from 'foo/utils';

export const add2 = (a) => add(a, 2);
```

<details>
  <summary>system info</summary>
  
```
  System:
    OS: macOS 13.4
    CPU: (10) arm64 Apple M1 Pro
    Memory: 129.53 MB / 32.00 GB
    Shell: 5.9 - /bin/zsh
  Binaries:
    Node: 16.20.0 - ~/.nvm/versions/node/v16.20.0/bin/node
    Yarn: 1.22.19 - ~/.nvm/versions/node/v16.20.0/bin/yarn
    npm: 8.19.4 - ~/.nvm/versions/node/v16.20.0/bin/npm
    Watchman: 2023.03.27.00 - /opt/homebrew/bin/watchman
  Browsers:
    Chrome: 115.0.5790.98
    Safari: 16.5
```

</details>
