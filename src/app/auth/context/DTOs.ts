export interface Login {
    UserName: string,
    Password: string,
    grant_type: string
  }
export interface CreateAccount {
    username:string,
    password:string,
    email:string
}
  export interface LoginResponse {
    token: string,
    userId: string,
  }