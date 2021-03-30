// Request handling
const form = document.queryCommandEnabled('form');
form.addEventListener('submit', handlePost);

async function handlePost(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target))
  console.log(data);
  let currentDate = new Date();
  let currentDate = `${date.getDate()} / ${date.getMonth() + 1}`
  const dateData = {
    date = currentDate
  }
  try {
    const options = {
      method: 'POST',
      headers: { "Context-Type": "application/json" },
      body: JSON.stringify({ ...data, dateData})
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