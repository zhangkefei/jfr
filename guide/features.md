---
title: 功能
---
# 功能 {#features}

JFR 可以让开发者为js软件包设置价格，也可以让使用者方便地购买软件包，从而达成交易。JFR 所有功能都是围绕以上目的设计的。NPM 已经将开发相关功能做得比较完善了，JFR 没有必要再实现一遍，因此 JFR 目前只做交易相关功能，NPM 的功能会得到复用。

## 为软件包设置价格

开发者可以使用 `price` 命令为js软件包设置价格。一个软件包默认价格为0，开发者可以设置为任意价格，单位为 **人民币**，支持小数点后两位，也就是说**价格可以精确到分**。开发者最终的收益是软件包价格的70%（平台会收取30%作为日常运营费用）。

:::tip
开发者应该为软件包设置一个合理的价格。如果价格高得离谱，会有其他的开发者发布同样功能且价格合理的软件包，这违背了“不重复造轮子”的原则，也会导致你的软件包得不到广泛的使用，从而影响收益。
:::

:::tip
开源与免费并不冲突。如果你想让自己的软件包免费，将价格设置为零即可。本平台遵循X.Y.Z的语义化版本管理规则。你可以为软件的大版本和中版本设置价格，但是不应该为小版本（bug修复版本）设置价格。也就是说，大版本和中版本相同的软件价格是一样的。
:::

## 购买软件包

使用者在安装软件包依赖时，与传统安装方式稍有不同。如果所依赖的软件包都是免费的，那么与传统的安装方式完全一样。如果依赖的软件包里含有收费的软件，命令行工具会列出需要购买的软件包列表，并给出总价格。得到确认后，将从使用者的帐户余额中，扣除相应的金额。

:::tip
同一个项目对同一个依赖只会收费一次。其他开发者安装依赖包时不会再次收费。
:::

:::tip
如果你是一个组织的成员，在付费时可以选择付款账户，自主决定从个人账户中扣款，还是从组织账户中扣款。
:::

## 用户类型

本平台中的用户类型可以分为 **个人** 和 **组织** 。

### 个人
**个人用户** 对应的是自然人。以自然人的身份发布和购买软件。
### 组织
**组织用户** 对应的是企业和开源组织。个人可以加入组织。组织的帐户余额可供所属个人用户使用。组织用户以组织的身份发布和购买软件，所得收益可以按软件项目自由分配。

## 收益分配
组织发布的软件包可以指定一个所有者。该所有者必须是组织成员，可以对软件包收益按比例分配。
