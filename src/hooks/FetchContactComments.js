const postContactData = async (data) => {
  try {
    const response = await fetch(
      `http://localhost:1337/api/contact-messengers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
  } catch (error) {
    console.error(error);
  }
};

export default postContactData;
