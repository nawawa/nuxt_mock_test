export default function ({redirect, route, app}) {

  const authenticated = app.$cookiz.get("authenticated")
  const isLoginPage = route.path === '/login'

  if (!authenticated && !isLoginPage) {
    return redirect('/login')
  }

}