import Head from '@docusaurus/Head'
import { useBlogPostStructuredData } from '@docusaurus/plugin-content-blog/client'
import React from 'react'

export default function BlogPostStructuredData() {
  const structuredData = useBlogPostStructuredData()
  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Head>
  )
}
