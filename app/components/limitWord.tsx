 import React from 'react'
export function LimitWords({words, limit=10}) {
const abc= words;
  return (
    <>
    {abc?.length > limit ? abc.slice(0,limit) + '...' : abc}
    </>
  )
}