import { MemberProps } from '../states/roomState';

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

export const filePostFetch = async (
  {url, roomNumber, nick, files}:
  {url: string, roomNumber: string, nick: string, files: MemberProps}) => {
  try{
    const convertFormData = new FormData();
    convertFormData.append('roomNumber', roomNumber);
    convertFormData.append('nick', nick);
    convertFormData.append(`idx`, files.idx)
    convertFormData.append(`name`, files.name)
    convertFormData.append(`rating`, files.rating)
    convertFormData.append(`files.imgSrc`, files.imgSrc, files.imgSrc.type)

    const res = await fetch(`http://localhost:8000/${url}`, {
      method: "POST",
      body: convertFormData,
    });
    const data = await res.json();
    return res.ok ? {"status": true, "data":  data.message} : {"status": false, "data": data.message};
  } catch (e: any) {
    return { "status": false, "data": e.message }
  }
}