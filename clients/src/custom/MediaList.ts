
export async function userStream() {
  try {
    if (localStorage.getItem("audioList") && localStorage.getItem("videoList")) return ;
    await navigator.mediaDevices.getUserMedia({audio: true, video: true});
    const stream = await navigator.mediaDevices.enumerateDevices();
    const audioList = stream.filter((device) => device.kind === 'audioinput').map((device, index) => ({
      idx: `audio-${index}`,
      value: device.deviceId,
      label: device.label
    }));
    const videoList = stream.filter((device) => device.kind === 'videoinput').map((device, index) => ({
      idx: `video-${index}`,
      value: device.deviceId,
      label: device.label
    }));
    localStorage.setItem("audioList", JSON.stringify(audioList));
    localStorage.setItem("videoList", JSON.stringify(videoList));
  } catch(e: any) {
    console.error(e);
  }
};

interface ChangeStremProps {
  audios?: string;
  videos?: string;
}

export async function changeStream(props: ChangeStremProps) {
  try {
    if (props.audios && props.videos) {
      await navigator.mediaDevices.getUserMedia({
        audio: {deviceId: props.audios},
        video: {deviceId: props.videos}
      });
    } else if (props.audios) {
      await navigator.mediaDevices.getUserMedia({
        audio: {deviceId: props.audios}
      });
    }
  } catch(e: any) {
    console.log(e);
  }
}