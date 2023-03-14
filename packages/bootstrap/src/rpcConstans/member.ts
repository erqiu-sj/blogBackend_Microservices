/*
 * @Author: 邱狮杰
 * @Date: 2023-03-14 10:47:47
 * @LastEditTime: 2023-03-14 10:52:16
 * @Description:
 * @FilePath: /backend/packages/bootstrap/src/rpcConstans/member.ts
 */

export const MemberRpcConstans = {
  article: {},
  db: {
    createUser: 'member_createUser',
    deleteUser: 'member_deleteUser',
    putUser: 'member_putUser',
    queryUser: 'member_queryUser',
  },
} as const
