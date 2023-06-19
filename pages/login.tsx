import { signIn } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default function login() {
  const [id, setId] = React.useState('')

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        signIn('credentials', {
          redirect: false,
          id
        }).then(res => { console.log('success', res) }).catch(err => { console.log('error', err) })
      }}>
        <input type="text" placeholder="Id" name='id' onChange={e => setId(e.target.value)} />
        <input type="submit" value="Login" />
      </form>
      <Link href="/">Back</Link>
    </div>
  )
}
