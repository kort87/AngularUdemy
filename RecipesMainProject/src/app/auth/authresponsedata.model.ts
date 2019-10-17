export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}
