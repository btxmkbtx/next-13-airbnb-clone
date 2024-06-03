"use client";

import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

/**
 * 这个容器组件是为解决可能会遇到的下面这个错误
 * Error: Text content does not match server-rendered HTML
 * 在服务器端渲染了客户端组件，这个错误可能是Nextjs13中的内部Bug，现在这个Bug应该已经被解决掉了。
 */
const ClientOnly = ({ children }: Props) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
