# 赛博鸡蛋 · Cyber Egg

国内外免费 AI Tokens 资源的静态导航站。纯前端实现，无后端运行时，构建产物可直接部署到 Cloudflare Pages。

## 核验结论摘要（截至 2026-11-18）

| 指标 | 结果 |
| --- | --- |
| 收录条目 | 26 条：国内 15 / 国外 11 |
| 长期免费（`permanent`） | 12 条，可用页面「仅长期免费」一键筛选 |
| 按日重置 | 3 条；按月刷新 1 条 |
| 一次性新客额度 | 8 条；限时试用 2 条 |
| 可信度 | 官方核验 10 / 交叉核对 14 / 待自查 2 |
| 核验时效 | 23 条在 2026 年 11 月核验，3 条为 10 月下旬 |

核验口径分为三级，直接展示在每张卡片上：

- **官方核验**：能在服务商定价页、控制台文档或 rate limits 页面找到对应口径。
- **交叉核对**：两个及以上聚合源口径一致，但未找到稳定的官方公示页；数值按保守值记录。
- **待自查**：仅社区或第三方提及、政策变动频繁、或需要绑定支付方式，使用前必须到控制台确认。

## 本次核查发现的主要问题与修正

| 条目 | 原描述的问题 | 修正后的口径 | 可信度 |
| --- | --- | --- | --- |
| Hugging Face Inference | 误标为「免费推理额度」 | 免费账户月度额度已于 **2026-10-07 取消**，需购买 credits；PRO 用户每月含 $2 | 高 |
| DeepSeek | 笼统写「注册赠送余额」 | 新开发者一次性 **500 万 tokens / 约 30 天**，无永久免费 API 层；网页/App 免费不等于 API 免费 | 高 |
| Moonshot Kimi | 暗示存在免费层 | 免费层已从官网撤下，仅新用户实名赠约 **15 元 / 800 万 tokens / 3 个月**；部分来源称需先充值 | 中 |
| 硅基流动 | 「部分模型永久免费」过于绝对 | 0 元模型集中在 Embedding / OCR / 语音 / 翻译等非对话场景；对话永久免费仅为社区口径 | 中 |
| 阿里云百炼 | 未标注有效期与冲突口径 | 约每模型 100 万 tokens、合计 7000 万+、约 **90 天**；「永久」说法与官方口径冲突，按保守值记录 | 中 |
| 腾讯云混元 | 未区分长期档与活动包 | 混元 Lite 长期免费；新人包每模型 100 万 tokens、**1 年**，属活动权益 | 高 |
| 百度千帆 | 未区分免费档与赠额 | ERNIE-Speed / Lite 长期免费；新用户每模型 100 万 tokens / **3 个月** | 高 |
| 讯飞星火 | 「免费套餐」过于笼统 | Spark Lite 永久免费但限速约 2 QPS；大额新客包是活动制，注意自动续扣勾选 | 高 |
| Mistral | 仅写「免费层」 | Free 方案约 **$10/月 API credits**，Experiment 层速率受限；控制台与定价页口径不一致 | 中 |
| Cerebras / SambaNova | 未收录 | Cerebras 永久免费层已于 2026-07 取消，改为约 $5/30 天试用；SambaNova 免费档收紧且需绑卡 | 中 / 低 |
| Together AI | 写「注册赠送额度」 | 约 $25 赠金仅见于第三方，官方页未稳定公示且通常需绑卡 | 低 |
| Google Gemini / Groq / OpenRouter / Cloudflare Workers AI | 描述过粗 | 补充按模型限额、请求数、Neurons 计量单位与数据使用条款 | 高 |

## 新增来源清单

| 来源 | 分类 | 免费额度 / 限制 | 有效期 | 可信度 | 核验时效 |
| --- | --- | --- | --- | --- | --- |
| 火山引擎方舟（豆包） | 国内 | 实名后每日约 200 万 tokens；单模型安心体验 50 万 | 每日 | 高 | 2026-11-12 |
| 魔搭 ModelScope | 国内 | 约 2000 次 / 日，单模型约 500 次 / 日 | 每日 | 中 | 2026-11-12 |
| 商汤 SenseNova Token Plan | 国内 | 长期免费公测，配额每 5 小时刷新 | 长期 | 中 | 2026-11-12 |
| 七牛云 AI | 国内 | 约 600 万 tokens 无时效；GLM-4.5-Air 永久免费档 | 长期 | 中 | 2026-11-12 |
| 阶跃星辰 Model Lab | 国内 | 多款 0 元模型长期可用，并发约 1 | 长期 | 中 | 2026-11-12 |
| 美团 LongCat | 国内 | 新用户约 1000 万 tokens / 30 天；每日免费已失效 | 一次性 | 中 | 2026-11-12 |
| 华为云开发者空间 | 国内 | 免费约 100 万 tokens；另有 1 元购千万活动 | 一次性 | 中 | 2026-11-12 |
| GitHub Models | 国外 | 约 15 RPM、150~1000 RPD，无需绑卡 | 长期 | 中 | 2026-10-21 |
| NVIDIA NIM | 国外 | 注册赠约 1000 credits，100+ 模型 | 一次性 | 中 | 2026-10-21 |
| Cerebras | 国外 | 约 $5 / 30 天试用，需绑卡 | 试用 | 中 | 2026-11-12 |
| SambaNova | 国外 | 免费档已收紧，多为需绑卡试用期 | 试用 | 低 | 2026-11-12 |

