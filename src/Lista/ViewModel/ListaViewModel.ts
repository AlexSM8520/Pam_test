export const GetLista = async () => {
  try {
    const url = 'https://6172cfe5110a740017222e2b.mockapi.io/elements';
    const req = await fetch(url, {
      method: 'GET',
    });
    const respList = await req.json();
    return respList;
  } catch (e) {
    console.error(e);
    return null;
  }
};
