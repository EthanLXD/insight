# Insight 调查

专业私人调查与商业情报网站。

## 工程结构

```
insight/
├── public/                 # 静态资源（favicon 等）
├── src/
│   ├── config/             # 配置层：应用与路由常量
│   │   └── index.js
│   ├── constants/         # 常量层：导航/区块结构（单一数据源）
│   │   ├── index.js
│   │   └── sections.js
│   ├── i18n/              # 国际化：语言切换与文案
│   │   ├── index.js
│   │   └── locales/
│   │       ├── zh.js
│   │       └── en.js
│   ├── core/              # 核心逻辑：路由、导航控制
│   │   ├── Router.js
│   │   ├── NavController.js
│   │   └── index.js
│   ├── components/        # 通用组件
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── index.js
│   ├── pages/             # 页面模块（按区块分离，便于协作）
│   │   ├── Home.js
│   │   ├── Services.js
│   │   ├── Solutions.js
│   │   ├── About.js
│   │   ├── Contact.js
│   │   └── index.js
│   ├── styles/            # 样式（变量 / 基础 / 布局 / 组件）
│   │   ├── variables.css
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   └── index.css
│   ├── App.js             # 应用壳：组装与路由/语言响应
│   └── main.js            # 入口
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 开发流程

```bash
# 安装依赖
npm install

# 开发（热更新）
npm run dev

# 构建生产
npm run build

# 预览构建结果
npm run preview
```