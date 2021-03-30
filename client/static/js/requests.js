// Request handling

async function handlePost(e) {
  e.preventDeafult();
  try {
    const options = {
      method: 'POST',
      headers: { "Context-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
    }

    const response = await fetch('http://localhost:3000/', options);
    const { id, err } = await response.json();
    if (err) {
      throw Error(err);
    } else {
      window.location.hash = `${id}`;
    }
  } catch (err) {
    console.warn(err);
  }
}

async function getPost(id) {
  try {
    const response = await fetch(`http://localhost:3000/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
}