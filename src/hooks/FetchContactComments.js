import getApiUrl from "./baseurl";
const postContactData = async (data) => {
  try {
    const response = await fetch(`${getApiUrl()}/api/contact-messengers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
  } catch (error) {
    console.error(error);
  }
};

export default postContactData;
