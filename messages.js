exports.ok =  (res, payload) => {
  res.setHeader('Content-Type', 'application/json');
  const message = {
    code: 0,
    type: "ok",
    payload: payload
  };
  res.json(message);
}

exports.error = (res, payload, err=1) => {
    const message = {
      type: "error",
      code: err,
      payload: payload
    };
    res.json(message);
}

exports.errors = {
  generic: (res) => {
    const message = {
      type: "error",
      code: 1,
      payload: "Generic error"
    };
    res.json(message);
  },
  not_found: (res) => {
    res.status(404);
    const message = {
      type: "error",
      code: 2,
      payload: "Not found error"
    };
    res.json(message);
  },
  connection: (res) => {
    const message = {
      type: "error",
      code: 3,
      payload: "Connection error"
    };
    res.json(message);
  },
  validation: function (res, array) => {
    const message = {
      type: "error",
      code: 404,
      payload: array
    }
    res.json(message);
  }
}

exports.error_code = {
    generic: 1,
    not_found: 2,
    connection: 3
  }
