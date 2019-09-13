const ErrorToString = Error.prototype.toString;

function prepareStackTrace(err, trace) {
  const errorString = ErrorToString.call(err);
  if (trace.length === 0) return errorString;

  return `${errorString}\n    at ${trace.join('\n    at ')}`;
}

module.exports = prepareStackTrace;
