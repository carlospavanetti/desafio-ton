function HttpResponse(statusCode, body) {
  return { statusCode, body: JSON.stringify(body) };
}

module.exports = HttpResponse;
