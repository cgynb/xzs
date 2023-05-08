<template>
    <a-space direction="vertical" size="large" :style="{width: '100%'}">
      <a-tabs position="left" size="large" type="card-gutter">
        <a-tab-pane key="1" title="个人资料">
          name, phone...
          update password
        </a-tab-pane>
        <a-tab-pane key="2" title="购买记录">
          待支付，已成交，已退款
        </a-tab-pane>
        <a-tab-pane key="3" title="我发布的">
          上架，审核中，已出售
        </a-tab-pane>
        <a-tab-pane key="4" title="我的钱包">
          固定面额充值，提现
        </a-tab-pane>
      </a-tabs>
    </a-space>
  </template>
  
  <script>

  </script>
  