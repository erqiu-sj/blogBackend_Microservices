"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoleIDAccordingToRole = exports.header = exports.roles = exports.jwtConstants = void 0;
exports.jwtConstants = {
    secret: 'Qsj.0228',
};
exports.roles = {
    admin: 'admin',
    normalUser: 'normalUser',
};
exports.header = {
    authorization: 'authorization',
};
const rolesId = {
    admin: 1,
    normalUser: 2,
};
function getRoleIDAccordingToRole(type) {
    return rolesId[type];
}
exports.getRoleIDAccordingToRole = getRoleIDAccordingToRole;
//# sourceMappingURL=constants.js.map