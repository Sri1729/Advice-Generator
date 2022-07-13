interface adviceResponse {
  slip: { id: string; advice: string };
}

export const getAdviceFromAPI = async (): Promise<adviceResponse> => {
  const resp = await fetch("https://api.adviceslip.com/advice");
  return resp.json();
};
