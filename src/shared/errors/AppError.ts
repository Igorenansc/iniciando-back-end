class AppError {
  public readonly message: string;

  public readonly statusCode: number; // Ex.: 400(Bad Requisition), 200(OK)

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
