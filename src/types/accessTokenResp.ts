export interface AccessToken extends Response {
  access_token: string;
  certificate_id: number;
  expires_in: number;
  id_token: string;
  refresh_token: string;
  scope: string;
  token_type: string;
  system_id: number;
}
