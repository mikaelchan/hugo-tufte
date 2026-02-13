---
title: "功能演示"
date: 2026-02-13
---

行内公式：$E=mc^2$。

这是一个 Tufte 样式的侧边注释{{< sidenote label="1" >}}侧边注释支持 **Markdown**，适合补充说明或引用。{{< /sidenote >}}，不打断主线阅读。

$$
f(x)=\int_{-\infty}^{\infty} e^{-x^2} dx
$$

```mermaid
sequenceDiagram
  participant U as User
  participant H as Hugo
  U->>H: Write markdown
  H-->>U: Beautiful page
```
