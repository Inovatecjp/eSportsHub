import { Sequelize } from "sequelize"
import sequelize from "../../../config/db"
import authenticationModelSequelize from "./authenticationModelSequelize"
import externalAuthenticationModelSequelize from "./externalAuthenticationModelSequelize"
import profileModelSequelize from "./profileModelSequelize"
import grantsModelSequelize from "./grantsModelSequelize"

const models = {
    authenticationModelSequelize,
    externalAuthenticationModelSequelize,
    profileModelSequelize,
    grantsModelSequelize,
}

function initModels (sequelize: Sequelize):void {
    Object.values(models)
    .filter(model => typeof model.initModel === 'function')
    .forEach(model => model.initModel(sequelize))
}

function associateModels (): void  {
    Object.values(models)
        .filter(model => typeof model.associate === 'function')
        .forEach(model => model.associate(models))
}

initModels(sequelize)
associateModels()

console.log(models)

export {
    models
}