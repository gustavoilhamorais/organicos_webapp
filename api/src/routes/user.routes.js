const express = require("express");
const router = express.Router();
const User = require("../database/User.schema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const tokenObserver = require("../helpers/verifyJWT");

router.get("/list", tokenObserver, async (request, response) => {
    try {
        const users = await User.findAll();
        response
            .status(500)
            .json({status: 200, data: users, meta: null, message: "success"});
    } catch (error) {
        console.error(error);
        response.status(500).json({
            status: 500,
            message: error.message || error,
            data: [],
            meta: null,
        });
    }
});

router.post("/create", async (request, response) => {
    try {
        const {email, username, password} = request.body;
        const user = await User.find({email: email});
        if (!user.length) {
            if (email && username && password) {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(password, salt);
                await User.create({email, username, password: hash});
                response.status(201).json({
                    status: 201,
                    message: "User created successfully.",
                    data: {email, username},
                });
            } else {
                response.status(400).json({
                    status: 400,
                    message: "Missing email and/or username and/or password information.",
                });
            }
        } else {
            response.status(401).json({
                status: 401,
                message: "Email already registered.",
            });
        }
    } catch (error) {
        console.error(error);
        response.status(500).json({
            status: 500,
            message: error.message || error,
            data: [],
            meta: null,
        });
    }
});

router.put("/edit", tokenObserver, async (request, response) => {
    try {
        const operationStatus = await User.update(request.body, {
            where: {id: request.query.id},
        });
        if (operationStatus[0] === 1) {
            response.status(200).json({
                status: 200,
                data: [],
                meta: null,
                message: `User ${request.query.id} was successfully updated.`,
            });
        } else {
            response.status(404).json({
                status: 404,
                data: [],
                meta: null,
                message: `Could not find the user ${request.query.id}`,
            });
        }
    } catch (error) {
        console.error(error);
        response.status(500).json({
            status: 500,
            message: error.message || error,
            data: [],
            meta: null,
        });
    }
});

router.delete("/remove", tokenObserver, async (request, response) => {
    try {
        const operationStatus = await User.destroy({
            where: {id: request.body.id},
        });
        if (operationStatus === 1) {
            response.status(404).json({
                status: 404,
                data: [],
                meta: null,
                message: `User ${request.body.id} was successfully deleted from users table.`,
            });
        } else {
            response.status(404).json({
                status: 404,
                data: [],
                meta: null,
                message: `Could not find the user ${request.body.id}`,
            });
        }
    } catch (error) {
        console.error(error);
        response.status(500).json({
            status: 500,
            message: error.message || error,
            data: [],
            meta: null,
        });
    }
});

router.post("/login", async (request, response) => {
    try {
        const retrieveError = ({message, status}) => {
            response.status(status).json({status, message, data: [], meta: null});
        };
        const {email, password} = request.body;
        if (email && password) {
            const databaseResponse = await User.find({email: email}).exec();
            if (databaseResponse.length) {
                const account = databaseResponse[0];
                const hash = account.password;
                const successfullyDecrypted = bcrypt.compareSync(password, hash);
                if (successfullyDecrypted) {
                    const {_id} = account;
                    const token = jwt.sign({id: _id}, process.env.SESSION_SECRET, {
                        expiresIn: 3600000, // expires in 60min
                    });
                    response.status(200).json({
                        data: {
                            token,
                            expiresIn: Date.now() + 3600000,
                        },
                        status: 200,
                        message: "User successfully logged in.",
                    });
                } else retrieveError({status: 401, message: "Incorrect password."});
            } else {
                retrieveError({
                    status: 401,
                    message: "Incorrect email and / or password (s).",
                });
            }
        } else {
            retrieveError({
                status: 401,
                message: "You must provide a valid email and password.",
            });
        }
    } catch (error) {
        console.error(error);
        if (error.message === "Cannot read property 'dataValues' of null") {
            response.status(401).json({
                status: 401,
                message: "Incorrect email.",
                data: [],
                meta: null,
            });
        } else {
            response.status(500).json({
                status: 500,
                message: error.message || error,
                data: [],
                meta: null,
            });
        }
    }
});

module.exports = router;