

const saveAuthUser = (user: any) => {
    localStorage.setItem("TODO_MANAGEMENT_USER", JSON.stringify(user))
}

const getAuthUser = () => {
   const user = localStorage.getItem("TODO_MANAGEMENT_USER");

   if(user){
       return JSON.parse(user)
   }
   return null;
}


export { saveAuthUser, getAuthUser }
