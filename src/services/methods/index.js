// GET POST PUT DELETE

export const GET = (token) => {
  return {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
};

export const GETO = () => {
  return {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
};


export const POST = (body, token) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  };
};

export const POSTO = (body) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
};

export const POST_FORM_DATA = body => {
  return {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: body,
  };
};

export const DELETE = (id) => {
  return {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
}