import UserTemplate from '@/app/user_template/page'
import React from 'react'

export default function BlogDetail({params}) {
  return (
    <UserTemplate>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">BlogDetail blogid: {params.blog_detail}</div>
    </UserTemplate>
  )
}
