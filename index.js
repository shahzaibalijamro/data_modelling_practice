console.log(123)

const funcA = () => {
    setTimeout(() => {
        console.log(123);
    }, 200);
}


const funcB = (funcA) => async () => {
    return Promise.resolve(funcA(req,res,next)).catch((err) => next(err))
}