/*
 * @Author: 邱狮杰
 * @Date: 2023-03-14 10:47:39
 * @LastEditTime: 2023-03-14 11:21:50
 * @Description:
 * @FilePath: /backend/packages/bootstrap/src/rpcConstans/db.ts
 */

export const DBRpcConstans = {
  member: {
    createUser: 'db_createUser',
    createUserForGithub: 'db_createUserForGithub',
    deleteUser: 'db_deleteUser',
    putUser: 'db_putUser',
    queryUser: 'db_queryUser',
  },
  article: {},
} as const
