const httpResponse = {
  badRequest(error) {
    return {
      statusCode: 400,
      body: error,
    };
  },
};

export default httpResponse;
