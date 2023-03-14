/*
 * @Author: 邱狮杰
 * @Date: 2023-03-12 20:37:52
 * @LastEditTime: 2023-03-14 10:33:26
 * @Description:
 * @FilePath: /backend/packages/bootstrap/src/config.ts
 */
// service port
export const appPort = {
  logs: 3000,
  member: 3001,
  article: 3002,
  main: 3004,
  db: 3009,
}

export const appClientPorts = {
  logs: appPort.logs,
  member: appPort.member,
  article: appPort.article,
  db: appPort.db,
}
