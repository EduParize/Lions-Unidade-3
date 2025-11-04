export default function returnError(message, statusCode = 500){
    const error = new Error(message)
    error.nome = 'HttpError';
    error.statusCode = statusCode
    return error
}