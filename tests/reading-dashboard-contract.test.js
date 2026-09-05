const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const mainPath = path.join(__dirname, "..", "main.js");
const stylesPath = path.join(__dirname, "..", "styles.css");
const main = fs.readFileSync(mainPath, "utf8");
const styles = fs.readFileSync(stylesPath, "utf8");

function expectMatch(value, pattern, message) {
  assert.match(value, pattern, message);
}

function expectAbsent(value, pattern, message) {
  assert.doesNotMatch(value, pattern, message);
}

expectMatch(main, /const IDENTITY_DEFAULTS\s*=\s*\{/, "个人 IP 应有可校验的默认配置");
expectMatch(main, /identitySettings\s*\(/, "个人 IP 应通过设置读取并校验");
expectMatch(main, /brandMark|brandName|avatarText|displayName|role/, "个人 IP 字段应进入代码配置");
expectMatch(main, /quality:\s*[\"']high[\"']/, "应把当前流体质量写入默认配置");
expectMatch(main, /fontScale:\s*1\.15/, "应把当前字体比例写入默认配置");
expectMatch(main, /className\s*=\s*[\"']ycs-timeline ycs-compact-timeline[\"']/, "紧凑模式应创建年度热力图容器");
expectMatch(main, /this\.renderAnnualReadingTimeline\(\);/, "年度热力图应在所有布局中调用");
expectAbsent(main, /if\s*\(!this\.isCompact\(\)\)\s*this\.renderAnnualReadingTimeline\(\)/, "年度热力图不应再被紧凑模式条件屏蔽");
expectMatch(main, /data-identity-settings/, "设置面板应包含个人 IP 设置区");

for (const value of [main, styles]) {
  expectAbsent(value, /ycs-title-eye|ycs-glasses|installTitleEye|applyGlassesAppearance|dashboardSettings\.glasses|data-glasses/, "互动眼镜代码应全部移除");
}

console.log("reading-dashboard-contract: all assertions passed");