## 明确不收录的类型

- **OpenAI / Anthropic 官方 API**：官方页面无常设免费层，仅有极小或未公示的注册额度。
- **Cohere 之外的纯试用金**：如 Fireworks $1 等，额度过小、不具备持续使用价值。
- **网页版 / App 对话免费**：不属于 API token 资源，容易误导开发者。
- **限免到期的活动**：如 LongCat 每日免费、Cerebras 永久免费层等，已在正文标注失效或改为试用。

## 信息架构

```
首页（单页）
├── 顶部导航：品牌标识 + 锚点导航（资源库 / 关于）
├── 品牌 Hero：主标题、副标题、资源统计（总数 / 国内 / 国外）
├── 资源库
│   ├── 分类切换：全部 / 国内 / 国外
│   ├── 关键词搜索：名称、简介、额度、标签、领取提示、核验来源
│   ├── 快捷筛选：仅长期免费
│   ├── 可信度图例：官方核验 / 交叉核对 / 待自查
│   └── 资源卡片：分类徽章、额度摘要、有效期、简介、标签、领取提示、注意事项、可信度与核验日期
└── 页脚：数据说明与免责声明
```

## 本地开发

```bash
npm install
npm run dev      # 本地开发服务器
npm run build    # 类型检查 + 构建到 dist/
npm run preview  # 预览构建产物
```

## 数据维护

所有资源集中在 [`src/data/tokens.json`](src/data/tokens.json)，结构由 [`src/types.ts`](src/types.ts) 中的 `TokenResource` 约束：

```ts
interface TokenResource {
  id: string;
  name: string;
  category: 'domestic' | 'overseas';
  description: string;
  tags: string[];
  link: string;
  accessNote?: string;
  quota: string;                                  // 免费额度与限制摘要
  validity: 'permanent' | 'daily' | 'monthly' | 'one-time' | 'trial' | 'unknown';
  validityNote: string;                           // 有效期、重置规则与限制说明
  reliability: 'high' | 'medium' | 'low';         // 信息可信度
  source: string;                                 // 核验依据简述
  updatedAt: string;                              // 数据最后修改日 YYYY-MM-DD
  verifiedAt: string;                             // 信息核验日 YYYY-MM-DD
}
```

**维护建议**：每 4~6 周复核一次；优先改官方定价页 / 控制台口径；数值冲突时取保守值并写入 `validityNote`；无法确认的条目降级为 `low` 而不是直接删除。新增条目后分类、搜索、统计与「仅长期免费」按钮会自动更新。数据在构建期以 ES Module 导入，不产生额外网络请求；修改数据后需重新构建。

## Cloudflare Pages 部署

1. 将项目推送到 GitHub / GitLab 仓库。
2. 进入 Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**，选择该仓库。
3. 构建配置：
   - Framework preset：`Vite`
   - Build command：`npm run build`
   - Build output directory：`dist`
   - Root directory：`/`（项目根目录）
4. 在 **Environment variables** 中添加 `NODE_VERSION = 20`，保证构建环境与本地一致。
5. 保存并部署。初始获得 `*.pages.dev` 自带域名；PR 预览部署默认开启。
6. 后续更换域名：项目设置 → **Custom domains** → **Add custom domain**，按提示完成 DNS 验证。`public/_headers` 已包含基础安全响应头与静态资源缓存策略。

## 后续扩展方向

- 增加「额度变动历史」时间线，记录每次调整的来源与日期。
- 接入 Cloudflare Workers + D1/KV，支持用户投稿、审核与后台管理。
- 增加按核验日期排序、标签筛选与本地收藏。
- 增加多语言与明暗主题切换。
- 数据迁移至 CMS 或外部 API，实现无需重新构建的更新。
