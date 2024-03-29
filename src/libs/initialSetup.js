import Role from '../models/Role';
import moduleName from '../models/Role'

export const createRoles = async () => {
    const count = await Role.estimateDocumentCount()
    if(count > 0) return;
    const values = await Promise.all([
        new Role({name: 'user'}).save(),
        new Role({name: 'moderator'}).save(),
        new Role({name: 'admin'}).save()
    ]) ,
    
}