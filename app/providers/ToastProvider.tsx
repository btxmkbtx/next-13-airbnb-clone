"use client";

import { Toaster } from "react-hot-toast";

/**
 * 为什么不直接在root layout中使用<Toaster />，而要做这样一层封装？
 * 因为Toaster只能用于client组件，去掉"use client"就可以看到报错
 */
const ToasterProvider = () => {
  return <Toaster />;
};

export default ToasterProvider;
