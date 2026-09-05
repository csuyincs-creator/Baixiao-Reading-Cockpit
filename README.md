# 阅读吸收驾驶舱

一个面向 Obsidian 的原生阅读状态与知识沉淀看板插件。

## 功能

- 扫描 Vault 中的 Markdown 笔记，按阅读状态和吸收状态生成看板。
- 支持未读、在读、已读，以及待沉淀、已沉淀、无需沉淀状态。
- 支持阅读队列、搜索、详情查看和状态写回笔记 YAML 属性。
- 支持 3D 环绕笔记卡片、年度阅读时间轴和统计卡片。
- 统计卡支持 WebGL 流体效果；WebGL 不可用时自动降级为 CSS 效果。
- 支持紧凑布局、统计卡材质、颜色、速度和交互设置。
- 年度阅读热力图在宽屏和紧凑侧栏中都会渲染，窄栏可横向查看 365 天热力格。
- 个人 IP（品牌标识、品牌名称、头像文字、显示名称、身份说明）可在流体卡片设置中自定义。

## 默认配置

当前视觉配置已经写入 `main.js` 的默认值，首次安装即可使用当前的流体颜色、透明度、字体比例和 3D 卡片布局。用户在设置面板中的修改仍会保存到本地 `data.json`，不会覆盖其他用户的配置。

互动眼镜已从插件界面、设置、事件和样式中移除。

## 安装

将以下三个文件放入 Vault 的 `.obsidian/plugins/ycs-reading-dashboard/` 目录：

```text
main.js
styles.css
manifest.json
```

然后在 Obsidian 的“设置 → 社区插件”中启用“阅读吸收驾驶舱”。

## 开发

当前发布结构是无需构建的原生 Obsidian 插件：

```text
main.js       插件逻辑与视图
styles.css    插件样式与动效
manifest.json 插件元数据
```

插件设置由 Obsidian 保存到插件目录中的 `data.json`。该文件属于本地运行状态，不应提交到仓库。

## 验证

```powershell
node --check main.js
node tests/reading-dashboard-contract.test.js
```

## 兼容性

- Obsidian 1.5.0 及以上
- `isDesktopOnly` 为 `false`；WebGL 不可用时使用 CSS 降级效果
