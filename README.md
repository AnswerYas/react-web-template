### 设计规范

标题：16px;
小标题：14px;
正文：12px;

主题色：#121212;

.
├── README.md                           项目介绍
├── build                               构建目录
│   ├── build.js                        生产环境构建脚本
│   ├── check-versions.js               版本检查
│   ├── webpack.base.config.js          webpack基本配置
│   ├── webpack.dev.config.js           webpack开发环境配置
│   └── webpack.prod.config.js          webpack生产环境配置
├── config                              配置文件目录
│   ├── dev.env.js                      开发环境配置
│   ├── index.js                        项目配置
│   └── prod.env.js                     生产环境配置
├── package.json                        项目依赖json
├── public                              公共资源目录
│   ├── favicon.ico                     系统标签页图标
│   └── index.html                      系统主入口
├── scripts                             系统脚本目录
│   └── client                          
│       ├── dev.sh                      开发环境脚本
│       └── prod.sh                     生产环境脚本
├── src                                 项目资源文件夹
│   ├── assets                          静态资源文件夹
│   │   ├── icons                       icons文件夹
│   │   └── images                      图片文件夹
│   ├── components                      公共组件文件夹
│   ├── i18n                            多语言文件夹
│   │   ├── index.tsx                   多语言入口文件
│   │   └── locales                     多语言翻译文件夹
│   ├── index.tsx                       项目主入口文件
│   ├── pages                           页面文件夹
│   │   ├── app                         主框架页面
│   │   ├── conditionMonitoring         Condition Monitoring页面
│   │   ├── eventSolve                  Event Solving页面
│   │   ├── exception                   异常处理文件夹
│   │   ├── healthAnalysis              Health Analysis页面
│   │   └── healthRecords               Health Records页面
│   ├── routers                         路由文件夹
│   │   ├── conditionMonitoring.ts      Condition Monitoring页面路由以及子路由
│   │   ├── eventSolve.ts               Event Solving页面路由以及子路由
│   │   ├── healthAnalysis.ts           Health Analysis页面路由以及子路由
│   │   ├── healthRecord.ts             Health Records页面路由以及子路由
│   │   └── index.tsx                   路由主入口
│   ├── store                           redux文件夹
│   │   ├── actions                     所有的actions
│   │   ├── index.tsx                   redux入口文件
│   │   ├── middlewares                 中间件
│   │   └── reducers                    所有的reducers
│   ├── style                           样式文件夹
│   │   ├── common.less                 公共样式
│   │   └── variable.less               变量
│   ├── typings.d.ts                    ts默认类型
│   └── utils                           工具文件夹
│       └── index.ts
├── static                              项目不用参与打包的静态资源
├── theme.js                            antd主题覆盖文件
├── tsconfig.json
├── yarn-error.log
└── yarn.lock

