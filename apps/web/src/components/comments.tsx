"use client";

import Giscus from "@giscus/react";
import type { GiscusProps } from "@giscus/react";

function Comments({ giscusConfig }: { giscusConfig: GiscusProps }) {
  // 暂时禁用giscus评论系统
  return (
    <div className="mt-10 p-4 border border-gray-700 rounded-md">
      <p className="text-center text-gray-400">Comment disabled at the moment :(</p>
      {/* 
      <Giscus
        id={giscusConfig.id}
        repo={giscusConfig.repo}
        repoId={giscusConfig.repoId}
        category={giscusConfig.category}
        categoryId={giscusConfig.categoryId}
        mapping={giscusConfig.mapping}
        term={giscusConfig.term}
        reactionsEnabled={giscusConfig.reactionsEnabled}
        emitMetadata={giscusConfig.emitMetadata}
        inputPosition={giscusConfig.inputPosition}
        theme={giscusConfig.theme}
        lang={giscusConfig.lang}
        loading={giscusConfig.loading}
      />
      */}
    </div>
  );
}

export default Comments;
