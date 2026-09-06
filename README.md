<p align="center">
  <img src="./assets/readme/hero.gif" width="100%" alt="阅读吸收驾驶舱——Obsidian 看板插件：未读/在读/已读三列笔记卡片、年度 365 天阅读热力图逐渐点亮、62% 已沉淀进度环。">
</p>

<h1 align="center">Baixiao Reading Cockpit · 阅读吸收驾驶舱</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Obsidian-1.5.0%2B-7c3aed.svg" alt="Obsidian 1.5.0+">
  <img src="https://img.shields.io/badge/version-1.0.3-00e676.svg" alt="v1.0.3">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="MIT License"></a>
</p>

**一个面向 Obsidian 的原生阅读状态与知识沉淀看板插件。** 扫描 Vault 中的 Markdown 笔记，按阅读状态与吸收状态分组看板，并支持从看板直接把状态写回笔记。

Baixiao Reading Cockpit helps you manage reading progress and turn notes into a reviewable knowledge workflow — dashboard, queue, annual heatmap, all local.

## 功能

- 扫描 Vault 中的 Markdown 笔记，按阅读状态和吸收状态生成看板
- 支持未读、在读、已读，以及待沉淀、已沉淀、无需沉淀状态
- 支持阅读队列、搜索、详情查看和状态写回笔记 YAML 属性
- 支持 3D 环绕笔记卡片、年度阅读时间轴和统计卡片
- 统计卡支持 WebGL 流体效果；WebGL 不可用时自动降级为 CSS 效果
- 支持紧凑布局、统计卡材质、颜色、速度和交互设置
- 年度阅读热力图在宽屏和紧凑侧栏中都会渲染，窄栏可横向查看 365 天热力格
- 个人 IP（品牌标识、品牌名称、头像文字、显示名称、身份说明）可在流体卡片设置中自定义

## 安装

**社区插件市场（推荐）**：

1. 打开 Obsidian → **设置 → 社区插件**
2. 搜索 **Baixiao Reading Cockpit** 并安装
3. 启用插件，通过命令面板或左侧 Ribbon 打开「阅读吸收驾驶舱」

**手动安装**：将以下三个文件放入 Vault 的 `.obsidian/plugins/ycs-reading-dashboard/` 目录，重启 Obsidian 并启用：

```text
main.js
styles.css
manifest.json
```

## 使用

- 打开看板，查看未读、在读、已读与长期未动的笔记
- 在阅读队列和详情面板中修改笔记 frontmatter 的 `阅读状态` 与 `吸收状态`
- 在主看板与紧凑侧栏中查看年度阅读热力图
- 打开流体卡片设置，调整默认视觉风格与个人身份标识

插件只在本地读写 Markdown frontmatter，不上传笔记，也不调用远程 AI 服务。

## 配置

默认视觉配置内置于 `main.js`，安装即可使用当前的流体颜色、透明度、字体比例和 3D 卡片布局。个人修改由 Obsidian 保存到插件目录的 `data.json`（本地运行状态，不提交仓库），不会影响其他用户的配置。

## 开发与验证

发布结构为无需构建的原生 Obsidian 插件：

```text
main.js        插件逻辑与视图
styles.css     插件样式与动效
manifest.json  插件元数据
```

```bash
node --check main.js
node tests/reading-dashboard-contract.test.js
```

## 兼容性

- Obsidian 1.5.0 及以上
- `isDesktopOnly` 为 `false`；WebGL 不可用时使用 CSS 降级效果

## License

[MIT](LICENSE)，详见根目录 `LICENSE` 文件。
