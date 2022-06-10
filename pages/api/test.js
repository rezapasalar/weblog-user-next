import nc from 'next-connect'

const middleware = (req, res, next) => {
    req.message = 'Hello Wold'
    next()
}

export default nc()
    .use(middleware)
    .get((req, res) => res.status(200).json({message: req.message}))