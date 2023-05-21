'use client';
import Image from 'next/image'
import styles from './page.module.css'
import Jwt from 'jsonwebtoken'
import React, { useEffect, useState } from 'react'
import useCookies from 'react-cookie/cjs/useCookies'
import Link from 'next/link';


export default function Home() {

  const [token, setToken] = useState('')
  const [cookies, setCookie,removeCookie] = useCookies(['token']);
  useEffect(() => {

    const gettoken = cookies.token

    if (gettoken) {
      setToken(gettoken)
    }
    
  }, [token])

  const tokenHandler = async (e) => {
    e.preventDefault()

    //トークンを発行する
    const token = Jwt.sign({ name: "test" }, process.env.NEXT_PUBLIC_SECRET_KEY, { expiresIn: "1h" })
    setToken(token)
    setCookie("token", token)
  }

  const deleteHandler = async (e) => {
    e.preventDefault()

    //トークンを削除する
    setToken('')
    removeCookie("token")
  }
  return (
    <>
      <main className="container">
        <h1>ミドルウェアのテスト</h1>
        <p>トークを発行して有効期限は2分として、有効だった場合は以下はトークンが有効だった場合のみページが見れるようにする</p>

        <div className='token-box'>
          <h2>トークン</h2>
          <p>トークンは有効期限が2分のものを発行しています。<br/>
          発行されていてトークンが有効であれば下記のページが見れる。</p>
          <p className='link-txt'><Link href={"/limitedpage"}>トークが有効なら見れるページ</Link></p>
          <p>トークン：{token ? (
            <span>{token}</span>
          ) : (
            <span>トークンは発行されていません</span>
          )}</p>

          <button onClick={(e) => tokenHandler(e)}>トークンを発行する</button><br/>
          <button onClick={(e) => deleteHandler(e)}>トークンとクッキーを削除</button>
        </div>
      </main>
    </>
  )
}
