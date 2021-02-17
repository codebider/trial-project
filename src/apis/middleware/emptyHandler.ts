import express from 'express';

const emptyHandler: express.RequestHandler = async (req, res, next) => {
    next();
};

export default emptyHandler;
