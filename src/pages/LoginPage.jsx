import React from 'react'

const LoginPage = () => {
  return (
    <main className="page login-page">
      <h1>Login</h1>
      <form>
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Password
          <input type="password" placeholder="********" />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </main>
  )
}

export default LoginPage
