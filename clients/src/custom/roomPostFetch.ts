

export const roomPostFetch = async (url: string, nick: string) => {
  try {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({nick: nick})
    }
    const res = await fetch(`http://localhost:8000/${url}`, options);
    const data = await res.json();
    if (res.ok) return { "status": true, "data": data.roomNumber };
    else return { "status": false, "data": data.message }
      ;
  } catch(e: any) {
    return {
      "status": false,
      "data": e.message
    }
  }
};

export const roomPatchFetch = async (url: string, roomsNumber: string, nick: string) => {
  try {
    const options = {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({"roomNumber": roomsNumber, "nick": nick})
    }
    const res = await fetch(`http://localhost:8000/${url}`, options);
    const data = await res.json();
    if (res.ok) return {"status": true, "data":  data.message};
    else return {"status": false, "data": data.message}

  } catch (e: any) {
    return {
      "status": false,
      "data": e.message
    }
  }
}