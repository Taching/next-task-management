import axios from 'axios';
import BaseHttpService from './base-http.service';

export namespace Typ {
  export interface login {
    username: any;
    password: string;
    accessToken: string;
  }
}
export default class AuthService extends BaseHttpService {
  async signin(username: Typ.login, password: Typ.login): Promise<Typ.login> {
    const result = await axios.post<Typ.login>(`${this.BASE_URL}/auth/signin`, {
      username,
      password,
    });
    const accessToken = result.data.accessToken;
    this.saveToken(accessToken);
    return result.data.username;
  }

  async signup(username: Typ.login, password: Typ.login) {
    await axios.post(`${this.BASE_URL}/auth/signup`, { username, password });
  }

  async signout() {
    this.removeToken();
  }
}
