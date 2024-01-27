import { HttpService } from "./http";
import { AccessToken } from "../types/accessTokenResp";

const httpService = new HttpService();

async function getAccessToken(): Promise<AccessToken> {
  return httpService.post("/Authorization/OAuth2/access_token", {
    grant_type: "client_credentials",
  });
}

async function execSql(query: string): Promise<Array<string>> {
  const data = {
    DataSource: {
      CommandText: `SELECT TOP 5 * FROM R1926Works WHERE name LIKE '%${query}%';`,
    },
    Params: {},
  };
  const header = {
    Authorization: `${(await getAccessToken()).id_token}`,
  };
  return httpService.post("/WorkFlow/FlowProcess/ExecSql", data, {
    headers: header,
  });
}

export { getAccessToken, execSql };
