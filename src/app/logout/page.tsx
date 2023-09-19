'use client'

import { redirect } from 'next/navigation'
import { useEffect, useState } from "react";

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  useEffect(()=>{
    localStorage.removeItem('accessToken');
    redirect('/')
  })
  return <h1>Logout....</h1>;
}