# 教程

油管：https://www.youtube.com/watch?v=c_-b_isI4vg&t=1240s
毕站：https://www.bilibili.com/video/BV1is4y1X7NT/?spm_id_from=333.788&vd_source=79b6a16f68636d3302661476b201b932
原版代码属于收费教程,此代码来自其他学习者：https://github.com/alohadancemeow/next-13-airbnb-clone/tree/main

# 工程结构

## actions

查询操作都写在了 action 中，这么设计的原因是因为项目导入了 prisma，通过 prisma 可以直接交互 DB，就不需要通过传统的 api 调用来 get 数据。
当然，如果没有 prisma 的支持，我们也可以把这些 getAPI 封装在路由中，再通过 axios 调用。

## api

增删改的操作都封装在了 next 路由 API 中，方便在客户端组件中直接 axios 调用 api。
