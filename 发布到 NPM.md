# 如何发布到 NPM

1. 访问 https://www.npmjs.com/ 注册账号
2. 如果本机使用了 npm 镜像，需要切换到 https://registry.npmjs.org/
3. `npm login` 登录 NPM 账号
4. 在 package.json 中通过 files 配置要发布的文件路径
5. `npm publish` 发布当前项目
6. `npm unpublish pkg-name` 撤回名为 pkg-name 的 NPM 包
7. `npm version patch` 补丁级别的版本更新，修改版本号第 3 位
8. `npm version minor` 增加新特性，但能够向后兼容的小版本更新，修改版本号第 2 位
9. `npm version major` 增加新特性，无法向后兼容的大版本更新，修改版本号第 1 位