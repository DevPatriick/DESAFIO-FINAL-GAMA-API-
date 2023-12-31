import { CommonRoutesConfig } from "./common.routes";
import express from 'express'
import loginAuthUsecase from "../../../domain/usecases/auth/login.auth.usecase";
import authController from "../controllers/auth.controller";


export class AuthRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'AuthRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route('/login')
            .post(
                authController.login
            );

        return this.app;
    }
}