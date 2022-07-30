export default ({ store, redirect, route }) => {

  if (route.fullPath === `/login`) {
    return  
  } 

  if(!store.state.auth.isAuthed) { 
    return redirect(`/login`)
  }

}