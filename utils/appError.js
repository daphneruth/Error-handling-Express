class appError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.message = `${statusCode}.startWith`("4") ? "fail" : "error";
  }
}
